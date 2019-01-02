const mongoose = require("mongoose");

const schema = {
    userId: { type: Number, index:1 },
    competitor:String,
    score: Number,
    date:String,
    time:String,
    competitorDetail:{
        country:String,
        birth:String
    }
}
const cruise_schema = new mongoose.Schema(schema);
const cruises = mongoose.model("cruises",cruise_schema);
module.exports = cruises;
