import Link from "next/link";
import styles from './register.module.scss'

const halamanRegister = () => {
    return (
        <div className={styles.register}>
            <h1 className="text-3xl font-bold text-blue-600">Halaman Register</h1>
            <input className="border border-gray-300 rounded-md p-2" type="text" placeholder="Username" />
            <input className="border border-gray-300 rounded-md p-2" type="password" placeholder="Password" />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Register</button>
            <Link href="/auth/login">Ke Halaman Login</Link>
        </div>
    )
}

export default halamanRegister