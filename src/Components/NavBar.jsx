import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
        
      <nav>
        <div className="logo">
          <img
            src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"
            alt="" width={"75px"} height="20px"
          />
          <p className="logo-p">
            Explore<span className="plus-color">Plus</span>
            <img
              src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png
"
              alt="" width={"10px"} height="10px"
            />
          </p>
        </div>
        <div className="search-bar">
<input type="text" placeholder="Search for products, brands and more" />
<i class="fa-solid fa-magnifying-glass"></i>
        </div>

        <div>
            <button className="logbtn">Login</button>
        </div>
        <Link  to="/admin"className="a">Become a Seller</Link>
        <span className="a">More <i className="fa-solid fa-angle-down"></i></span>
        <Link  to="/cart"className="a"><i className="fa-solid fa-cart-shopping"></i>Cart</Link>
        
      </nav>
{/*.....header....*/}
<section className="header">
  <div id="first_child">
<img src="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100" alt="" />
<p>Top Offers</p>
  </div>

  <div id="second_child">
    <img src="https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100" alt="" />
  </div>

  <div id="third_child">
    <img src="https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100" alt="" />
  </div>

  <div id="fourth_child">
    <img src="https://rukminim1.flixcart.com/flap/128/128/image/c12afc017e6f24cb.png?q=100" alt="" />
  </div>

  <div id="fivth_child">
    <img src="https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100" alt="" />
  </div>

  <div id="sixth_child">
    <img src="https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100" alt="" />
  </div>

  <div id="seventh_child">
    <img src="https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100" alt="" />
  </div>

  <div id="eighth-child">
    <img src="https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100" alt="" />
  </div>

  <div id="nineth_child">
    <img src="https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100" alt="" />
  </div>

  <div id="tenth_child">
    <img src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/05d708653beff580.png?q=100" alt="" />
  </div>

</section>

    </div>
  );
}

export default NavBar;
