const HeadlessChrome = require("simple-headless-chrome");
const querystring = require('querystring');

const apiURL = "https://web.whatsapp.com/send"
const browser = new HeadlessChrome({
  headless: true,
  launchChrome: false,
  chrome: {
    host: "localhost",
    port: 9222,
    remote: true
  }
});

async function run({ phone, text }) {
  await browser.init();
  const escapedText = querystring.escape(text)
  const wsClickURL = `${apiURL}?phone=${phone}&text=${escapedText}`;
  const mainTab = await browser.newTab({
    privateTab: false
  });
  await mainTab.goTo(wsClickURL);
  await mainTab.wait(8000);
  await mainTab.click(".compose-btn-send");
  await mainTab.wait(1000);
  await mainTab.close();
}

module.exports = run;
