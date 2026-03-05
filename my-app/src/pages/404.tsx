import styles from '@/styles/404.module.scss'
import Link from 'next/link'

const Custom404 = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <head>
                <title>404 - Halaman Tidak Ditemukan</title>
            </head>
            <div className="grid grid-cols-2 gap-4">
                <div className="col-span-1">
                    <img src="/page-not-found.png" alt="404" className={styles.error__image} />
                </div>
                <div className="col-span-1 flex flex-col justify-center">
                    <h1 className='text-2xl font-bold text-blue-700'>404 - Halaman Tidak Ditemukan</h1>
                    <p>Maaf halaman yang anda cari tidak ada.</p>
                    <Link href="/" className='bg-blue-700 text-white px-4 py-2 rounded-md mt-2'>Kembali ke Home</Link>
                </div>
            </div>
        </div>
    )
}

export default Custom404