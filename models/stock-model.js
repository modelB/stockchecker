//Require Mongoose
const mongoose = require("mongoose");

//Define a schema
const Schema = mongoose.Schema;

const StockSchema = new Schema({
  ticker: String,
  likes: Number
});

export const StockModel = mongoose.model("stock", StockSchema);