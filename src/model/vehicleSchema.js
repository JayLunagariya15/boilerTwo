const mongoose = require('mongoose');

const vehicleSchema = mongoose.Schema({
    type : {
        type :String,
        enum : ['car', 'bike']
    },

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },

    company :{
        type:String
    },
    
    manufectured :{
        type: Number,
    },

    imported:{
        type: Boolean,
    },

    exported:{
        type:Boolean
    },
},{timestamp: true});

const vehicle = mongoose.model('vehicle', vehicleSchema);
module.exports = vehicle