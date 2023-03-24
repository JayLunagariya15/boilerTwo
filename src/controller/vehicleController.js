const vehicle = require("../model/vehicleSchema");
const user = require("../model/userSchema");

//registration
// const vehicleRegister = async (req, res) => {
//   const { type, company, manufectured, imported, exported } = req.body;

//   try {
//     const reg = await vehicle({type:type,company: company,manufectured: manufectured,imported: imported,exported: exported});
//     const saveUser = await reg.save();

//     res.status(200).json(reg);
//   } catch (err) {
//     console.log(err);
//     res.status(400).json({ message: err.message });
//   }
// };


//pushing vehicles id in all user
const creating = async (req, res) => {
  const { name, link, type, company, manufectured, imported, exported } = req.body;

  try {
    const founduser = await user.findOne({name:name });
    console.log("name : ", name);

    const findtype = await vehicle.findOne({type:type});
    console.log("findvehicle: ", findtype);

    if (findtype) {
      founduser.link.push(findtype._id);
      const idExist = await user.find({ link:link });
      console.log("id  exist");
      if (!findtype._id) {
        return res.status(400).json({ message: "Id already Exist" });
      }
    } else {
      const creaetVehicle = await vehicle({type:type, company:company, manufectured:manufectured, imported:imported, exported:exported});
      // founduser.link.push(findvehicle._id);
      await creaetVehicle.save();
    }
    await founduser.save();
    res.status(200).json(founduser);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
};

//get all details with user
const find = async(req,res)=>{
const{name,type, company, manufectured, imported, exported } = req.body
    try{
        const getall = await user.find({},{name:1}).populate({path:'link'}); //, match:{ $expr: {type:type}}
        console.log("get all : ", getall);

        res.status(200).json(getall);

    }catch(err){
        console.log(err);
        res.status(400).json({message: err.message});
    };
};


// get one user details
const getoneuser = async (req, res) => {

  const name = req.params.name
  
  try{
      const oneUser =  await user.findOne({name:name}).populate({path:'link'});
      console.log(oneUser);

      return res.status(200).json(oneUser);
  } catch(err){
      return res.status(400).json({message: err.message});
  }
};

//find by Id
const findbyID =  async(req,res)=>{
  const {_id} = req.body

  try{
      const byId = await user.findById({_id :_id}).populate('link');

      console.log(byId);
      res.status(200).json(byId);  
  }catch(err){
      console.log(err);
      res.status(400).json({message: err.message});
  };
};



//$match
const match = async(req,res)=>{
  const {type,name} = req.body
  try{
    const foundtype = await vehicle.find({type:type});
      if(!foundtype){
        return res.status(400).json({message : "no types in database"})
      }else{
        const mat = await user.find({},{name:1}).populate({path:'link', match:{type:type}});
      
      return res.status(200).json(mat);
      }
    }catch(err){
      res.status(400).json({message: err.message})
  }
}


// get user using query part
const gets = async(req,res)=>{

  const name = req.query.name
  try{
    const namequery =  await user.findOne({name:name}).populate({path:'link'});
    console.log(namequery);

    return res.status(200).json(namequery);
} catch(err){
    return res.status(400).json({message: err.message});
}
};

module.exports = { creating , find, getoneuser, findbyID ,match , gets}; // ,vehicleRegister