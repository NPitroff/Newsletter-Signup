//api key for mailchimp
const mailchimp = require("@mailchimp/mailchimp_marketing");

mailchimp.setConfig({
  apiKey: "95d75a985e150ba3d0938dd3010cadfe-us14",
  server: "us14",
});

async function run() {
  const response = await mailchimp.ping.get();
  console.log(response);
}

run();
