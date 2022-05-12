import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  chengeEmailAction,
  chengePasswordAction,
  chengeFloorAction,
  chengeNameAction,
  singUpAction,
  chengeSurNameAction,
  singInAction,
} from "../../../Store/Auth/actions";
import { authSelector } from "../../../Store/Auth/selector";
import { ROUTER } from "../../../Router/constants";
import { Link } from "react-router-dom";

export const ContentReg = (props) => {
  const { email, password, auth} = useSelector(authSelector);

  const dispatch = useDispatch();

  const hendleSingIn = () => {
    dispatch(singInAction({email, password}))
  }

  const hendleChengeEmail = (textEmail) => {
    dispatch(chengeEmailAction(textEmail));
  };

  const hendleChengePassword = (textPassword) => {
    dispatch(chengePasswordAction(textPassword));
  };

  document.querySelector("header")?.scrollIntoView();

  const hendleSingUp = () => {
    dispatch(singUpAction({ email, password }));
  };

  const hendleChengeFloor = (floor) => {
    dispatch(chengeFloorAction(floor));
  };

  const hendleChengeName = (textName) => {
    dispatch(chengeNameAction(textName));
  };

  const hendleChengeSurName = (textSurname) => {
    dispatch(chengeSurNameAction(textSurname));
  };

  return (
    <div className="conteiner">
      <section>
        {!auth && <div className="flex-reg">
          <form action="" className="form-reg">
            {!props.sengIn&&<h1 className="reg-h">Ваше имя</h1>}
            {!props.sengIn&&<input
              className="form-card form-reg-cart"
              placeholder="Имя"
              onChange={(e) => hendleChengeName(e.target.value)}
              required=""
              pattern="\S+[А-яа-я]"
            />}
            {!props.sengIn&&<input
              className="form-card form-reg-cart"
              placeholder="Фамилия"
              onChange={(e) => hendleChengeSurName(e.target.value)}
              required=""
              pattern="\S+[А-яа-я]"
            />}
           {!props.sengIn&& <div className="pol">
              <p className="poltext">
                <input
                  className="polinput"
                  required=""
                  onChange={(e) => hendleChengeFloor(e.target.value)}
                  name="pol"
                  type="radio"
                  value="Мужчина"
                />
                Мужчина
              </p>
              <p className="poltext">
                <input
                  className="polinput"
                  required=""
                  onChange={(e) => hendleChengeFloor(e.target.value)}
                  name="pol"
                  type="radio"
                  value="Женщина"
                />
                Женщина
              </p>
            </div>}
            <h1 className="reg-h">Данные для входа</h1>
            <input
              className="form-card form-reg-cart"
              id="email"
              onChange={(e) => hendleChengeEmail(e.target.value)}
              placeholder="Эл. адрес"
              required=""
              pattern="\S+@[a-z]+.[a-z]+"
            />
            <input
              className="form-card form-reg-cart"
              id="password"
              onChange={(e) => hendleChengePassword(e.target.value)}
              type="password"
              required=""
              placeholder="Пароль"
              minLength="8"
              pattern="[A-za-z]+[0-9]"
            />
            <p className="text-reg">
              Пожалуйста, используйте 8 или более символов, по крайней мере, 1
              цифру и смесь прописных и строчных букв.
            </p>
            <div className="conteinerSingUp">
            {props.sengIn && (<button
                className="button-checbox button-now"
                onClick={props.hendleChengeSangIn}
              >
                Зарегистрироватся
              </button>)}
              {!props.sengIn && (<button
                className="button-checbox button-now"
                onClick={hendleSingUp}
              >
                Зарегистрироватся
              </button>)}
              {props.sengIn && (
                <button
                  className="button-checbox button-now"
                  onClick={hendleSingIn}
                >
                  Войти
                </button>
              )}
              {!props.sengIn && (
                <button
                  className="button-checbox button-now"
                  onClick={props.hendleChengeSangIn}
                >
                  Войти
                </button>
              )}
            </div>
          </form>
          <article>
            <div>
              <p className="text-perks">У ЛОЯЛЬНОСТИ есть свои достоинства</p>
              <p className="text-perks text-perks-margin">
                Присоединяйтесь к программе лояльности, где вы можете
                зарабатывать баллы и открывать серьезные привилегии. Начиная с
                них, как только вы присоединитесь:
              </p>
              <p className="text-perks">
                <CheckIcon sx={{ marginRight: "22px" }} />
                15% скидка на приветственное предложение
              </p>
              <p className="text-perks">
                <CheckIcon sx={{ marginRight: "22px" }} />
                Бесплатная доставка, возврат и обмен на все заказы
              </p>
              <p className="text-perks">
                <CheckIcon sx={{ marginRight: "22px" }} />
                Скидка 10 долларов на покупку в день рождения
              </p>
              <p className="text-perks">
                <CheckIcon sx={{ marginRight: "22px" }} />
                Ранний доступ к продуктам
              </p>
              <p className="text-perks">
                <CheckIcon sx={{ marginRight: "22px" }} />
                Эксклюзивные предложения и награды
              </p>
            </div>
          </article>
        </div> ||  <div className="profile"><h1>Вы успешно вошли!</h1><Link to={ROUTER.CATALOG}><button
                  className="button-checbox button-now"
                >
                  Каталог товаров
                </button></Link></div>}
      </section>
    </div>
  );
};
