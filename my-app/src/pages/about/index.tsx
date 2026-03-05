import Link from "next/link"
import styles from '@/styles/404.module.scss'

export default function About() {
    return (
        <div>
            <head>
                <title>Tentang Saya</title>
            </head>
            <div className="flex flex-col items-center justify-center h-screen">
                <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-1">
                        <img src="/about-me.png" alt="404" className={styles.error__image} />
                    </div>
                    <div className="col-span-1 flex flex-col justify-center">
                        <h1 className='text-2xl font-bold text-blue-700'>Tentang Saya</h1>
                        <p>Nama: Fabian Ananda Merdana</p>
                        <p>NIM: 222107023004</p>
                        <p>Program Studi: Teknik Informatika</p>
                        <Link href="/" className='bg-blue-700 text-white px-4 py-2 rounded-md mt-2'>Kembali ke Home</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}