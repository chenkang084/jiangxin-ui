let config;

switch (env) {
  case "dev":
    config = require("./config.dev").default;
    break;
  case "prod":
    config = require("./config.prod").default;
    break;
  default:
    config = require("./config.dev").default;
    break;
}

export default config;
