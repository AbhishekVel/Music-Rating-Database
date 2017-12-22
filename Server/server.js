//local dependencies
const config = require('./config');
const songs = require('./songs');

//express setup
const app = require('express')();
const http = require('http').Server(app);
const bodyParser = require("body-parser");
const helmet = require('helmet');
app.use(helmet()); // handles xss protection and other web-securities
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: '500mb' }));
app.use(bodyParser.urlencoded({ limit: '500mb', extended: true }));

app.listen(config.port, () => {
  console.log(`Server started on port ${config.port}`);
});

app.post("/addsong", (req, res) => {
  const song = req.body ? req.body.song : null;
  const author = req.body ? req.body.author : null;

  if (songs.addSong(song, author)) {
    res.status(200).send(
      `Thank you, ${song} by ${author} has been added to the collection.`
    );
  } else {
    res.status(500).send(
      'The song you requested may already be in our collection.'
    );
  }
});
