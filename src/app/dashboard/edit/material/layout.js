import {useSearchParams} from "next/navigation";
export const metadata = {
    title: 'Stock Evidence - Edit Material'
}
export default function EditMaterialLayout({children}){
    return(
        <>
        <h2 className='font-bold'>Edit material</h2>
            {children}
        </>
    )
}