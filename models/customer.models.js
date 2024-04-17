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
        items:{
            type:String,
            required:true
        }
    },
    {
        timestamps:true
    }
)

const Customer = mongoose.model("Customer",CustomerSchema);

module.exports=Customer;