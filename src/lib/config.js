const ip = require("ip");

function getAppConfig() {
  return require(`../../config.${process.env.NODE_ENV}.json`);
}

function getServiceName() {
  const packageJson = require("../../package.json");
  return `${packageJson.name} ${packageJson.version}`;
}

function getServiceIP() {
  return ip.address();
}

const appConfig = getAppConfig();
const serviceName = getServiceName();
const serviceIP = getServiceIP();

module.exports = {
  appConfig,
  serviceName,
  serviceIP
};
