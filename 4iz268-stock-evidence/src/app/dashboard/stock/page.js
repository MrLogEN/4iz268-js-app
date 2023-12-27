'use client'

import {useFormState, useFormStatus} from "react-dom";
import StockItem from "@/app/ui/StockItem";
import {GetStockByWarehouse} from "@/app/lib/GetStockByWarehouse";
import {fromJSON} from "postcss";


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

    let result = null;
    if(wId){
       result = await GetStockByWarehouse(wId);

    }
    if (result){
        //return {data: (<p>{JSON.stringify(result)}</p>)}

        return{ data: (<StockItem stock={result}></StockItem>)}
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
            <div className='grid grid-cols-4'>
                <div className='col-span-2'>Warehouse ID</div>
                <div>Warehouse Name</div>
            </div>
            {state?.data}
        </>

    )
}