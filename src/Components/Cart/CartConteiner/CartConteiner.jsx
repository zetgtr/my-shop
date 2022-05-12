import React from "react";
import { useSelector } from "react-redux";
import { cartSelector } from "../../../Store/Cart/selector";
import ClearIcon from "@mui/icons-material/Clear";
import { ROUTER } from "../../../Router/constants";
import { useDispatch } from "react-redux";
import { delCartAction, delFullCartAction } from "../../../Store/Cart/actions";
import { Link } from "react-router-dom";

export const CartConteiner = () => {
  const carts = useSelector(cartSelector);
  const dispatch = useDispatch();
  const delCart = (id) => {
    dispatch(delCartAction(id));
  };
  const chengeDelFullCart = () => {
    dispatch(delFullCartAction())
  }
  const price = carts.map((item) =>(Number(item.price) * Number(item.col)));
  let sumPrice = 0
  for(let i = 0; i<price.length;i++){
    sumPrice += price[i]
  }
  document.querySelector("header")?.scrollIntoView(); 
  return (
    <div className="conteiner">
      <section>
        <div className="flex-card">
          <div className="cardbox">
            <div className="card-top">
              {carts.map((cart) => (
                <div className="card-cart" key={cart.id}>
                  <Link className="card-img" to={ROUTER.PRODUCT + "/" + cart.id}>
                    <img
                      className="card-img"
                      src={"/images/img/" + cart.photo + ".jpg"}
                      alt="..."
                    />
                  </Link>
                  <div className="text-cart-text">
                    <h1 className="card-h1"> {cart.title} </h1>
                    <p className="card-text">
                      Цена: <span className="span-cena">{cart.price} руб.</span>
                    </p>
                    <p className="card-text">Цвет: {cart.color}</p>
                    <p className="card-text">Размер: {cart.size}</p>
                    <p className="card-text">Количество: {cart.col}</p>
                    <ClearIcon
                      className="delCart"
                      onClick={() => delCart(cart.id)}
                    />
                    <i class="fas fa-times"></i>
                    <p></p>
                  </div>
                </div>
              ))}
              {carts.length === 0 && <div className="cartFalse"><h1>Корзина пуста</h1></div>}
            </div>
            <div className="button-shoping-flex">
              {carts.length !== 0 && (
                <button className="button-shoping buttonDel" onClick={chengeDelFullCart}>Очистить корзину</button>
              )}
              <Link to={ROUTER.CATALOG}>
                <button className="button-shoping">Продолжить покупки</button>
              </Link>
            </div>
          </div>
          <div className="adres">
            <h1 className="text-adres">Адрес доставки</h1>
            <form className="form-cart-flex" action="#" method="post">
              <div className="form-cart-input">
                <input
                  className="form-card form-reg-cart"
                  type="text"
                  placeholder="Москва"
                />
                <input
                  className="form-card form-reg-cart"
                  type="text"
                  placeholder="Улица"
                />
                <input
                  className="form-card form-reg-cart"
                  type="text"
                  placeholder="Почтовый индекс"
                />
              </div>
              <div className="whidth-cek">
                <div className="checout cartChecoutPadding">
                  <div className="checout-flex">
                    <p className="text-grand">Сумма:</p>
                    <p className="text-grand text-cena">{sumPrice} руб.</p>
                  </div>
                  <div className="checout-polosa"></div>
                  <button className="button-checbox cartButtonChecbox">
                    Оформить заказ
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
