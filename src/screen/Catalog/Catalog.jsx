import { CatalogFilter } from "../../Components/Catalog/CatalogFilter";
import { CatalogHeader } from "../../Components/Catalog/CatalogHeader";
import { GoodsCatalog } from "../../Components/Catalog/GoodsCatalog";
import { FooterForm } from "../../Components/FooterForm";

export const Catalog = () => {
  return (
    <>
      <CatalogHeader />
      <CatalogFilter />
      <GoodsCatalog />
      <FooterForm />
    </>
  );
};
