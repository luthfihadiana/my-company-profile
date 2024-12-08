import { ProductDetail } from "@/types";
import CardItem from "./CardItem";
import ImagePreviewModal from "./ImagePreviewModal";
import { useMemo, useState } from "react";
import SearchBar from "./SearchBar";

type ProductsProps = {
  data: ProductDetail[],
}

const Products = ({
  data,
}: ProductsProps) => {
  const [chooseProduct, setProduct] = useState<ProductDetail>();
  const [search, setSearch] = useState("");
  const products = useMemo(() => {
    if (!search?.length) return data;
    return data.filter(el => el?.name?.toLowerCase()?.includes(search));
  }, [search, data])
  return (
    <section className="page max-w-[1024px] mx-auto my-0" id="products">
      <div className="w-full text-center p-4">
        <h2 className="text-2xl font-bold mb-4">Our Products</h2>
        <SearchBar onSearch={setSearch} />
      </div>
      <div className="p-4 grid grid-cols-2 gap-4 overflow-y-auto h-items max-h-[1200px] md:grid-cols-3 lg:grid-cols-5">
        {
          products.map(el => (
            <CardItem
              key={`product-${el.id}`}
              data={el}
              onClick={setProduct}
            />
          ))
        }
      </div>
      <ImagePreviewModal
        data={chooseProduct}
        onClose={() => setProduct(undefined)}
      />
    </section>
  )
}

export default Products;