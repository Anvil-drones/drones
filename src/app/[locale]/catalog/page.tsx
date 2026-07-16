import { CatalogMain } from "@/components/CatalogPage/CatalogMain";
import { CatalogOrder } from "@/components/CatalogPage/CatalogOrder";
import { Gallery } from "@/components/Gallery";

export default function CatalogPage() {
  return (
    <>
      <CatalogMain />
      <CatalogOrder />
      <Gallery catalog />
    </>
  );
}
