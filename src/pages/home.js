import React, { useState } from "react";
import "../assets/css/DiscountCalculator.css";
import swal from "sweetalert";
import icon from '../assets/images/rebaja.png';

function App() {
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");

  const calculateDiscount = () => {
    if (price <= 0 || discount <= 0 || discount >= 100) {
      swal({
        title: "Error!",
        text: "Ingrese valores válidos",
        icon: "error",
        button: "OK",
      });
      return;
    }

    const discountedPrice = price - (price * discount) / 100;

    swal({
      title: "Precio con descuento:",
      text: `$${discountedPrice.toFixed(2)}`,
      icon: "success",
      button: "OK",
    }).then(() => {
      setPrice("");
      setDiscount("");
    });
  };

  return (
    <div className="App">
      <h1>Calculadora de Descuentos</h1>
      <img src={icon} alt="rebajas" className="icono"/>
      <input
      className="input"
        type="number"
        placeholder="Precio"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <br />
      <input
      className="input"
        type="number"
        placeholder="% de descuento"
        value={discount}
        onChange={(e) => setDiscount(e.target.value)}
      />
      <br />
      <button className="calculate-btn" onClick={calculateDiscount}>Calcular</button>
    </div>
  );
}

export default App;
