import React, { useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Box } from "@mui/system";
import { useSelector, useDispatch } from "react-redux";
import TextField from "@mui/material/TextField";
import { addCartAction } from "../../../Store/Cart/actions";
import { useParams } from "react-router-dom";
import { goodsSelector } from "../../../Store/Goods/selector";
import { authSelector } from "../../../Store/Auth/selector";
import { Link } from "react-router-dom";
import { ROUTER } from "../../../Router/constants";

export const ProductContent = () => {
  const [color, setColor] = useState(false);
  const [size, setSize] = useState(false);
  const [textCol, setTextCol] = useState(false);

  const { auth } = useSelector(authSelector);

  const handleChangeColor = (event) => {
    setColor(event.target.value);
  };

  const handleChangeSize = (event) => {
    setSize(event.target.value);
  };

  const chengeTextCol = (text, col) => {
    if (text > col) {
      text = col;
    }
    if (text <= 0) {
      if (text === "") {
      } else {
        text = 1;
      }
    }
    setTextCol(text);
  };

  const dispatch = useDispatch();

  const { productId } = useParams();

  const goods = useSelector(goodsSelector);

  const productFilter = goods.goods.filter((id) => id.id === productId);

  const product = productFilter[0];

  document.querySelector("header")?.scrollIntoView();

  const addCart = () => {
    if (!color) {
      alert("Выберете цвет");
    }
    if (!size) {
      alert("Выберете размер");
    }
    if (!size) {
      alert(`Введите количество максимум ${product.col}`);
    } else {
      dispatch(
        addCartAction({
          color,
          size,
          col: textCol,
          title: product.title,
          id: product.id,
          price: product.price,
          photo: product.photo1,
          max: product.col,
        })
      );
    }
  };

  return (
    <section>
      <div className="conteiner">
        <div className="product-content">
          <div className="flex-text">
            <h2 className="product-h2"> Колекция</h2>
            <div className="polosa"></div>
            <h1 className="product-h1"> {product.title} </h1>
            <p className="product-text"> {product.text} </p>
            <p className="product-cena">{product.price} руб.</p>
          </div>
          <div className="product-polosa"></div>
          <div className="product-nav">
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Цвет</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="цвет"
                  onChange={handleChangeColor}
                >
                  {product.colorB && <MenuItem value="Черный">Черный</MenuItem>}
                  {product.colorGrey && (
                    <MenuItem value="Серый">Серый</MenuItem>
                  )}
                  {product.colorG && (
                    <MenuItem value="Зеленый">Зеленый</MenuItem>
                  )}
                  {product.colorE && <MenuItem value="Желтый">Желтый</MenuItem>}
                  {product.colorR && (
                    <MenuItem value="Крастный">Крастный</MenuItem>
                  )}
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Размер</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Размер"
                  onChange={handleChangeSize}
                >
                  {product.sizeXS && <MenuItem value="XS">XS</MenuItem>}
                  {product.sizeS && <MenuItem value="S">S</MenuItem>}
                  {product.sizeM && <MenuItem value="M">M</MenuItem>}
                  {product.sizeL && <MenuItem value="L">L</MenuItem>}
                </Select>
              </FormControl>
            </Box>
            <TextField
              sx={{ width: 120 }}
              id="outlined-basic"
              label={"Макс " + product.col}
              type="number"
              value={textCol}
              InputProps={{ inputProps: { min: 1, max: product.col } }}
              onChange={(e) => chengeTextCol(e.target.value, product.col)}
              variant="outlined"
            />
          </div>
          {auth && (
            <button className="buttom-product" onClick={() => addCart()}>
              Добавить в корзину
            </button>
          )}
          {!auth && (
            <Link to={ROUTER.SIGN_UP}>
              <button className="buttom-product">Необходимо войти!</button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};
