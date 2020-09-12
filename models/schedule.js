const { Schema, model } = require('mongoose');
const scheduleSchema = new Schema({
    owner: {
        name: {
            type: String,
            required: true
        },
        password: String
    },
    schedule: [{
        dow: {
            type: String,
            required: true
        },
        lessons: [{
            start: String,
            name: String
        }]
    }]
});
module.exports = model('Schedule', scheduleSchema);