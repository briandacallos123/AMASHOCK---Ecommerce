import orderModel from "../model/orderModel.js"


export const createorder = async(req, res) => {
    try {
       let payload = req.body.map((item)=>{
        return {
            ...item,
            customerId: req.user._id
        }
       })
        await orderModel.insertMany(payload)
        res.status(200).json({msg:"created successfully"})
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
        
    }
}

export const getAllordersByCustomer = async(req, res) => {
    try {
        console.log(req.body,'????????');
        const data = await orderModel.find({customerId:req.user._id}).limit(req.body.take).skip(req.body.skip);

        res.status(200).json({data})
    } catch (error) {
        res.status(500).json({error})
        
    }
}

export const getAllordersByMerchant = async(req, res) => {
    try {

        const data = await orderModel.find({sellerId:req.user._id});

        console.log(data,'DATAAA', req.user._id)
        res.status(200).json({data})
    } catch (error) {
        res.status(500).json({error})
        
    }
}



