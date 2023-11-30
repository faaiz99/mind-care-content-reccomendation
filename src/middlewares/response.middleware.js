/* global process */
exports.handleResponse = function (res, status, data, isCached = false) {
  if (process.env.NODE_ENV === "production") res.status(status).json({ data, isCached });
  else res.status(status).json({ data, isCached});
};
