
export default function PlusMenu(){
    return(
        <div className='fixed flex flex-col bottom-[5.5rem] right-[2.75rem] z-20'>
            <div className='shadow-sm shadow-gray-500 flex flex-col rounded-t-md rounded-bl-md'>
                <a className='hover:bg-gray-100 py-2 px-4' href={'/dashboard/new/material'}>New Material</a>
                <a className='hover:bg-gray-100 py-2 px-4' href={'/dashboard/new/warehouse'}>New Warehouse</a>
                <a className='hover:bg-gray-100 py-2 px-4' href={'/dashboard/new/stock'}>New Stock</a>
            </div>
            <svg height='24' width='24' className='self-end'>
                <path className='stroke-gray-500 fill-white'  d='M0 0 L24 0 L12 24 Z' />
            </svg>
        </div>
    )
}