import { Breadcrumbs } from "../../Components/Product/Breadcrumbs";
import { CarouselPage } from "../../Components/Product/CarouselPage";
import { GoodsLog } from "../../Components/Product/GoodsLog";
import { ProductContent } from "../../Components/Product/ProductContent";


export const Product = () => {
  return (
    <>
      <Breadcrumbs />
      <CarouselPage />
      <ProductContent />
      <GoodsLog />
    </>
  );
};
