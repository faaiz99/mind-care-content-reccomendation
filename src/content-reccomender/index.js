var ContentBasedRecommender = require("../content-reccomender/content-based-reccomender.js");

var recommender = new ContentBasedRecommender({
  minScore: 0.00000000001,
  maxSimilarDocuments: 100,
});

// prepare documents data
// var documents = [
//     { id: '1000001', content: 'Why studying javascript is fun?' },
//     { id: '1000002', content: 'The trend for javascript in machine learning' },
//     { id: '1000003', content: 'The most insightful stories about JavaScript' },
//     { id: '1000004', content: 'Introduction to Machine Learning' },
//     { id: '1000005', content: 'Machine learning and its application' },
//     { id: '1000006', content: 'Python vs Javascript, which is better?' },
//     { id: '1000007', content: 'How Python saved my life?' },
//     { id: '1000008', content: 'The future of Bitcoin technology' },
//     { id: '1000009', content: 'Is it possible to use javascript for machine learning?' }
// ];

var documents = [
  {
    id: "6506d0002b0186f152fe5f93",
    content: "Is it possible to use javascript for machine learning?",
  },
  {
    id: "65561ca31da8bea3836aa896",
    content: "Why studying javascript is fun?",
  },
];

// start training
recommender.train(documents);

//get top 10 similar items to document 1000002
var similarDocuments = recommender.getSimilarDocuments(
  "6506d0002b0186f152fe5f93",
  0,
  10,
);

console.log(similarDocuments);

module.exports = { ContentBasedRecommender };
