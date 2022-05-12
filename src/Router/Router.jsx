import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { ROUTER } from "./constants";
import { Home } from "../screen/Home/Home";
import { Header } from "../Components/Header/Header";
import { Footer } from "../Components/Footer";
import { Catalog } from "../screen/Catalog/Catalog";
import { Registration } from "../screen/Registration/Registration";
import { Cart } from "../screen/Cart";
import { Product } from "../screen/Product";
import { useSelector } from "react-redux";
import { goodsSelector } from "../Store/Goods/selector";
import { useDispatch } from "react-redux";
import { getGoodsRequestAction } from "../Store/Goods/actions";
import { authAction } from "../Store/Auth/actions";
import { authSelector } from "../Store/Auth/selector";
import { CircularProgress } from "@mui/material";

export const Router = () => {
  const { loadingGoods } = useSelector(goodsSelector);
  const { loading } = useSelector(authSelector)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGoodsRequestAction());
    dispatch(authAction());
  }, [dispatch]);
  if (loading) return <div className="loading"><CircularProgress /></div>;
  return (
    <>
      {!loadingGoods && (
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path={ROUTER.HOME}>
              <Home />
            </Route>
            <Route exact path={ROUTER.CATALOGID}>
              <Catalog />
            </Route>
            <Route exact path={ROUTER.DISCONTID}>
              <Catalog />
            </Route>
            <Route exact path={ROUTER.SIGN_UP}>
              <Registration />
            </Route>
            <Route exact path={ROUTER.CART}>
              <Cart />
            </Route>
            <Route exact path={ROUTER.PRODUCTID}>
              <Product />
            </Route>
            <Route>
              <Redirect to={ROUTER.NOT_FOUND} />
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      )}
    </>
  );
};
