'use client'
import {useFormState, useFormStatus} from "react-dom";
import {useSearchParams} from "next/navigation";
import {EditWarehouse} from "@/app/lib/EditWarehouse";


const initialState = {
    message: null
}
function SubmitButton(){
    const {pending} = useFormStatus();
    return(
        <button type='submit' className='border-2 px-4 py-2 rounded-md bg-blue-700 text-white' aria-disabled={pending}>Submit</button>
    )
}
export default function EditWarehousePage(){

    const [state, formAction] = useFormState(EditWarehouse, initialState)
    const searchParams = useSearchParams();
    const warehouse = {
        idWrhs: searchParams.get('warehouseId'),
        nameWrhs: searchParams.get('warehouseName'),
        telWrhs: searchParams.get('warehouseTel'),
        strtWrhs: searchParams.get('warehouseStrt'),
        strt2Wrhs: searchParams.get('warehouseStrt2'),
        strt3Wrhs: searchParams.get('warehouseStrt3'),
        cityWrhs: searchParams.get('warehouseCity'),
        postWrhs: searchParams.get('warehousePost'),
        stateWrhs: searchParams.get('warehouseState')
    }

    if (warehouse.strt2Wrhs == null){
        warehouse.strt2Wrhs = '';
    }
    if (warehouse.strt3Wrhs == null){
        warehouse.strt3Wrhs = '';
    }

    return(
        <form className='flex flex-col gap-2' action={formAction}>
            <label htmlFor='idWrhs'>Warehouse ID: </label>
            <input id='idWrhs' alt='warehouse id' name='idWrhs' className='border-2 rounded-md text-gray-500'
                   type='text'
                   defaultValue={warehouse.idWrhs} required readOnly={true}></input>

            <label htmlFor='nameWrhs'>Name: </label>
            <input id='nameWrhs' alt='warehouse name' name='nameWrhs' className='border-2 rounded-md' type='text'
                   placeholder={'Warehouse name'} defaultValue={warehouse.nameWrhs} maxLength={50} required></input>

            <label htmlFor='telWrhs'>Telephone: </label>
            <input id='telWrhs' alt='Telephone number' name='telWrhs' className='border-2 rounded-md' type='text'
                   placeholder={'321321321'} defaultValue={warehouse.telWrhs} maxLength={16}
                   required></input>

            <label htmlFor='strtWrhs'>Street: </label>
            <input id='strtWrhs' alt='Street' name='strtWrhs' className='border-2 rounded-md'
                   type='text' placeholder={'Street 1'} defaultValue={warehouse.strtWrhs} maxLength={250}
                   required></input>

            <label htmlFor='strt2Wrhs'>Street 2: </label>
            <input id='strt2Wrhs' alt='Street' name='strt2Wrhs' className='border-2 rounded-md'
                   type='text' placeholder={'Street 2'} defaultValue={warehouse.strt2Wrhs} maxLength={250}></input>

            <label htmlFor='strt3Wrhs'>Street 3: </label>
            <input id='strt3Wrhs' alt='Street 3' name='strt3Wrhs' className='border-2 rounded-md'
                   type='text' placeholder={'Street 3'} defaultValue={warehouse.strt3Wrhs} maxLength={250}></input>

            <label htmlFor='cityWrhs'>City: </label>
            <input id='cityWrhs' alt='City' name='cityWrhs' className='border-2 rounded-md'
                   type='text' placeholder={'New York'} defaultValue={warehouse.cityWrhs} maxLength={250}
                   required></input>

            <label htmlFor='postWrhs'>Postal code: </label>
            <input id='postWrhs' alt='Postal code' name='postWrhs' className='border-2 rounded-md'
                   type='text' placeholder={'120 00'} defaultValue={warehouse.postWrhs} maxLength={20}
                   required></input>

            <label htmlFor='stateWrhs'>State: </label>
            <input id='stateWrhs' alt='State' name='stateWrhs' className='border-2 rounded-md'
                   type='text' placeholder={'Great Britain'} defaultValue={warehouse.stateWrhs} maxLength={50}
                   required></input>

            <div>
                {/*<button type='submit' className='border-2 px-4 py-2 rounded-md bg-blue-700 text-white'>Create</button>*/}
                <SubmitButton></SubmitButton>
            </div>
            <p aria-live='polite' role='status' className={state?.style}>
                {state?.message}
            </p>
        </form>
    )
}