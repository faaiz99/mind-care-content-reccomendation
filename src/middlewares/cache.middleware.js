const {handleResponse} = require('../middlewares/response.middleware');
const {redisClient} = require('../config/redis.config');
const cachedPosts = async (req, res, next) => {
    let isCached = false;
    const key = `posts-${req.body.trainingDocument._id}`;
    const cachedResults = await redisClient.get(key);
    if (cachedResults) {
      isCached = true;
      handleResponse(res, 200, JSON.parse(cachedResults), isCached);
    } 
    else {
      next();
    }
  };
  
  module.exports = { cachedPosts };