import React from 'react';
import styles from "../../pages/produk/product.module.scss";

const HeroSection = () => {
    return (
        <section className={styles.produk}>
            <h1 className={styles.produk__title}>Welcome to Our Products</h1>
            <p className={styles.produk__desc}>Explore our wide range of premium items tailored just for you.</p>
        </section>
    );
};

export default HeroSection;
