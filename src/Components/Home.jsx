
import DisplayProducts from "./DisplayProducts";
import images from "../images/loader.png"
import useFetch from "./useFetch";
import NavBar from "./NavBar";
import { useEffect } from "react";



const Home = () => {

   useEffect(()=>{

      if(localStorage.getItem("cart") == null)
      {
        localStorage.setItem("cart" , "[]")
      }
  
    } , [] )
  

   let{data:products,pending,error}=useFetch("http://localhost:4000/products")

    return (
      
        <div className="home">
     <NavBar/>
          <h1>{error}</h1>
         {pending===true&&<img className="loader" src="https://v.fastcdn.co/u/430e104e/57579327-0-Loaders-3.svg"/>}
         {products&&<DisplayProducts products={products} title="ALL PRODUCTS"/>}
        </div>
        
     );
}
 
export default Home;