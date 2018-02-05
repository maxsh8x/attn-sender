const ip = require("ip");

function GetAppConfig() {
  return require(`../../config.${process.env.NODE_ENV}.json`);
}

function GetServiceName() {
  const packageJson = require("../../package.json");
  return `${packageJson.name} ${packageJson.version}`;
}

function GetServiceIP() {
  return ip.address();
}

const appConfig = new GetAppConfig();
const serviceName = new GetServiceName();
const serviceIP = new GetServiceIP();

module.exports = {
  appConfig,
  serviceName,
  serviceIP
};
