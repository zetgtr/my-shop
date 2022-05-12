import { useSelector } from "react-redux";
import { authSelector } from "../../../Store/Auth/selector";

export const RegHeader = (props) => {
  const { auth } = useSelector(authSelector);
  return (
    <>
      <div className="hedercatalog">
        <div className="conteiner">
          <div className="hedingcatalogthumb">
            {(!auth && (
              <h1 className="heading-text">
                {(!props.sengIn && "Регистрация") || "Вход"}
              </h1>
            )) || <h1 className="heading-text">Профиль</h1>}
          </div>
        </div>
      </div>
    </>
  );
};
