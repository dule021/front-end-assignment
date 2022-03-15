import React, { useCallback } from "react";
import "./order-details.scss";

const OrderDetails = ({ orderItems }) => {
  const calculateItemsTotal = useCallback(
    (orderItems) => {
      return orderItems.reduce((itemsTotal, item) => {
        return itemsTotal + Number(item.price);
      }, 0);
    },
    [orderItems]
  );

  return (
    <div className="order">
      <div className="order__container">
        <h4 className="order__title">Your order</h4>
        <ul className="order__items-list">
          {orderItems ? (
            orderItems.map((item) => {
              return (
                <li key={item.name} className="order__item">
                  <span className="order__item-name">{item.name}</span>
                  <span className="order__item-price">
                    <span className="order__currency">$</span>
                    {item.price}
                  </span>
                </li>
              );
            })
          ) : (
            <span>No items in cart!</span>
          )}
        </ul>
        <div className="order__calculations">
          <div className="order__total">
            <span>Total Purchases</span>
            <span>
              <span className="order__currency">$</span>
              {orderItems ? calculateItemsTotal(orderItems) : 0}
            </span>
          </div>
          <div className="order__tax">
            <span>Estimated Tax</span>
            <span>
              <span className="order__currency">$</span>0
            </span>
          </div>
        </div>
        <div className="order__final">
          <span>Total</span>
          <span>
            <span className="order__currency">$</span>
            <span className="order__final-number">
              {orderItems ? calculateItemsTotal(orderItems) : 0}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
