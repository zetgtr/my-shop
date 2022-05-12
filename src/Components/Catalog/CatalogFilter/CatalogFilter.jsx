import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";
import { useDispatch } from "react-redux";
import { priceAction, searchGoodsAction, sizeGoodsAction } from "../../../Store/Goods/actions";
import { TextField } from "@mui/material";

const price = []
const names = [
  { name: "XS", value: "sizeXS" },
  { name: "S", value: "sizeS" },
  { name: "M", value: "sizeM" },
  { name: "L", value: "sizeL" },
];

export const CatalogFilter = () => {
  const [personName, setPersonName] = useState([]);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
    dispatch(
      sizeGoodsAction(typeof value === "string" ? value.split(",") : value)
    );
    dispatch(searchGoodsAction())
  };

  const hendlePrice = () => {
    dispatch(priceAction(price))
    dispatch(searchGoodsAction())
  }
  return (
    <div className="conteiner">
      <div className="pading_">
        <div className="control">
          <nav>
            <div className="flex">
              <FormControl sx={{ m: 0, width: 250 }}>
                <InputLabel id="demo-multiple-checkbox-label">
                  Размер
                </InputLabel>
                <Select
                  labelId="demo-multiple-checkbox-label"
                  id="demo-multiple-checkbox"
                  multiple
                  value={personName}
                  onChange={handleChange}
                  input={<OutlinedInput label="Tag" />}
                  renderValue={(selected) => selected.join(", ")}
                >
                  {names.map((name) => (
                    <MenuItem key={name.name} value={name.value}>
                      <Checkbox
                        checked={personName.indexOf(name.value) > -1}
                        sx={{ height: 5 }}
                      />
                      <ListItemText primary={name.name} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <TextField
                id="outlined-basic"
                label="Цена от"
                variant="outlined"
                onChange={(e)=> hendlePrice(price[0] = e.target.value)}
              />
              <TextField
                id="outlined-basic"
                label="Цена до"
                variant="outlined"
                onChange={(e)=> hendlePrice(price[1] = e.target.value)}
              />
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};
