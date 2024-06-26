import { Router } from 'express'
import CarManager from '../scr/CarManager.js ';
const router=Router()
//const {crearCarrito,addProductocar}=new CarManager()
const carFile='./Carrito.json'
const products= new CarManager(carFile);

router.post('/', (req,res) =>{     
    const result=  products.crearCarrito()
    res.send(result)
})
router.get('/:cid',(req,res)=>{
const {cid}=req.params
    const result= products.getProductosDeCarrito(cid)
    console.log(cid)
    res.send(result)
})


router.post('/:cid/products/:pid',async(req,res)=>{
    const {cid}=req.params
    const{pid}=req.params
    const result= await products.addProductsCarrito(cid,{product:pid,quantity:1})
    res.send(result)
    
})

export default router