import React from "react";
import { FooterForm } from "../../Components/FooterForm";
import { Goods } from "../../Components/Home/Goods/Goods";
import { Stock } from "../../Components/Home/Stock";
import { Tegimg } from "../../Components/Home/Tegimg";

export const Home = () => {
  return (
    <>
      <Tegimg />
      <Stock />
      <Goods />
      <FooterForm />
    </>
  );
};
