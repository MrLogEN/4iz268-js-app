'use client'
import {useFormState, useFormStatus} from "react-dom";
import {CreateNewWarehouse} from "@/app/lib/CreateNewWarehouse";


const initialState = {
    message: null
}
function SubmitButton(){
    const {pending} = useFormStatus();
    return(
        <button type='submit' className='border-2 px-4 py-2 rounded-md bg-blue-700 text-white' aria-disabled={pending}>Create</button>
    )
}
export default function NewWarehousePage(){

    const [state, formAction] = useFormState(CreateNewWarehouse, initialState)

    return(
        <form className='flex flex-col gap-2' action={formAction}>

            <label htmlFor='nameWrhs'>Name: </label>
            <input id='nameWrhs' alt='warehouse name' name='nameWrhs' className='border-2 rounded-md' type='text'
                   placeholder={'Warehouse name'} maxLength={50} required></input>

            <label htmlFor='telWrhs'>Telephone: </label>
            <input id='telWrhs' alt='Telephone number' name='telWrhs' className='border-2 rounded-md' type='text'
                   placeholder={'321321321'} maxLength={16} required></input>

            <label htmlFor='strtWrhs'>Street: </label>
            <input id='strtWrhs' alt='Street' name='strtWrhs' className='border-2 rounded-md'
                   type='text' placeholder={'Street 1'} maxLength={250} required></input>

            <label htmlFor='strt2Wrhs'>Street 2: </label>
            <input id='strt2Wrhs' alt='Street' name='strt2Wrhs' className='border-2 rounded-md'
                   type='text' placeholder={'Street 2'} maxLength={250}></input>

            <label htmlFor='strt3Wrhs'>Street 3: </label>
            <input id='strt3Wrhs' alt='Street 3' name='strt3Wrhs' className='border-2 rounded-md'
                   type='text' placeholder={'Street 3'} maxLength={250}></input>

            <label htmlFor='cityWrhs'>City: </label>
            <input id='cityWrhs' alt='City' name='cityWrhs' className='border-2 rounded-md'
                   type='text' placeholder={'New York'} maxLength={250} required></input>

            <label htmlFor='postWrhs'>Postal code: </label>
            <input id='postWrhs' alt='Postal code' name='postWrhs' className='border-2 rounded-md'
                   type='text' placeholder={'120 00'} maxLength={20} required></input>

            <label htmlFor='stateWrhs'>State: </label>
            <input id='stateWrhs' alt='State' name='stateWrhs' className='border-2 rounded-md'
                   type='text' placeholder={'Great Britain'} maxLength={50} required></input>

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