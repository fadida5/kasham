const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema


const dataSchema = new mongoose.Schema({
    unitId:{type: String},
    dates:{type: Date},
    info:{type: Array},
});

const Data = mongoose.model('Data', dataSchema);

module.exports = Data;
