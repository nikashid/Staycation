require("dotenv").config();

const app = require("./app");
const mongoose = require("mongoose");
const port = process.env.PORT;
const username = process.env.DBUSERNAME;
const password = process.env.DBPASSWORD;

const url = `mongodb+srv://${username}:${password}@cluster0.kufzz.mongodb.net/Staycation?retryWrites=true&w=majority`;
const nonsrv = `mongodb://${username}:${password}@cluster0-shard-00-00.kufzz.mongodb.net:27017,cluster0-shard-00-01.kufzz.mongodb.net:27017,cluster0-shard-00-02.kufzz.mongodb.net:27017/Staycation?replicaSet=atlas-13xjqy-shard-0&ssl=true&authSource=admin`;
const local = `mongodb://127.0.0.1:27017/Staycation`;
const dockerUrl = `mongodb://StaycationDB:27017/Staycation`;
mongoose
  .connect(url)
  .then((res) => console.log("mongo connection successful"))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Application is listening to ${port}`);
});
