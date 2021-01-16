const sha256 = require('sha256')


function Blockchain (){
    this.chain =[]
    this.mempool = []

}
Blockchain.prototype.createNewBlock= function(){
    if(this.chain.length == 0){
        previoushash = null

    }else{
        previoushash = this.chain[this.chain.length-1].hash
    }
    var nonce = this.createproofOfwork(previoushash,this.mempool)
    var hash = this.blockhashing(previoushash,this.mempool,nonce)
     0
    let block ={
        'height':this.chain.length,
        'timestamp':Date.now(),
        'transections':this.mempool,
        'nonce':nonce,
        'previoushash': previoushash,
        'hash':hash

    }
    this.chain.push(block)
    this.mempool =[]
    return "new block added"

}
Blockchain.prototype.blockhashing=function(previoushash,txdata,nonce){
    var me = previoushash+JSON.stringify(txdata)+(nonce) 
    return sha256(me)



}

Blockchain.prototype.createNewTx= function(amount,sender,receiver){
    let Tx ={
        'amount':amount,
        'sender':sender,
        'receiver':receiver,
        'timestamp':Date.now()

    }
    this.mempool.push(Tx)
    return Tx
}

Blockchain.prototype.createproofOfwork=function(previoushash,txdata){
    var nonce = 0;
    var hash = this.blockhashing(previoushash,txdata,nonce)
    while(hash.substring(0,4) != '0000'){
        hash = this.blockhashing(previoushash,txdata,++nonce)
    //    console.log(nonce) 
    
    }
    
 return  nonce
}




module.exports = Blockchain
