import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { ROUTER } from "../../../Router/constants";

export const Stock = () => {
  document.querySelector("header")?.scrollIntoView();
  return (
    <div className="pading_">
      <div className="conteiner">
        <section>
          <div className="thumb">
            <Link className="item" to={ROUTER.DISCONT + "gerl"}>
              <img className="img-group" src="/images/Group 36.jpg" alt="" />
              <div className="text-Group">
                <p className="textpng">
                  СКИДКА 30%
                  <br />
                  <span className="lead">ДЛЯ ЖЕНЩИН</span>
                </p>
              </div>
            </Link>
            <Link className="item" to={ROUTER.DISCONT + "men"}>
              <img className="img-group" src="/images/Group 37.jpg" alt="" />
              <div className="text-Group">
                <p className="textpng">
                  СКИДКА 30%
                  <br />
                  <span className="lead">ДЛЯ МУЖЧИН</span>
                </p>
              </div>
            </Link>
            <Link className="item" to={ROUTER.DISCONT + "child"}>
              <img className="img-group" src="/images/Group 38.jpg" alt="" />
              <div className="text-Group">
                <p className="textpng">
                  СКИДКА 30%
                  <br />
                  <span className="lead">ДЛЯ ДЕТЕЙ</span>
                </p>
              </div>
            </Link>
          </div>
          <Link className="item" to={ROUTER.CATALOG + "/a"}>
            <div className="item-grup" href="product.html">
              <img className="item-grup" src="/images/Group 39.jpg" alt="" />
              <article>
                <div className="text-Group">
                  <p className="tagline">
                    РАССКОШНЫЕ И МОДНЫЕ
                    <br />
                    <span className="lead">АКСЕСУАРЫ</span>
                  </p>
                </div>
              </article>
            </div>
          </Link>
        </section>
        <div className="heading">
          <article>
            <h1 className="sd">Предметы с доставкой</h1>
            <p className="headingtext">
              Покупайте товары на основе того, что мы рассказали на этой неделе
            </p>
          </article>
        </div>
      </div>
    </div>
  );
};
