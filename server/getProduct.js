const products = require('./products.json')

const getProduct = (req,res)=>{
    const foundID = products.findIndex( prod => prod.id === +req.params.id)
    if(foundID>-1){
        // console.log(foundID)
        res.status(200).send(products[foundID])
    } else{
        // console.log(req.param.id)
        res.status(500).send('Item not in list')
    }
}

module.exports = getProduct