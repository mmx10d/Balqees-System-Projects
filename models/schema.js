const mongoose = require('mongoose');
const schema = mongoose.Schema;

const artSchema = new schema({
    photo: String,
    name: String,
    price: String,
    description: String,
    date:{
        year: String,
        month: String,
        day: String
    }
})

const Mydata = mongoose.model("Mydat", artSchema);


module.exports = Mydata;