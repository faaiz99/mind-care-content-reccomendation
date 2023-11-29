const fetch = require("node-fetch");
const dotenv = require("dotenv");
const { extractIdAndTitle } = require("../utils/extractIdAndTitle.js");
const ContentBasedRecommender = require("content-based-recommender");

dotenv.config();

const trainAndReccomendPosts = async (
  trainingDocumentId,
  PredictionDocuments,
) => {
  const recommender = new ContentBasedRecommender({
    minScore: 0.00000000000001,
    maxSimilarDocuments: 100,
  });
  let similarDocuments
  try {
    recommender.train(PredictionDocuments);
    similarDocuments = recommender.getSimilarDocuments(
      trainingDocumentId,
      0,
      10,
    );
    console.log("Similar Documents: ", similarDocuments);
  } catch (error) {
    console.log(error.message);
  }
  return similarDocuments;
};

// NOT A SERVICE METHOD
const getContent = async (type, trainingDocument) => {
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
  let mappedPostsWithIdAndContent = [];
  MIND_CARE_BACKEND = process.env.MIND_CARE_BACKEND;
  try {
    const response = await fetch(`${MIND_CARE_BACKEND}/therapist/${type}/`);
    let posts = await response.json();
    mappedPostsWithIdAndContent = extractIdAndTitle(posts);
    await trainAndReccomendPosts(
      trainingDocument._id,
      mappedPostsWithIdAndContent,
    );
    return data;
  } catch (error) {
    console.log("CR could not get posts", error.message);
  } finally {
  }
};

// SERVICE METHOD
const getReccomendations = async (trainingDocument) => {
  // all the models related work will be done in repository
  const data = getContent("posts", trainingDocument);
  return data;
};

module.exports = { getReccomendations };
