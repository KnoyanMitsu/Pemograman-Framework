import HeroSection from "./HeroSection";
import MainSection from "./MainSection";
import styles from "../../pages/produk/product.module.scss";

const ProductView = () => {
  return (
    <div className={styles.produk}>
      <HeroSection />
      <MainSection />
    </div>
  );
};

export default ProductView;
