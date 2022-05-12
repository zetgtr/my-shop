import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { ROUTER } from "../../../Router/constants";
import { goodsProductAction } from "../../../Store/Goods/actions";
import { goodsSelector } from "../../../Store/Goods/selector";
import { addProductAction } from "../../../Store/Product/actions";

export const GoodsCatalog = () => {
  const { filtredGoods} = useSelector(goodsSelector);
  const dispatch = useDispatch();
  const toggleGoodClick = (good) => {
    dispatch(addProductAction(good));
  };
  const props = useParams();
  useEffect(() => {
    props.discontId && dispatch(goodsProductAction(props.discontId));
    props.catalogId && dispatch(goodsProductAction(props.catalogId));
    if (props.catalogId === undefined && props.discontId === undefined) {
      dispatch(goodsProductAction(""));
    }
    document.querySelector("header")?.scrollIntoView(); 
  },[dispatch, props.discontId, props.catalogId])

  return (
    <div className="body conteiner">
      {filtredGoods.map((good) => (
        <div
          className="list"
          key={good.id}
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
                {good.discount && <div className="discontPrice"></div>}
                {good.discount && (
                  <p className="slogan discountSligan">
                    {(Number(good.price) / 100) * 70} руб.
                  </p>
                )}
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
      ))}
    </div>
  );
};
