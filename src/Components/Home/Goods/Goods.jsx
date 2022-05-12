import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ROUTER } from "../../../Router/constants";
import { goodsSelector } from "../../../Store/Goods/selector";
import { addProductAction } from "../../../Store/Product/actions";

export const Goods = () => {
  const { goods } = useSelector(goodsSelector);
  const dispatch = useDispatch();
  const toggleGoodClick = (good) => {
    dispatch(addProductAction(good));
  };
  return (
    <div>
      <div className="body conteiner">
        {goods.map((good) => (
          <>
            {good.home === true && (
              <div
                key={good.id}
                className="list"
                onClick={() => toggleGoodClick(good)}
              >
                <Link to={ROUTER.PRODUCT + "/" + good.id}>
                  <div className="imgconteiner">
                    <div className="img-conteiner">
                      <img
                        className="listimg"
                        src={"/images/img/" + good.photo1 + ".jpg"}
                        alt=""
                      />
                      <h2 className="hlist">{good.title}</h2>
                      <p className="textlist">{good.text}</p>
                      <p className="slogan">{good.price} руб.</p>
                    </div>
                    <div className="list-buttom">
                      <div className="listbuttom" href="#">
                        <img
                          className="formaimg"
                          src="/images/Forma 1 copy.svg"
                          alt=""
                        />
                        Добавить в корзину
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            )}
          </>
        ))}
      </div>
      <div className="all">
        <Link className="buttom" to={ROUTER.CATALOG}>
          Посмотреть все продукты
        </Link>
      </div>
    </div>
  );
};
