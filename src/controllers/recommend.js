const recommendService = require("../service/recommend.js");
const { handleResponse } = require("../middlewares/response.middleware.js");
const { redisClient } = require("../config/redis.config.js");
const getReccomendations = async (req, res) => {
  try {
    const key = `posts-${req.body.trainingDocument._id}`;
    const data = await recommendService.getReccomendations(req.body);
    await redisClient.set(key, JSON.stringify(data),{
      EX: 180,
      NX: true,
    });
    handleResponse(res, 200, data, false);
  } catch (error) {
    console.log(error)
    handleResponse(res, 500, error);
  }
};

module.exports = { getReccomendations };
