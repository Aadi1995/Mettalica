const Router= require('express').Router(),
Trade=require('../Models/model.js');

Router.get('/allTrades',(req,res)=>{
    Trade.find({}).exec((error,trades)=>{
        if(error){
            res.send(error);
        }
        else{
            res.send(trades);
        }
    })
});

Router.get('/index/:id',(req,res)=>{
    Trade.findById(req.params.id,(error,trade)=>{
        if(error){
            res.send(error)
        }
        else{
            res.send(trade);
        }
    })
});

Router.post('/new',(req,res)=>{
    let newTrade=new Trade();
    newTrade.side=req.body.side;
    newTrade.quantity=req.body.quantity;
    newTrade.price=req.body.price;
    newTrade.tradeDate=req.body.tradeDate;
    newTrade.status=req.body.status;
    newTrade.save((error,trade)=>{
        if(error){
            res.send(error);
        }
        else{
            res.send(trade)
        }
    })
})
Router.put('/update/:id',(req,res)=>{
    Trade.findById(req.params.id,(error,trade)=>{
        if(error){
            res.send(error)
        }
        else{
            trade.side=req.body.side || trade.side;
            trade.quantity=req.body.quantity || trade.quantity;
            trade.price=req.body.price || trade.price;
            trade.tradeDate=req.body.tradeDate || trade.tradeDate;
            trade.status=req.body.status || trade.status;
            trade.save((err,trade)=>{
                if(err){
                    res.send(err);
                }
                else{
                    res.send(trade);
                }
            })
        }
    }
)
});

Router.delete('/delete/:id',(res,req)=>{
    Trade.findByIdAndRemove(req.params.id,(error,trade)=>{
        if(error){
            res.send(error)
        }
        else{
            res.send(trade);
        }
    })
})
module.exports=Router;