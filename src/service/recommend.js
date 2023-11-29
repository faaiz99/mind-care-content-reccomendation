/* global process */
const fetch = require("node-fetch");
const dotenv = require("dotenv");
const { extractIdAndTitle } = require("../utils/extractIdAndTitle.js");
const ContentBasedRecommender = require("../content-reccomender/content-based-reccomender.js");
dotenv.config();

const trainAndReccomendPosts = async (
  trainingDocumentId,
  PredictionDocuments,
) => {
  const recommender = new ContentBasedRecommender({
    minScore: 0.00000000000001,
    maxSimilarDocuments: 100,
  });
  let similarDocuments;
  try {
    recommender.train(PredictionDocuments);
    similarDocuments = recommender.getSimilarDocuments(
      trainingDocumentId,
      0,
      10,
    );
  } catch (error) {
    console.log("Error Occured in the Reccomender", error.message);
  }
  if (!similarDocuments)
    throw new Error("No similar documents found", similarDocuments);
  return similarDocuments;
};

// NOT A SERVICE METHOD
const getContent = async (type, role, trainingDocument) => {
  /**
   *  type is posts and training documment sent from frontend on the basis of which
   *  we will train our model and reccomend posts
   */

  /**
   * SET ENDPOINT to GET DATA FROM OUR API ROUTE
   */
  let MIND_CARE_BACKEND;
  if (process.env.NODE_ENV !== "production") {
    MIND_CARE_BACKEND = dotenv.config().parsed.MIND_CARE_BACKEND;
  }
  MIND_CARE_BACKEND = process.env.MIND_CARE_BACKEND;
  try {
    if (typeof role === "string" || typeof type === "string") {
      role = role.toLowerCase();
      type = type.toLowerCase();
    } else throw new Error("Role and type must be strings and in lowercase");
    /** construct url for backend */
    const response = await fetch(`${MIND_CARE_BACKEND}/${role}/${type}/`);
    const typeData = await response.json();
    const predictionData = extractIdAndTitle(typeData.data);

    /** Pass the mapped data to reccomender */
    const reccomendedPosts = await trainAndReccomendPosts(
      trainingDocument._id,
      predictionData,
    );
    /**
     * Create a map of scores indexed by post ID
     * Steps performed on the data
     * Function to match _id with id and return only the posts whose score exists
     * Map score to each typeData.Data Object
     * Sort the reccomended data based on the score
     */
    const scoreMap = new Map(
      reccomendedPosts.map((postScore) => [postScore.id, postScore.score]),
    );

    const scoredPosts = typeData.data
      .map((post) => {
        const score = scoreMap.get(post._id);
        return score !== undefined ? { ...post, score } : null;
      })
      .filter((post) => post !== null)
      .sort((a, b) => b.score - a.score);

    return scoredPosts;
  } catch (error) {
    console.log("Error Occured", error.message);
  }
};

// SERVICE METHOD
const getReccomendations = async (body) => {
  const { trainingDocument, role, type } = body;
  if (!trainingDocument || !role || !type) {
    throw new Error("Training Document, role and type are required");
  }
  /**
   * role is either client or therapist
   * type is what the get request is related to for example posts/comments/journals etc etc
   * if type is posts then we will reccomend posts
   */
  const data = getContent(type, role, trainingDocument);
  return data;
};

module.exports = { getReccomendations };
