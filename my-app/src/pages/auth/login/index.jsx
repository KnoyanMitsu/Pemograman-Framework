import Link from "next/link";
import { useRouter } from "next/router";
import styles from './login.module.scss'


const halamanLogin = () => {
    const { push } = useRouter();

    const handlerLogin = () => {
        // Simpan state login
        localStorage.setItem("isLoggedIn", "true");
        // Langsung arahkan ke halaman produk saat tombol diklik
        push("/produk");
    };

    return (
        <div className={styles.login}>
            <h1 className="text-3xl font-bold text-blue-600">Halaman Login</h1>
            <button onClick={handlerLogin}>Login</button> <br />
            <h1 style={{ color: "red",border:"1px solid red",borderRadius:"10px", padding:"10px" }}>Belum Punya Akun</h1>
            <Link href="/auth/register">Ke Halaman Register</Link>
        </div>
    );
};

export default halamanLogin;