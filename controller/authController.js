
import userModel from '../model/userModel.js';
import { comparePassword, hashPass } from '../utils/passwordHelper.js';
import { createJWT } from '../utils/tokenUtils.js';


export const register = async(req, res) => {
    const hashedPass = await hashPass(req.body.password)
    req.body.password = hashedPass
    req.body.userRole = Number(req.body.isMerchant) === 1 && 'merchant';

    const user = await userModel.create({...req.body});
    res.status(200).json({user})
}

export const login = async(req, res) => {
    const isExists = await userModel.findOne({email:req.body.email});

    if(!isExists) return res.status(404).json({msg:"not exists"});
    const matchedPass = await comparePassword(req.body.password, isExists.password);
    if(!matchedPass) return res.status(404).json({msg:"not exists"});

    const token = createJWT({userId:isExists?._id, role:isExists?.userRole})
    const oneDay = 1000 * 60 * 60 * 24;

    res.cookie('token', token, {
        httpOnly:true,
        expiresIn:new Date(Date.now() + oneDay),
        secure:process.env.NODE_ENV === 'production'
    })
    res.status(200).json({user:isExists})

}

export const updateAccount = async(req, res) => {
    let password;
    if(req.body.password){
        password = await hashPass(req.body.password)
    }
    console.log(req.user);
    req.body.password = password
    await userModel.findOneAndUpdate({
        _id:req.user._id
    },{...req.body},{new:true})

    res.status(200).json({msg:"Updated successfully"})
}

export const logout = async(req, res) => {
    res.cookie('token','logout',{
        httpOnly:true,
        expiresIn:new Date(Date.now())
    })
    res.status(200).json({msg:"Success logout"})

}
