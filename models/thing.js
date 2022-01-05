const mongoose = require('mongoose');

const thingSchema =  mongoose.Schema({
        thingID : {
            type:String,
            required:true
        },
        thingName : {
            type:String,
            required:true
        },
        Description: {
            type:String,
            required:true
        }
});

module.exports = mongoose.model('thing',thingSchema);