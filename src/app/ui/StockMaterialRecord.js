import ToolsGroup from "@/app/ui/ToolsGroup";
import {useState} from "react";

export default function StockMaterialRecord({item}) {
    const [isVisible, setIsVisibile] = useState(true);

    return (
        <>
            {isVisible && (
                <li className='grid grid-cols-6 py-2 gap-2 text-sm border-gray-100 border-t-[1px] ' id={item.idWrhs+''+item.idMat}>
                    <div className='col-span-2 text-gray-700'>{item.idMat}</div>
                    <div className='col-span-2'>{item.nameMat}</div>
                    <div>{item.quantity}</div>
                    <div className='flex flex-row self-stretch justify-end'>
                        <ToolsGroup type={'stock'} item={item} onRemoveFunc={setIsVisibile}></ToolsGroup>
                    </div>
                </li>
            )}
        </>
    )
}

