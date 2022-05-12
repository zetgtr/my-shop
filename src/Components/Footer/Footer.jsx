import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { ROUTER } from "../../Router/constants";

export const Footer = () => {
  library.add(fab);
  return (
    <footer>
      <div className="footerform">
        <div className="conteiner">
          <div className="boxform">
            <figure>
              <div className="box boximg">
                <img src="/images/Intersect.png" alt="" />
                <p className="textboxform">
                  “Vestibulum quis porttitor dui! Quisque viverra nunc mi, a
                  pulvinar purus condimentum“
                </p>
              </div>
            </figure>
            <form action="">
              <h1 className="formh1">ПОДПИСЫВАТЬСЯ</h1>
              <p className="formtext">ДЛЯ НАШЕЙ ИНФОРМАЦИИ И ПРОДВИЖЕНИЯ</p>
              <div className="formbutton">
                <input
                  className="footerinput"
                  type="email"
                  placeholder="Ваш Email"
                />
                <button className="footerbutton">Подписатся</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="footerdown">
        <div className="conteiner conteiner-footer">
          <div className="footerflex">
            <p className="foterdowntext">© 2021 Бренд Все права защищены.</p>
            <div className="footericon">
               <Link className="footeritem" to={ROUTER.HOME}>
                <FontAwesomeIcon className="sety" icon={["fab", "facebook"]} />
              </Link>
              <Link className="footeritem" to={ROUTER.HOME}>
                <FontAwesomeIcon className="sety" icon={["fab", "instagram"]} />
              </Link>
              <Link className="footeritem" to={ROUTER.HOME} >
                <FontAwesomeIcon className="sety" icon={["fab", "pinterest"]} />
              </Link>
              <Link className="footeritem" to={ROUTER.HOME}>
                <FontAwesomeIcon className="sety" icon={["fab", "twitter"]} />
              </Link> 
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
