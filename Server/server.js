const app = require('express')();
const http = require('http').Server(app);
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: '500mb' }));
app.use(bodyParser.urlencoded({ limit: '500mb', extended: true }));

app.listen(config.port, () => {
  console.log("Server started on port ${config.port}");
});
