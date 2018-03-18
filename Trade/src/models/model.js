const mongoose= require('mongoose'),
Schema=mongoose.Schema,

trade={
    side:String,
    quantity:Number,
    price:Number,
    tradedate:Date,
    status:String
}


const TradeSchema= new Schema(trade);

module.exports=mongoose.model('Trade',TradeSchema)