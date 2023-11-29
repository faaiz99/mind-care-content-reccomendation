const recommendService = require("../service/recommend.js");
const { handleResponse } = require("../middlewares/response.middleware.js");

const getReccomendations = async (req, res) => {
  try {
    const data = await recommendService.getReccomendations(req.body);
    handleResponse(res, 200, data);
  } catch (error) {
    handleResponse(res, 500, error);
  }
};

module.exports = { getReccomendations };
