import useSWR from "swr";
import fetcher from "@/utils/swr/fetcher";
import TampilanProduct from "@/views/Product";
import { useRouter } from "next/router";
import { useState } from "react";

const produk = () => {
  const { push } = useRouter();
  const [products, setProducts] = useState([]);
  

  const { data, error, isLoading, mutate } = useSWR(
    "http://localhost:3000/api/produk",
    fetcher,
  );

  return (
    <div>
      <TampilanProduct
        products={data?.data || []}
        isLoading={isLoading}
        mutate={mutate}
      />
    </div>
  );
};

export default produk;
