'use client'

import ToolsGroup from "@/app/ui/ToolsGroup";

function collapseDetails(event){
    const caller = event.currentTarget;
    const collapsable = caller.parentNode.parentNode.parentNode.childNodes[1];
    const svg = caller.childNodes[0];

    const downArrow = "M12 16.0001C11.473 16.0001 10.961 15.7751 10.596 15.3841L5.27004 9.68306C4.89304 9.27905 4.91404 8.64606 5.31704 8.26906C5.72004 7.89406 6.35404 7.91406 6.73004 8.31706L12 13.9571L17.27 8.31706C17.646 7.91306 18.281 7.89306 18.683 8.26906C19.086 8.64606 19.108 9.27905 18.731 9.68306L13.405 15.3841C13.039 15.7751 12.527 16.0001 12 16.0001Z";
    const rightArrow = "M15.384 10.5951L9.68303 5.26906C9.28003 4.89306 8.64603 4.91306 8.27003 5.31706C7.89303 5.72106 7.91403 6.35406 8.31703 6.73106L13.958 12.0001L8.31703 17.2691C7.91403 17.6461 7.89203 18.2791 8.26903 18.6831C8.46603 18.8941 8.73203 19.0001 9.00003 19.0001C9.24503 19.0001 9.49003 18.9111 9.68303 18.7311L15.384 13.4051C15.781 13.0331 16 12.5351 16 12.0001C16 11.4651 15.781 10.9671 15.384 10.5951Z";
    const path =  svg.childNodes[0]
    if (collapsable.classList.contains('collapse')){
        collapsable.classList.remove('collapse')
        path.setAttribute('d', downArrow);

    } else {
        collapsable.classList.add('collapse')
        path.setAttribute('d', rightArrow);
    }

}

export default function WarehouseItem({warehouse}) {
    let name = warehouse.nameWrhs;
    let id = warehouse.idWrhs;

    if (name.length > 12){
        name = name.slice(0, 11) + '...';
    }


    return (
        <li id={warehouse.idWrhs} title='Warehouse record' key={warehouse.idWrhs} className='flex flex-col'>

            <div className='grid grid-cols-4 bg-gray-100 px-4 py-2 text-sm'>
                <div className='col-start-1 col-end-1'>{name}</div>
                <div className='text-gray-700 col-start-2 col-span-2'>{warehouse.idWrhs}</div>
                <div className='flex flex-row gap-4 justify-between col-start-4 col-end-4'>
                    <ToolsGroup item={warehouse} type={'warehouse'}></ToolsGroup>
                    <div className='flex' onClick={collapseDetails} onLoad={collapseDetails}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M15.384 10.5951L9.68303 5.26906C9.28003 4.89306 8.64603 4.91306 8.27003 5.31706C7.89303 5.72106 7.91403 6.35406 8.31703 6.73106L13.958 12.0001L8.31703 17.2691C7.91403 17.6461 7.89203 18.2791 8.26903 18.6831C8.46603 18.8941 8.73203 19.0001 9.00003 19.0001C9.24503 19.0001 9.49003 18.9111 9.68303 18.7311L15.384 13.4051C15.781 13.0331 16 12.5351 16 12.0001C16 11.4651 15.781 10.9671 15.384 10.5951Z"
                                fill="#1F2A37"/>
                        </svg>
                    </div>
                </div>
            </div>

            <div className='flex flex-col px-4 py-2 collapse'>
                <div className='grid grid-cols-2 border-b-[1px]'>
                    <p className='col-start-1 col-end-1'>ID:</p>
                    <div className='col-start-2 col-end-2'>{warehouse.idWrhs}</div>
                </div>
                <div className='grid grid-cols-2 border-b-[1px]'>
                    <p className='col-start-1 col-end-1'>Name:</p>
                    <div className='col-start-2 col-end-2'>{warehouse.nameWrhs}</div>
                </div>
                <div className='grid grid-cols-2 border-b-[1px]'>
                    <p className='col-start-1 col-end-1'>Tel:</p>
                    <div className='col-start-2 col-end-2'>{warehouse.telWrhs}</div>
                </div>
                <div className='grid grid-cols-2 border-b-[1px]'>
                    <p className='col-start-1 col-end-1'>Street:</p>
                    <div className='col-start-2 col-end-2'>{warehouse.strtWrhs}</div>
                </div>
                <div className='grid grid-cols-2 border-b-[1px]'>
                    <p className='col-start-1 col-end-1'>Street 2:</p>
                    <div className='col-start-2 col-end-2'>{warehouse.strt2Wrhs}</div>
                </div>
                <div className='grid grid-cols-2 border-b-[1px]'>
                    <p className='col-start-1 col-end-1'>Street 3:</p>
                    <div className='col-start-2 col-end-2'>{warehouse.strt3Wrhs}</div>
                </div>
                <div className='grid grid-cols-2 border-b-[1px]'>
                    <p className='col-start-1 col-end-1'>City:</p>
                    <div className='col-start-2 col-end-2'>{warehouse.cityWrhs}</div>
                </div>
                <div className='grid grid-cols-2 border-b-[1px]'>
                    <p className='col-start-1 col-end-1'>Postal code:</p>
                    <div className='col-start-2 col-end-2'>{warehouse.postWrhs}</div>
                </div>
                <div className='grid grid-cols-2'>
                    <p className='col-start-1 col-end-1'>State:</p>
                    <div className='col-start-2 col-end-2'>{warehouse.stateWrhs}</div>
                </div>
            </div>

        </li>
    )
}