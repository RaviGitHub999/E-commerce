import React, { useRef } from 'react'
import { useHistory, useParams } from "react-router-dom";
import NavBar from "./NavBar";
import useFetch from './useFetch';
function Update() {
              
      let{id}=useParams()
 let{data:product,pending,error}=useFetch(`http://localhost:4000/products/${id}`)

    let h = useHistory()


    let pic = useRef();
    let brand = useRef();
    let desc = useRef();
    let discount = useRef();
    let mrp = useRef();
    let color = useRef();
    let fabric = useRef();
    let type = useRef();
    let rate = useRef();
  
    
    let handleSubmit = (e)=>{
      e.preventDefault()
  
      let newProduct = {
          productPic :    pic.current.value ,
          brand :         brand.current.value ,
          description :   desc.current.value,
          discountprice : discount.current.value ,
          mrp :           mrp.current.value ,
          color :         color.current.value ,
          fabric :        fabric.current.value ,
          productType :   type.current.value ,
          usage : "" ,
          rating :        rate.current.value,
          size : []
      }
       let genderOptions = document.getElementsByName("gender");
          genderOptions.forEach((inp)=>{
              if(inp.checked===true)
              {
                 newProduct.usage = inp.value;
              }
          })
  
  
          let sizeAvailable = []
          let sizeOptions = document.getElementsByName("size");
          sizeOptions.forEach((inp)=>{
              if(inp.checked===true)
              {
                  sizeAvailable.push(inp.value);
              }
          })
          newProduct.size = sizeAvailable;
  
          fetch(`http://localhost:4000/products/${id}` , { method : "PUT",
                                                     headers :{"Content-Type" : "application/json","Accept-Type" : "application/json"} ,
                                                     body : JSON.stringify(newProduct)
                                                   } )
          .then(()=>{
              alert(" product has been Updated");
              h.push("/admin");
  
          })                                        
         
  
      }
    return (
      <div className="add-product">
        <NavBar/>
        <h1>Update the Product {id}</h1>
        <hr />
     {product&&<form onSubmit={handleSubmit}>
        <label>Picture</label> <input type="url" defaultValue={product.productPic} ref={pic} />
        <label>Brand</label> <input type="text" defaultValue={product.brand} />
        <label>Description</label>
        <textarea name="" id="" cols="30" rows="10" ref={desc} defaultValue={product.description}></textarea>
        <label>Price After Discount</label> <input type="number"  ref={discount} defaultValue={product.discountPrice}/>
        <label>MRP</label>
        <input type="number" ref={mrp} defaultValue={product.mrp}/>
        <label>Color</label>
        <input type="text" ref={color} defaultValue={product.color}/>
        <label>Fabric</label>
        <input type="text"  ref={fabric} defaultValue={product.fabric}/>
        <label>Product Type</label>
        <input type="text"  ref={type} defaultValue={product.productType}/>
        <label>Usage</label> <div>
                               <input type="radio" name="gender" /> <label>Male</label>
                               <input type="radio" name="gender" /> <label>Female</label>
                               <input type="radio" name="gender"  /> <label >Unisex</label>
        </div>               
        <label >Rating</label> <input type="number" step="0.1" min="1" max="5" defaultValue={product.rating} ref={rate}/>
        <label htmlFor="1">Size</label>
        <div>
          <input type="checkbox"  /><label >S</label>
          <input type="checkbox"  /><label >M</label>
          <input type="checkbox"  /><label >L</label>
          <input type="checkbox" /><label >XL</label>
        </div>
        <input type="submit"  value="update"/>
      </form>}
      </div>
    );
  }


export default Update