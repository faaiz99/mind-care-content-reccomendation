// var ContentBasedRecommender = require("../content-reccomender/content-based-reccomender.js");

// var recommender = new ContentBasedRecommender({
//   minScore: 0.00000000001,
//   maxSimilarDocuments: 100,
// });

// // prepare documents data
// // var documents = [
// //     { id: '1000001', content: 'Why studying javascript is fun?' },
// //     { id: '1000002', content: 'The trend for javascript in machine learning' },
// //     { id: '1000003', content: 'The most insightful stories about JavaScript' },
// //     { id: '1000004', content: 'Introduction to Machine Learning' },
// //     { id: '1000005', content: 'Machine learning and its application' },
// //     { id: '1000006', content: 'Python vs Javascript, which is better?' },
// //     { id: '1000007', content: 'How Python saved my life?' },
// //     { id: '1000008', content: 'The future of Bitcoin technology' },
// //     { id: '1000009', content: 'Is it possible to use javascript for machine learning?' }
// // ];

// var documents =  [
//   { "id": "6506d0002b0186f152fe5f93", "content": 'Finding peace within oneself is crucial for mental well-being' },
//   { "id": "65561ca31da8bea3836aa896", "content": 'Embracing positivity in your thoughts can improve mental health' },
//   { "id": "650894e1d7f63bd38d54d0c1", "content": 'Taking time for self-care is essential for a healthy mind' },
//   { "id": "655622b31da8bea3836aa8c3", "content": 'Connecting with others can provide a sense of belonging and support mental health' },
//   { "id": "65044658e3ec92105fb0df98", "content": 'Mindfulness and meditation are effective tools for managing stress and anxiety' },
//   { "id": "6556185a1da8bea3836aa869", "content": 'Expressing gratitude daily can positively impact mental well-being' },
//   { "id": "655619531da8bea3836aa87b", "content": 'Reflecting on personal growth is a powerful aspect of mental health' },
//   { "id": "655642e31da8bea3836aa8e7", "content": 'Being kind to yourself and others contributes to a healthier mental state' },
//   { "id": "655644ba1da8bea3836aa8eb", "content": 'Cultivating a positive mindset is an ongoing journey for mental wellness' },
//   { "id": "650abb2e2b31a2460321fc8f", "content": 'Acknowledging and expressing your emotions is vital for mental health' },
//   { "id": "655619261da8bea3836aa875", "content": 'Rdd: Resilience, Determination, and Discipline - keys to mental strength' },
//   { "id": "6556194e1da8bea3836aa879", "content": 'Every challenge is an opportunity for personal and mental growth' },
//   { "id": "6556188a1da8bea3836aa86b", "content": 'Tgg: Taking Good Care of your mental health should be a priority' },
//   { "id": "655619801da8bea3836aa87d", "content": 'Rdd: Respecting, Understanding, and Nurturing your mental health' },
//   { "id": "65561cac1da8bea3836aa898", "content": 'Yhhhh: Yoga, Healthy habits, and Harmony for mental well-being' },
//   { "id": "65044a4de3ec92105fb0e008", "content": 'Practicing self-compassion is a fundamental aspect of mental health' },
//   { "id": "6556199b1da8bea3836aa883", "content": 'Rdd: Recharge, Relax, and Disconnect for better mental balance' },
//   { "id": "650acb602b31a2460321fd0e", "content": 'Facts: Fostering a caring and trusting support system for mental health' },
//   { "id": "65560f1e1da8bea3836aa856", "content": 'Mifra: Mindful living for a resilient attitude towards mental challenges' },
//   { "id": "6556216e1da8bea3836aa8ac", "content": 'Hwhwh: Healing with humor - laughter is good for mental health' },
//   { "id": "655621ba1da8bea3836aa8b3", "content": 'Hshe: Healing through self-expression for a positive mental state' },
//   { "id": "6556220c1da8bea3836aa8ba", "content": 'Hdd: Harmony in daily decisions promotes mental well-being' },
//   { "id": "655619971da8bea3836aa881", "content": 'Rdd: Remembering to prioritize mental health in all aspects of life' },
//   { "id": "655621541da8bea3836aa8a9", "content": 'Hshw: Healthy sleep habits contribute to a sound mental state' },
//   { "id": "6556219c1da8bea3836aa8ae", "content": 'Hwhwh: Honoring your mental health with intentional practices' },
//   { "id": "65045305e3ec92105fb0e088", "content": 'xx: Taking a moment for self-reflection is beneficial for mental clarity' },
//   { "id": "655642221da8bea3836aa8e5", "content": 'Be nice: Spreading kindness positively impacts both mental and emotional health' },
//   { "id": "655619941da8bea3836aa87f", "content": 'Rdd: Reconnecting with nature is a simple yet effective mental health strategy' },
//   { "id": "6556193a1da8bea3836aa877", "content": 'Rdd: Recognizing the importance of mental health advocacy and awareness' },
//   { "id": "6513eb4931a2d81440717293", "content": 'Aaaaaaaaaaaaaaaaaa: A reminder to practice deep breathing for mental relaxation' },
//   { "id": "6513ec8f31a2d814407172a0", "content": 'Hello: Healthy connections and social support are crucial for mental well-being' },
//   { "id": "655617a91da8bea3836aa865", "content": 'Rdd: Resilience and daily affirmations contribute to a positive mental outlook' },
//   { "id": "655619201da8bea3836aa873", "content": 'Rdd: Reflecting on your achievements boosts self-esteem and mental health' },
//   { "id": "655619b41da8bea3836aa885", "content": 'Rdd: Recognizing the importance of self-love in the journey of mental wellness' },
//   { "id": "655621a41da8bea3836aa8b1", "content": 'Hshe: Honoring your mental health through creativity and self-expression' },
//   { "id": "655621bb1da8bea3836aa8b5", "content": 'Hshe: Healing your mind through positive affirmations and self-compassion' },
//   { "id": "65561cae1da8bea3836aa89a", "content": 'Yhhhh: Yoga and mindfulness practices for a centered and calm mental state' },
//   { "id": "655641e81da8bea3836aa8e1", "content": 'Be nice: Building a supportive and compassionate community promotes mental health' },
//   { "id": "655776caf68183bbba93f418", "content": 'Random: Taking  a moment to breathe deeply can help you relax and clear your mind' },
// ]

// console.log(documents[0].content)
// // start training
// recommender.train(documents);

// //get top 10 similar items to document 1000002
// var similarDocuments = recommender.getSimilarDocuments(
//   "6506d0002b0186f152fe5f93",
//   0,
//   10,
// );

// console.log(similarDocuments);

// module.exports = { ContentBasedRecommender };
