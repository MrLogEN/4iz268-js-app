import { Inter } from 'next/font/google'
import './globals.css'
import MainMenuItem from "@/app/ui/MainMenuItem";
import Link from "next/link";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Stock Evidence - Home',
    description: 'Evidence of material stock of fictional company.',
    authors: [{name: 'Vilém Charwot', url: 'https://eso.vse.cz/~chav07/portfolio'}],
    creator: 'Vilém Charwot',
    applicationName: 'Stock Evidence',
    viewport: 'width=device-width, initial-scale=1.0'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body className={inter.className + ' bg-white flex flex-col items-center justify-top'}>
    <div className='flex flex-col items-stretch'>
        <div className='flex flex-col max-w-4xl justify-top gap-3 self-center w-lvw h-lvh  px-2'>
            <div className='flex flex-row self-stretch gap-8 p-0 justify-between'>
                <p className='text-blue-700 self-start font-bold p-3 pl-0'><a href={'/'}>Stock Evidence Co.</a></p>
                <nav className='flex flex-row self-end'>
                    <MainMenuItem name={'Home'} url={'/'}></MainMenuItem>
                    <MainMenuItem name={'Dashboard'} url={'/dashboard'}></MainMenuItem>
                    <MainMenuItem name={'Contact'} url={'/contact'}></MainMenuItem>
                </nav>
            </div>
            {children}
        </div>
        <footer className='flex self-stretch flex-row pb-4 justify-center text-gray-500 gap-2'>
            <div className='flex flex-row pr-2 gap-2'>
                <img src={'/images/evidenceLogo.svg'} className='h-6' alt='Stock Evidence Co. logo'></img>
                <p>&#0169;2023 Vilém Charwot</p>
            </div>
            <Link href={'/home'}>Home</Link>
            <Link href={'/contact'}>Contact</Link>
        </footer>
    </div>
    </body>
    </html>
  )
}
