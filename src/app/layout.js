import { Inter } from 'next/font/google'
import './globals.css'
import MainMenuItem from "@/app/ui/MainMenuItem";
import Link from "next/link";
import Image from "next/image";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Stock Evidence - Home',
    description: 'Evidence of material stock of fictional company.',
    authors: [{name: 'Vilém Charwot', url: 'https://eso.vse.cz/~chav07/portfolio'}],
    creator: 'Vilém Charwot',
    applicationName: 'Stock Evidence'
    //viewport: 'width=device-width, initial-scale=1.0'
}
export const viewport ={
    width: 'device-width',
    scale:'1.0'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body className={inter.className + ' bg-white flex flex-col items-center justify-top '}>
    <div className='flex flex-col items-stretch min-h-screen z-0'>
        <div className='flex flex-col max-w-4xl justify-top gap-3 self-center w-lvw  px-2'>
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
        <footer className='flex self-stretch grow flex-row py-4 w-full justify-center text-gray-500 gap-2 fixed bottom-0 left-0 bg-white z-1'>
            <div className='flex flex-row pr-2 gap-2'>
                <Image src={'/images/evidenceLogo.svg'} className='h-6' alt='Stock Evidence Co. logo' width={24} height={24}></Image>
                <p>&#0169;2023 Vilém Charwot</p>
            </div>
            <Link href={'/'}>Home</Link>
            <Link href={'/contact'}>Contact</Link>
        </footer>
    </div>
    </body>
    </html>
  )
}
