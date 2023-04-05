"use strict";

var _express = _interopRequireDefault(require("express"));
var _bodyParser = _interopRequireDefault(require("body-parser"));
var _helmet = _interopRequireDefault(require("helmet"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _file = _interopRequireDefault(require("./routes11/file23.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var blah = _dotenv["default"].config();
var PORT = process.env.PORT || 3011;
var app = (0, _express["default"])();
app.use((0, _helmet["default"])());
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: true
}));

/*******************************************************************************************/

app.use('/fileRouter', _file["default"]);
app.get('/', function (req, res) {
  res.send('<h1>Hello from the TypeScript world!</h1>');
});

/*******************************************************************************************/
var server23 = app.listen(PORT, function () {
  return console.log("Running on ".concat(PORT, " \u26A1"));
});
server23.on('error', onError23).on('SIGINT', function () {
  server23.close(function () {
    console.log('closedDD');
  });
});
function onError23(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }
  switch (error.code) {
    case 'EACCES':
      console.error(' requires elevated privileges23');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error('address23 is already in use');
      process.exit(1);
      break;
    default:
      process.exit(1);
  }
}
/**********************************************************************************************/