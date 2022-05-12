import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { ROUTER } from "../../Router/constants";
import { cartSelector } from "../../Store/Cart/selector";
import { searchAction } from "../../Store/Goods/actions";

export const Header = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const hendleSearch = (text) => {
    setSearch(text);
    dispatch(searchAction(text));
  };
  const cart = useSelector(cartSelector);
  const chengeSearch = () => {
    dispatch(searchAction(search));
  };
  
  return (
    <header>
      <div className="header">
        <nav>
          <ul className="conteiner logo">
            <li className="poiskgrup">
              <Link className="ai" to={ROUTER.HOME}>
                <img className="poisk" src="/images/Group.svg" alt="" />
              </Link>
              <details>
                <summary>
                  <img className="poiskimg" src="/images/poisk.svg" alt="" />
                </summary>
                <input
                  className="poiskimput"
                  onChange={(e) => hendleSearch(e.target.value)}
                  type="text"
                />

                <Link to={ROUTER.CATALOG}>
                  <button
                    className="poiskbutton"
                    onClick={() => chengeSearch()}
                  >
                    Искать
                  </button>
                </Link>
              </details>
            </li>
            <ul className="megaul">
              <li className="megali">
                <details>
                  <summary>
                    <img
                      className="headermenu mega"
                      src="/images/menu.svg"
                      alt=""
                    />
                  </summary>
                  <nav>
                    <div className="mega-box">
                      <div className="mega-item">
                        <div className="mob_menu">
                          <li className="menu-blocks">
                            <Link className="ai" to={ROUTER.SIGN_UP}>
                              <img
                                className="headermenu"
                                src="/images/contact.svg"
                                alt=""
                              />
                            </Link>
                          </li>
                          <li
                            className="menu-blocks"
                            style={{ position: "relative" }}
                          >
                            <Link className="ai" to={ROUTER.CART}>
                              <img
                                className="headermenu header-menu"
                                src="/images/korzina.svg"
                                alt=""
                              />
                              {cart?.length > 0 && (
                                <img
                                  style={{
                                    position: "absolute",
                                    top: "24px",
                                    left: "20px",
                                  }}
                                  src="/images/carticon.png"
                                  alt=""
                                />
                              )}
                              {cart?.length > 0 && (
                                <p
                                  style={{
                                    top: "27px",
                                    left: "27px",
                                    position: "absolute",
                                    fontSize: "12px",
                                    lineHeight: "14px",
                                    color: "#ffffff",
                                  }}
                                >
                                  {cart.length}
                                </p>
                              )}
                            </Link>
                          </li>
                        </div>
                        <h3 className="mega-heding">МЕНЮ</h3>
                        <p className="megalink">Мужчинам</p>
                        <Link className="mega-link" to={ROUTER.CATALOG + "/ma"}>
                          Аксессуары
                        </Link>
                        <Link className="mega-link" to={ROUTER.CATALOG + "/mk"}>
                          Куртки
                        </Link>
                        <Link className="mega-link" to={ROUTER.CATALOG + "/md"}>
                          Джинсы
                        </Link>
                        <Link className="mega-link" to={ROUTER.CATALOG + "/mp"}>
                          Половеры
                        </Link>
                        <p className="megalink">Женщинам</p>
                        <Link className="mega-link" to={ROUTER.CATALOG + "/ja"}>
                          Аксессуары
                        </Link>
                        <Link className="mega-link" to={ROUTER.CATALOG + "/jk"}>
                          Куртки и пальто
                        </Link>
                        <Link className="mega-link" to={ROUTER.CATALOG + "/jp"}>
                          Футболки и поло
                        </Link>
                        <Link className="mega-link" to={ROUTER.CATALOG + "/jb"}>
                          Блузки
                        </Link>
                        <p className="megalink">Детям</p>
                        <Link className="mega-link" to={ROUTER.CATALOG + "/rp"}>
                          Ползунки и Боди
                        </Link>
                        <Link className="mega-link" to={ROUTER.CATALOG + "/rk"}>
                          Куртки и пальто
                        </Link>
                        <Link className="mega-link" to={ROUTER.CATALOG + "/rf"}>
                          Футболки
                        </Link>
                        <Link className="mega-link" to={ROUTER.CATALOG + "/rd"}>
                          Джинсы
                        </Link>
                      </div>
                    </div>
                  </nav>
                </details>
              </li>
              <li className="menu-block">
                <Link className="ai" to={ROUTER.SIGN_UP}>
                  <img
                    className="headermenu"
                    src="/images/contact.svg"
                    alt=""
                  />
                </Link>
              </li>
              <li
                className="menu-block"
                style={{ position: "relative", marginRight: 20 }}
              >
                <Link className="ai" to={ROUTER.CART}>
                  {cart?.length > 0 && (
                    <img
                      style={{
                        position: "absolute",
                        top: "24px",
                        left: "20px",
                      }}
                      src="/images/carticon.png"
                      alt=""
                    />
                  )}
                  {cart?.length > 0 && (
                    <p
                      style={{
                        top: "27px",
                        left: "27px",
                        position: "absolute",
                        fontSize: "12px",
                        lineHeight: "14px",
                        color: "#ffffff",
                      }}
                    >
                      {cart.length}
                    </p>
                  )}
                  <img
                    className="headermenu header-menu"
                    src="/images/korzina.svg"
                    alt=""
                  />
                </Link>
              </li>
            </ul>
          </ul>
        </nav>
      </div>
    </header>
  );
};
