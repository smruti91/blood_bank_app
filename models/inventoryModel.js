const mongoose = require('mongoose')

const inventorySchema = new mongoose.Schema({
  inventoryType:{
    type:String,
    required:[true,'inventory Type required'],
    enum:['in','out']
  }, 
  bloodGroup:{
    type:String,
    required:[true,'blood group is required'],
    enum:['O+','O-','AB+','Ab-','A+','A-','B+','B-']
  },
  quantity:{
    type:String,
    required:[true,'quantity required'],
  },
  organisation:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'users',
    required:[true,'organisation required'],
  },
  hospital:{
    type: mongoose.Schema.Types.ObjectId,
    ref:'users',
    required:function(){
        return this.inventoryType === 'out'
    }
  },
  donar:{
    type: mongoose.Schema.Types.ObjectId,
    ref:'users',
    required:function(){
        return this.inventoryType === 'in'
    }
  }
},{timestamps:true});

module.exports = mongoose.model('Inventory',inventorySchema)