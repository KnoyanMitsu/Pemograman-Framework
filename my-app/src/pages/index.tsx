import { Inter } from 'next/font/google'
import Navbar from '@/components/layouts/navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <h1>Pratikum Next.js Pages Router</h1> <br />
      <p>Mahasiswa D4 Pengembangan Web</p>
      <ul>
        <li>
          <a href="/about">About Me</a>
        </li>
      </ul>
    </div>
  )
}