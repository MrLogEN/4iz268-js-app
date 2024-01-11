'use client'


import ToolsGroup from "@/app/ui/ToolsGroup";
import {useState} from "react";

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

export default function StockItem({stock}){
    let wname = '';
    let wid = '';
    if (stock.length > 0){
        wid = stock[0].idWrhs;
        wname = stock[0].nameWrhs;
    }
    return(
        <div>
            <div className='grid grid-cols-4 bg-gray-100 px-4 py-2'>
                <div className='col-span-2'>{wid}</div>
                <div>{wname}</div>
                <div className='flex flex-row self-stretch justify-end'>
                    <div className='flex ' onClick={collapseDetails} onLoad={collapseDetails}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M15.384 10.5951L9.68303 5.26906C9.28003 4.89306 8.64603 4.91306 8.27003 5.31706C7.89303 5.72106 7.91403 6.35406 8.31703 6.73106L13.958 12.0001L8.31703 17.2691C7.91403 17.6461 7.89203 18.2791 8.26903 18.6831C8.46603 18.8941 8.73203 19.0001 9.00003 19.0001C9.24503 19.0001 9.49003 18.9111 9.68303 18.7311L15.384 13.4051C15.781 13.0331 16 12.5351 16 12.0001C16 11.4651 15.781 10.9671 15.384 10.5951Z"
                                fill="#1F2A37"/>
                        </svg>
                    </div>
                </div>
            </div>
            <MaterialStockRecordList records={stock}></MaterialStockRecordList>
        </div>
    )
}

function MaterialStockRecord({record}){
    const [isVisible, setVisibility] = useState(true);


    return(
        <>
            { isVisible && (
                    <div className='grid grid-cols-6 gap-2' id={record.idMat}>
                        <div className='col-span-2'>{record.idMat}</div>
                        <div className='col-span-2'>{record.nameMat}</div>
                        <div>{record.quantity}</div>
                        <div className='flex flex-row self-stretch justify-end'>
                            <ToolsGroup type={'stock'} item={record} onRemoveFunc={setVisibility}></ToolsGroup>
                        </div>
                    </div>
                )
            }
        </>
    )
}

function MaterialStockRecordList({records}) {
    let matList = [];
    records.forEach(r => matList.push(
        <MaterialStockRecord key={r.idMat} record={r}></MaterialStockRecord>
    ))

    return (
        <div className='collapse px-4 py-2 text-sm text-gray-700'>
            {matList}
        </div>
    )
}