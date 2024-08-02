import userModel from "../model/userModel.js"


export const getCurrentUser = async(req, res) => {
    const user = await userModel.findById(req.user._id);
    if(!user) return res.status(404).json({msg:"User not found"});

    res.status(200).json({data:user})
}