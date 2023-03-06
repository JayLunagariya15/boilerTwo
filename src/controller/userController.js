const user = require('../model/userSchema');



//registration
const register = async(req,res)=>{

    const {name,email,gender,phone,vehicle}= req.body

    try{
        const userReg = await user({name:name, email:email, phone:phone, gender:gender,vehicle:vehicle});
        const saveUser = await userReg.save();

        res.status(200).json(userReg);
    }catch(err){
        console.log(err);
        res.status(400).json({message : err.message});
    };
};




//updateOne user
const updateoneuser = async (req, res) => {
    const {name,email,gender,phone,vehicle}= req.body
  
    try {
      const updateuser = await user.updateOne({name:name}, {email:email});
  
      console.log(updateuser);
      res.status(200).json(updateuser);
    } catch (err) {
      console.log(err);
      res.status(400).json({ message: err.message });
    }
  };

  //updateMany user
const updatemanyuser = async (req, res) => {
    const {name,email,gender,phone,vehicle}= req.body

    try {
      const updatemanyuser = await user.updateOne(
        { name: name },
        {$set:{ email: email, phone: phone, gender: gender,vehicle:vehicle }}
      );
  
      console.log(updatemanyuser);
      res.status(200).json({ message: "User data are Updated" });
    } catch (err) {
      console.log(err);
      res.status(400).json({ message: err.message });
    }
};

//deleteOne user
const deleteoneuser = async (req, res) => {
    const { name, email, phone, gender } = req.body;
  
    try {
      const delOne = await user.deleteOne({name:name});
      console.log(delOne);
      res.status(200).json({ message: "data deleted " });
    } catch (err) {
      console.log(err);
      res.status(400).json({ message: err.message });
    }
  };

//find and update
const modify = async (req, res) => {
    const { name, email, phone, gender } = req.body;
    try {
      const modified = await user.findOneAndUpdate(
        { name:name },
        { email: email, phone: phone, gender: gender },
        { new: true }
      );
  
      console.log(modified);
      res.status(200).json(modified);
    } catch (err) {
      console.log(err);
      res.status(400).json({ message: err.message });
    }
  };




module.exports = {register, updateoneuser, updatemanyuser,deleteoneuser, modify};