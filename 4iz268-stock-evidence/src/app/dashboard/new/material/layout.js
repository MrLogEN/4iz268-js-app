import {FormData} from "next/dist/compiled/@edge-runtime/primitives";

export const metadata = {
    title: 'Stock Evidence - New Material'
}
export default function NewMaterialLayout({children}){
    return(
        <>
            <h2 className='text-2xl'>New Material</h2>
            {children}
        </>
    )
}