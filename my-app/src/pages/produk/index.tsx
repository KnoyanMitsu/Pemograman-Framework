import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ProductView from "@/views/Product";

const produk = () => {
    const [isLogin, setIsLogin] = useState(false);
    const router = useRouter();

    useEffect(() => {
        // Cek localStorage karena state tidak mempan dipindah halaman (refresh) kecuali pakai global state/storage
        const statusLogin = localStorage.getItem("isLoggedIn");
        if (statusLogin === "true") {
            setIsLogin(true);
        } else {
            router.push("/auth/login");
        }
    }, [router]);

    // Cegah layar berkedip jika di-redirect
    if (!isLogin) return null;

    return <ProductView />
}

export default produk