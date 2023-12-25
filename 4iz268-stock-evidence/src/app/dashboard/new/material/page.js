'use client'
import CreateNewMaterial from "@/app/lib/CreateNewMaterial";
import { useFormStatus } from 'react-dom'
import { useFormState } from 'react-dom'

const initialState = {
    message: null
}
function SubmitButton(){
    const {pending} = useFormStatus();

    return(
        <button type='submit' className='border-2 px-4 py-2 rounded-md bg-blue-700 text-white' aria-disabled={pending}>Create</button>
    )
}

export default function NewMaterialPage() {
    const [state, formAction] = useFormState(CreateNewMaterial, initialState)

    return (
        <form className='flex flex-col gap-2' action={formAction}>
            <label htmlFor='nameMat'>Name: </label>
            <input id='nameMat' alt='material name' name='nameMat' className='border-2 rounded-md' type='text' required></input>
            <label htmlFor='descMat'>Description: </label>
            <input id='descMat' alt='material description' name='descMat' className='border-2 rounded-md' type='text'
                   required></input>
            <label htmlFor='unitMat'>Measurement unit: </label>
            <input id='unitMat' alt='material measurement unit' name='unitMat' className='border-2 rounded-md' type='text'
                   required></input>
            <div>
                {/*<button type='submit' className='border-2 px-4 py-2 rounded-md bg-blue-700 text-white'>Create</button>*/}
                <SubmitButton></SubmitButton>
            </div>
            <p aria-live='polite' role='status'>
                {state?.message}
            </p>
        </form>
    )
}