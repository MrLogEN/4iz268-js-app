import MaterialList from "@/app/ui/MaterialList";

export const metadata = {
    title: 'Stock Evidence - Materials'
}
export default function MaterialLayout({children}){
    return (
        <>
            <h2 className='font-bold'>Material</h2>
            <ul>
                <li className='grid grid-cols-4 pb-2 text-black rounded-t-md px-4'>
                    <div className='col-start-1 col-end-1 text-center'>Name</div>
                    <div className='col-start-2 col-span-2 text-center border-l-2'>ID</div>
                    <div className='col-start-4 text-center border-l-2'>Operation</div>
                </li>
                {children}
            </ul>
        </>

    )
}