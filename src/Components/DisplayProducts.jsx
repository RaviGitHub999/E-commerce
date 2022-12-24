import { Link } from "react-router-dom";

const DisplayProducts = ( {products , title} ) => {

    return (
        <div className="display-prod">
        <h1 > {title} </h1>
        <div className="products">
        {
          products.map( (product)=>{
              return(
              <div className="product" key={product.id}>
                  <Link to={`/productdetails${product.id}`}>
                  <img src={product.productPic} alt="image not found" />
                  <h2>{product.brand}</h2>
                  <p>{product.description}</p>
                  <span>{product.discountPrice}</span> <small>{product.mrp}</small> <br />
                  <span className="w">{product.size}</span>
                  </Link>
                 
              </div>)
          })
         }
      </div>
        </div>
     );
}
 
export default DisplayProducts;