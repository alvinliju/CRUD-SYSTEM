const mongoose=require('mongoose');

const CustomerSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:false,
        },
        table:{
            type:Number,
            required:true
        },
        orders:{
            type:String,
            required:true
        },
        price:{
            type:Number,
            required:true
        }
    },
    {
        timestamps:true
    }
)

const Customer = mongoose.model("Customer",CustomerSchema);

module.exports=Customer;