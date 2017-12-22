let data = new Set();

exports.addSong = (name, author) => {
  if (!name || !author || data.has({name, author})) return false;

  data.add({name, author});
  return true;
};
