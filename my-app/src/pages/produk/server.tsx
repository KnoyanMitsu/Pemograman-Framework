import TampilanProduct from "@/views/Product";
import ProductType from "@/types/Product.type";

const server = (props: { products: ProductType[] }) => {
  const { products } = props;
  return (
    <div>
      <h1>Halaman Produk Server</h1>
      <TampilanProduct
        products={products}
        isLoading={false}
        mutate={() => {}}
      />
    </div>
  );
};

export default server;

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3001/api/produk");
  const data = await res.json();
  return {
    props: {
      products: data.data,
    },
  };
}
