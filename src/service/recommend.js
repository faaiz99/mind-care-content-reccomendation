const fetch = require("node-fetch");
const dotenv = require("dotenv");
dotenv.config();
const ContentBasedRecommender = require("content-based-recommender");

const trainAndReccomendPosts = async (trainingDocumentId, PredictionDocuments) => {
    const recommender = new ContentBasedRecommender({
        minScore: 0.000001,
        maxSimilarDocuments: 100
    });
    try {
        recommender.train(PredictionDocuments);
        console.log("Training Done", trainingDocumentId)
        const similarDocuments = recommender.getSimilarDocuments(trainingDocumentId, 0, 10);
        console.log("Similar Documents: ", similarDocuments)
    } catch (error) {
        console.log(error.message)
    }
    return similarDocuments
}


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
    MIND_CARE_BACKEND = process.env.MIND_CARE_BACKEND;
    try {
        // const response = await fetch(`${MIND_CARE_BACKEND}/therapist/${type}/`);
        // data = await response.json();
        // console.log("CR got posts", data)

        const data = [
            {
                _id: '6506d0002b0186f152fe5f93',
                therapistId: {
                    reInstatement: 0,
                    isBlocked: false,
                    _id: '64a6d4afdc2e12a645392d9a',
                    firstName: 'Mifra',
                    lastName: 'Waseem',
                    email: 'mifra@gmail.com',
                    gender: 'Female',
                    password: 'mifra123',
                    picture: 'https://firebasestorage.googleapis.com/v0/b/mind-care-b5645.appspot.com/o/Therapist%2Fpicture%2Ffaculty.png7173b607-8764-4cc7-8a97-850e83bddb1a?alt=media&token=01c269c5-f043-48e5-a01f-77024f2588fc',
                    dateofBirth: '2023-07-06T14:49:37.535Z',
                    experience: '1',
                    downloadURL: 'https://firebasestorage.googleapis.com/v0/b/mind-care-b5645.appspot.com/o/Therapist%2Fdocuments%2FAssignment1.docx19695581-be9a-4856-aae5-42a2134daff2?alt=media&token=0036ceb4-db3d-4d76-b476-1911e354168d',
                    specialization: '1',
                    __v: 0
                },
                title: 'Is it possible to use javascript for machine learning?',
                body: 'saaaaaaaaaaaaaaaaaaa',
                tags: [],
                comments: [[Object], [Object]],
                upvotes: [[Object]],
                downvotes: [],
                postReport: [],
                __v: 0,
                createdAt: '2023-11-29T11:52:02.999Z'
            },
            {
                _id: '65561ca31da8bea3836aa896',
                clientId: {
                    reInstatement: 0,
                    isBlocked: false,
                    _id: '6554c1315e2efd649cc5a4e3',
                    firstName: 'Mifra',
                    lastName: 'Waseem',
                    email: 'mifra@gmail.com',
                    gender: 'Female',
                    password: 'mifra123',
                    profilePicture: 'https://firebasestorage.googleapis.com/v0/b/mind-care-b5645.appspot.com/o/Client%2Fimages%2Ffile%3A%2Fdata%2Fuser%2F0%2Fhost.exp.exponent%2Fcache%2FExperienceData%2F%252540anonymous%25252Fmind-care-mobile-8827fda9-fc54-4416-ae68-7118503b53d6%2FImagePicker%2Fe646cd70-b313-4482-866f-2e73f49753ae.jpeg?alt=media&token=607c6ee9-36c1-4634-8328-10330e61698e',
                    openJournals: [],
                    __v: 0
                },
                title: 'Why studying javascript is fun?',
                body: 'Bbbhh',
                tags: [],
                comments: [],
                upvotes: [],
                downvotes: [],
                postReport: [],
                createdAt: '2023-11-16T08:03:06.875Z',
                __v: 0
            }]

        function extractIdAndTitle(data) {
            return data.map(item => ({
                id: item._id,
                content: item.title
            }));
        }

        let result = extractIdAndTitle(data);
        console.log("CR result", result)
        await trainAndReccomendPosts(trainingDocument._id, result)
        return data

    } catch (error) {
        console.log("CR could not get posts", error.message)
    }
    finally {

      
    }

}


// SERVICE METHOD
const getReccomendations = async (trainingDocument) => {
    // all the models related work will be done in repository
    const data = getContent("posts", trainingDocument)
    return data
}

module.exports = { getReccomendations };