const { CronJob } = require("cron");
const { fetchAndStorePrice } = require("./controllers/priceController");

const job = new CronJob("0,10,20,30,40,50 * * * *", () => {
  console.log("Fetching and storing Ethereum price...");
  fetchAndStorePrice();
});
job.start();
