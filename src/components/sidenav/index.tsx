import React,{useContext, useEffect,useState} from 'react';
import './index.scss'
import data from '../../storage/data.json'
import { GlobalContextCart } from '../../utils/context/ferrariContext.tsx';
const Sidenav = ({active})=>{
    const { cart, setCart } = useContext(GlobalContextCart);
    const [price,setPrice] = useState(0);

    useEffect(()=>{
        if(cart.length === 0){
            return;
        }
        
        setPrice(price + cart[cart.length-1]["price"]);
    },[cart])
console.log(cart)

    return (
        <div className={active ? "sidenav hide" : "sidenav"}>
            <div className="top"></div>
            <div className="content">
    {cart.map((data)=><div className="item">
        <img  style={{width: "60px", height: "50px"}} src={data.img[0]}></img>
        <p >{data.name}</p>
        <p>{data.price} €</p>
        </div>)}
    </div>
    <div className="buybutton">
    <button className="cashout"><span>PAY TIME</span></button>
    <div className="price">{price}€</div>
    </div>
    
        </div>
    )
}

export default Sidenav;