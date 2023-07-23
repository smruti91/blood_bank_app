const inventoryModel = require("../models/inventoryModel");
const userModel = require("../models/userModel");

// create inventory
const createInventoryController = async(req,res)=>{
    try {
        const {email,inventoryType}=req.body
        //validation
        const user = await userModel.findOne({email});
        if(!user){
             throw new Error('user not found')
        }
        if(inventoryType === 'in' && user.role !== 'donar'){
            throw new Error('Not a Donar Account');
        }
        if(inventoryType === 'out' && user.role !== 'hospital'){
            throw new Error('Not a hospital Account');
        }

        //save record
        const inventory = new inventoryModel(req.body)
        await inventory.save();
        return res.status(201).send({
            success: true,
            message: 'Record saved successfully'
        })

    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success:false,
            message:'Error in creating Inventory API',
            error
        })
    }
}

module.exports = {createInventoryController}