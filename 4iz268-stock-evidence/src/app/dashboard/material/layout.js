import MaterialList from "@/app/ui/MaterialList";

export default function MaterialLayout({children}){
    return (
        <ul>
            <li className='grid grid-cols-4 p-2 bg-gray-50 text-gray-700 rounded-t-md'>
                <div className='col-start-1 col-end-1 text-center '>Name</div>
                <div className='col-start-2 col-end-2 text-center border-l-2'>Description</div>
                <div className='col-start-3 col-end-3 text-center border-l-2'>Unit</div>
                <div className='col-start-4 col-end-4 text-center border-l-2'>Operation</div>
            </li>
            {children}
        </ul>

    )
}