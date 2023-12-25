import {FormData} from "next/dist/compiled/@edge-runtime/primitives";

export default function NewMaterialLayout({children}){
    return(
        <>
            <h3 className='font-bold'>New Material</h3>
            {children}
        </>
    )
}