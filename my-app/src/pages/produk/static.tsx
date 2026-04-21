import TampilanProduct from "@/views/Product";
import ProductType from "@/types/Product.type";

const Static = (props: { products: ProductType[] }) => {
  const { products } = props;
  return (
    <div>
      <h1>Halaman Produk Static</h1>
      <TampilanProduct
        products={products}
        isLoading={false}
        mutate={() => {}}
      />
    </div>
  );
};

export default Static;

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/produk");
  const response: { data: ProductType[] } = await res.json();
  return {
    props: {
      products: response.data,
    },
    revalidate: 10,
  };
}
