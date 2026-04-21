import Link from "next/link";
import styles from "./product.module.scss";

type ProductType = {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
};

const ProductView = ({
  products,
  isLoading,
  mutate,
}: {
  products: ProductType[];
  isLoading: boolean;
  mutate: () => void;
}) => {
  return (
    <div className={styles.produk}>
      <div className="flex justify-between items-center mb-8 mt-6">
        <h1 className="text-3xl font-bold text-gray-800">Halaman Produk</h1>
        <button
          onClick={() => mutate()}
          disabled={isLoading}
          className="bg-blue-600 hover:bg-blue-700 transition-colors duration-200 text-white font-bold py-2 px-6 rounded-lg shadow-md disabled:opacity-50"
        >
          {isLoading ? "Memuat..." : "Refresh Data"}
        </button>
      </div>
      <div className={styles.produk__content}>
        {products.length > 0 ? (
          <>
            {products.map((product: ProductType) => (
              <Link href={`/produk/${product.id}`} key={product.id} className={styles.produk__content__item}>
                <img
                  src={product.image}
                  alt={product.name}
                  className={styles.produk__content__item__image}
                  //   width={200}
                />
                <div className={styles.produk__content__item__info}>
                  <h2 className={styles.produk__content__item__name}>
                    {product.name}
                  </h2>
                  <p className={styles.produk__content__item__category}>
                    {product.category}
                  </p>
                  <p className={styles.produk__content__item__price}>
                    {new Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                      maximumFractionDigits: 0,
                    }).format(product.price)}
                  </p>
                </div>
              </Link>
            ))}
          </>
        ) : (
          <div className={styles.produk__content__skeleton}>
            <div className={styles.produk__content__skeleton__image}></div>
            <div className={styles.produk__content__skeleton__name}></div>
            <div className={styles.produk__content__skeleton__category}></div>
            <div className={styles.produk__content__skeleton__price}></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductView;
