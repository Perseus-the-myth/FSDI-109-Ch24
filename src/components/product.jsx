import "./product.css";
import { useState } from "react";
import QuantityPicker from "./quantityPicker";
const Product = (props) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (val) => {
    setQuantity(val);
  };
const getTotal = () => {
  let total = quantity * props.info.price;

  return total.toFixed(2)
};

const handleAdd = () =>{
  console.log("Adding a cart");
};

  return (
    <div className="product">
      <label className="prod-category">{props.info.category}</label>
      <img src={"/images/" + props.info.image} alt="product"></img>
      <h2>{props.info.title}</h2>
      <div>
      <label className="price">${props.info.price.toFixed(2)}</label>
        <label className="total">${getTotal()}</label>
        
      </div>

      <QuantityPicker onChange={handleQuantityChange}></QuantityPicker>
      

      <button onClick={handleAdd} className="btn-add btn btn-sm btn-primary">Add</button>
      <i className="fa fa-cart-plus" aria-hidden="true"></i>
     

    </div>
  );
};

export default Product;