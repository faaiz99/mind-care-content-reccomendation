function extractIdAndTitle(data) {
  return data.map((item) => ({
    id: item._id,
    content: item.title,
  }));
}

module.exports = { extractIdAndTitle };
