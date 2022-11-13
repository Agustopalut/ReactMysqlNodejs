import User from "../models/UserModel.js";

 export const getUsers = async (req,res) => {
    try{
        const response = await User.findAll();
        res.status(200).json(response);
    }catch(err) {
        console.log("error :",err.message);
    }
}
 export const getUsersById = async (req,res) => {
    try{
        const response = await User.findOne({
            where : {
                id : req.params.id
            }
        });
        res.status(200).json(response);
    }catch(err) {
        console.log("error :",err.message);
    }
}
 export const postUsers = async (req,res) => {
    try{
        const response = await User.create(req.body);
        res.status(200).json({message : "data created"});
    }catch(err) {
        console.log("error :",err.message);
    }
}
 export const editUsers = async (req,res) => {
    try{
        const response = await User.update(req.body,{
            where : {
                id : req.params.id
            }
        });
        res.status(200).json({message : "data updated"});
    }catch(err) {
        console.log("error :",err.message);
    }
}
 export const deleteUsers = async (req,res) => {
    try{
        const response = await User.destroy({
            where : {
                id : req.params.id
            }
        });
        res.status(200).json({message : "data deleted"});
    }catch(err) {
        console.log("error :",err.message);
    }
}