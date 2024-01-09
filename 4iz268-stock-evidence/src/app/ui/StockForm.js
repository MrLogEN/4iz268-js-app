'use client'

import {SelectWarehouseOptions} from "@/app/ui/SelectWarehouseOptions";
import {useFormState, useFormStatus} from "react-dom";
import CreateNewMaterial from "@/app/lib/CreateNewMaterial";

const initialState = {
    message: null
}
function SubmitButton(){
    const {pending} = useFormStatus();

    return(
        <button type='submit' className='border-2 px-4 py-2 rounded-md bg-blue-700 text-white' aria-disabled={pending}>Create</button>
    )
}

export default function StockForm({warehouseOptions}){

    const [state, formAction] = useFormState(CreateNewMaterial, initialState)

    return (
        <form className='flex flex-col gap-2' action={formAction}>
            <label htmlFor='idWrhs'>Warehouse: </label>
            <div className='flex flex-row self-stretch'>
                <input id='idWrhs' alt='warehouse id' name='idWrhs' className='border-2 rounded-md grow' type='text'
                       placeholder={'aa11-ff2-xyz'} maxLength={36} required></input>
                {warehouseOptions ? warehouseOptions : <p>Failed to load warehouses!</p>}
            </div>
            <label htmlFor='idMat'>Material ID: </label>
            <input id='idMat' alt='material id' name='idMat' className='border-2 rounded-md' type='text'
                   placeholder={'aa11-ff2-xyz'} maxLength={36} required></input>
            <label htmlFor='quantity'>Quantity: </label>
            <input id='quantity' alt='material quantity in the warehouse' name='quantity'
                   className='border-2 rounded-md' type='number'
                   placeholder={'250'} min={0} required></input>
            {/*<input type='select'>Kokot<input/>*/}
            <div>
                {/*<button type='submit' className='border-2 px-4 py-2 rounded-md bg-blue-700 text-white'>Create</button>*/}
                <SubmitButton></SubmitButton>
            </div>
            <p aria-live='polite' role='status' className={state?.style}>
                {state?.message}
            </p>
        </form>
    );
}