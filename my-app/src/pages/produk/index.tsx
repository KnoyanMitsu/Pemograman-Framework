import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ProductView from "@/views/Product";


type ProductType =
    {
        id: string;
        name: string;
        price: number;
        category: string;
        size: string;
    }

const produk = () => {
    // const [isLogin, setIsLogin] = useState(false);
    // const router = useRouter();

    // useEffect(() => {
    //     // Cek localStorage karena state tidak mempan dipindah halaman (refresh) kecuali pakai global state/storage
    //     const statusLogin = localStorage.getItem("isLoggedIn");
    //     if (statusLogin === "true") {
    //         setIsLogin(true);
    //     } else {
    //         router.push("/auth/login");
    //     }
    // }, [router]);

    // // Cegah layar berkedip jika di-redirect
    // if (!isLogin) return null;

    // return <ProductView />

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchProduk = () => {
        setIsLoading(true);
        fetch("http://localhost:3000/api/produk")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data.data)
            })
            .catch((err) => {
                console.error("Gagal Mengambil Data Produk", err)
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    useEffect(() => {
        fetchProduk();
    }, []);

    return (
        <div className="p-4">
            <div className="flex justify-between items-center mb-4">
                <h1 className="font-bold text-2xl">Halaman Produk</h1>
                <button
                    onClick={fetchProduk}
                    disabled={isLoading}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
                >
                    {isLoading ? "Memuat..." : "Refresh Data"}
                </button>
            </div>
            {products.map((product: ProductType) => (
                <div key={product.id} className="mb-4">
                    <h2 className="font-bold text-md">{product.name}</h2>
                    <p>Harga: {product.price}</p>
                    <p>Ukuran: {product.size}</p>
                    <p>Kategori: {product.category}</p>
                    <hr className="mt-2" />
                </div>
            ))}
        </div>
    )
}

export default produk