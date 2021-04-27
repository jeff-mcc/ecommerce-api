const products = require('./products.json');

const getProducts = (req,res)=>{
    // console.log("query:", req.query)
    if (!req.query.price){
        res.status(200).send(products)
    } else{
        console.log("query:", parseFloat(req.query.price))
        const filteredProds = products.filter(e=>e.price>=parseFloat(req.query.price))
        res.status(200).send(filteredProds)
    }
}

module.exports = getProducts