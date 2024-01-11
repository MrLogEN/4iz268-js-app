'use client'

import {useFormState, useFormStatus} from "react-dom";
import {GetStockByWarehouse} from "@/app/lib/GetStockByWarehouse";
import {GetStockByMaterial} from "@/app/lib/GetStockByMaterial";
import StockWarehouseRecordList from "@/app/ui/StockWarehouseRecordList";


const initialState = {
    data: null
}

function SubmitButton(){
    const {pending} = useFormStatus();

    return(
        <button type='submit' className='border-2 px-4 py-1 rounded-md bg-blue-700 text-white' aria-disabled={pending}>Filter</button>
    )
}

async function FindRecords(currentState, formData){
    const wId = formData.get('idWrhs');
    const mId = formData.get('idMat');
    let result = null;
    if(wId){
       result = await GetStockByWarehouse(wId);
       //type = 'byWarehouse';
    }
    if (!wId && mId){
        result = await GetStockByMaterial(mId);
        //type = 'byMaterial';
    }
    if (result){
        //return {data: (<p>{JSON.stringify(result)}</p>)}

        return{ data: (<StockWarehouseRecordList stocks={result}></StockWarehouseRecordList>)}
    }
    return {data: (<p>No content</p>)}

}

export default function StockPage(){
    const [state, formFunction] = useFormState(FindRecords,initialState);

    return(
        <>
            <form className='flex flex-row justify-between items-center shadow-sm px-4 py-2 rounded-t-md' action={formFunction}>
                <div className='flex flex-row gap-2'>
                    <label htmlFor='idWrhs'>Warehouse ID:</label>
                    <input name='idWrhs' type='text' className='border-2 rounded-md' placeholder='aabb-cc14-555...'></input>
                </div>
                <div className='flex flex-row gap-2'>
                    <label htmlFor='idMat'>Material ID:</label>
                    <input name='idMat' type='text' className='border-2 rounded-md' placeholder='aabb-cc14-555...'></input>
                </div>
                <SubmitButton></SubmitButton>
            </form>
            <div className='grid grid-cols-6 px-4 pt-4'>
                <div className='col-span-3'> Warehouse ID</div>
                <div className='col-span-3'>Warehouse Name</div>
            </div>
            {state?.data}
        </>

    )
}