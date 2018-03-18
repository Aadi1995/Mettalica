// import { connection } from 'mongoose';

const express= require('express'),
app=express(),
mongodb=require('mongodb'),
mongoose=require('mongoose'),
port=process.env.PORT || 3001,
TradeDb='mongodb://localhost:27017/Mettalica_Trade',
Trade=require('./models/trade.js');
TradeRoutes=require('./controllers/tradeRoute.js'),
bodyParser=require('body-parser'),
connection1=mongoose.connection;


connection1.on('error', (err) => {
    console.log(`Error while connecting to database: ${err.message}`);
});

connection1.once('open', () => {
    console.log('Connection to data base sucessfull');
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));
mongoose.connect(TradeDb);
app.use('/trades',TradeRoutes);

app.listen(port,(error)=>{
    if(!error){
        console.log('listening on port', port)
    }
    else{
        console.log(error);
    }
})
