exports.handleResponse = function (res, status, data) {
  if (process.env.NODE_ENV === "production") res.status(status).json(data);
  else res.status(status).json({ data });
};
