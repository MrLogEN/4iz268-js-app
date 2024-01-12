import SectionMenu from "@/app/ui/SectionMenu";

export const metadata = {
    title: 'Stock Evidence - Contact'
}
export default function ContactLayout({children}){
    return(
        <>
            <h1 className='text-4xl'>Contact</h1>
            <p className='text-gray-500'>Do you want to contact us?</p>
            {children}
        </>
    )
}