let config;

switch (env) {
  case "dev":
    config = require("./config.dev");
    break;
  case "prod":
    config = require("./config.prod");
    break;
  default:
    config = require("./config.dev");
    break;
}

export default config;
