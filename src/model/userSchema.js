const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

    name :{
        type : String,
        required : true
    },

    email:{
        type:String,
        unique: true,
        requird : true
    },

    phone :{
        type:String,
        unique: true,
    },

    gender :{
        type: String,
        enum: ['male','female']
    },

    link:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'vehicle'
    }]
},{timestamp:true});

const user = mongoose.model('user', userSchema);
module.exports = user