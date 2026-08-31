import { useState } from "react"
import Child from '../Child/Child'

export default function Parent() {
    let [userName,setUserName]=useState('Sama');
    let [product,setProduct]=useState({id:1,prodName:'Samsung',price:`9000egp`,quantity:9,onSale:true})
        

    return (
        
        <>
        <h1 className="bg-info text-center text-light">Parent</h1>
        <h3>Username:{userName}</h3>
        <Child userName={userName} productDetails={product}/>
        
        </>
        
    )
}
