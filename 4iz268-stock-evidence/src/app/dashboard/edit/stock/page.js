'use client'
import {useSearchParams} from "next/navigation";
import {useFormState, useFormStatus} from "react-dom";
import {EditMaterial} from "@/app/lib/EditMaterial";
import {EditStock} from "@/app/lib/EditStock";


const initialState = {
    message: null
}
function SubmitButton(){
    const {pending} = useFormStatus();
    return(
        <button type='submit' className='border-2 px-4 py-2 rounded-md bg-blue-700 text-white' aria-disabled={pending}>Submit</button>
    )
}


export default function EditStockPage(){
    const [state, formAction] = useFormState(EditStock, initialState)
    const searchParams = useSearchParams();
    const stock = {
        MaterialId: searchParams.get('materialId'),
        WarehouseId: searchParams.get('warehouseId'),
        Quantity: searchParams.get('quantity'),
    }
    return (
        <form className='flex flex-col gap-2' action={formAction}>
            <label htmlFor='idWrhs'>Warehouse: </label>
            <div className='flex flex-row self-stretch'>
                <input id='idWrhs' alt='warehouse id' name='idWrhs' className='border-2 rounded-md grow' type='text'
                       maxLength={36} readOnly={true} value={stock.WarehouseId}></input>
            </div>
            <label htmlFor='idMat'>Material ID: </label>
            <input id='idMat' alt='material id' name='idMat' className='border-2 rounded-md' type='text'
                   placeholder={'aa11-ff2-xyz'} maxLength={36} readOnly={true} value={stock.MaterialId}></input>
            <label htmlFor='quantity'>Quantity: </label>
            <input id='quantity' alt='material quantity in the warehouse' name='quantity'
                   className='border-2 rounded-md' type='number'
                   placeholder={'250'} min={0} defaultValue={stock.Quantity} required></input>
            <div>
                <SubmitButton></SubmitButton>
            </div>
            <p aria-live='polite' role='status' className={state?.style}>
                {state?.message}
            </p>
        </form>
    )
}