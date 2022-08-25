const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema


const formSchema = new mongoose.Schema({
    formName:{type: String},
    unitType:{type: String},
    category:{type: Array},
    fields:{type: Array},
});

const Form = mongoose.model('Form', formSchema);

module.exports = Form;
