import * as recommendService from "../service/recommend.js"
import { handleResponse } from '../middlewares/response.middleware.js';
export const getReccomendations = async (req, res) => {
    try {
        const data = await recommendService.getReccomendations(id);
        handleResponse(res, 200, data);
    }
    catch (error) {
        handleResponse(res, 500, error);
    }
}