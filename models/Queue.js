import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const QueueSchema = new Schema
({
    no : {type:Number, required: true},
    ticketNumbers: {type: Array, required: true}
});

module.exports = mongoose.models.Queue || mongoose.model('Queue', QueueSchema);