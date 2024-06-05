import React, { useContext } from "react";
import "./placeOrder.css";
import { StoreContext } from "../../context/StoreContext";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Informações do Delivery</p>
        <div className="multi-fields">
          <input type="text" placeholder="Primeiro Name" />
          <input type="text" placeholder="Último Nome" />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="Endereço de email" />
          <input type="text" placeholder="Rua" />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="Cidade" />
          <input type="text" placeholder="Estado" />
        </div>
      </div>
      <div className="multi-fields">
        <input type="text" placeholder="CEP" />
        <input type="text" placeholder="País" />
      </div>
      <input type="text" placeholder="Telefone" />
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
          <div className="cart-total-details">
              <p>Subtotal</p>
              <p>R${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Grátis</p>
              <p>R${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>R${getTotalCartAmount()===0?0:getTotalCartAmount() + 2}</b>
            </div>
          </div>
          <button>PROSSEGUIR O PAGAMENTO</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
