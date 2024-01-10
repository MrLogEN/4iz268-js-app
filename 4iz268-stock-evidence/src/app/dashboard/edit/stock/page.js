import {useSearchParams} from "next/navigation";
import {useFormState} from "react-dom";
import {EditMaterial} from "@/app/lib/EditMaterial";

export default function EditStockPage(){
    const [state, formAction] = useFormState(EditMaterial, initialState)
    const searchParams = useSearchParams();
    const stock = {
        MaterialId: searchParams.get('materialId'),
        WarehouseId: searchParams.get('warehouseId'),
        Quantity: searchParams.get('quantity'),
    }
    return (
        <form className='flex flex-col gap-2' action={formAction}>
            <label htmlFor='idMat'>Material ID: </label>
            <input id='idMat' alt='material id' name='idMat' className='border-2 rounded-md text-gray-500' type='text'
                   defaultValue={material.idMat} required readOnly={true}></input>
            <label htmlFor='nameMat'>Name: </label>
            <input id='nameMat' alt='material name' name='nameMat' className='border-2 rounded-md' type='text'
                   placeholder={'Material name'} defaultValue={material.nameMat} maxLength={100} required></input>
            <label htmlFor='descMat'>Description: </label>
            <input id='descMat' alt='material description' name='descMat' className='border-2 rounded-md' type='text'
                   placeholder={'Material description'} defaultValue={material.descMat} maxLength={250} required></input>
            <label htmlFor='unitMat'>Measurement unit: </label>
            <input id='unitMat' alt='material measurement unit' name='unitMat' className='border-2 rounded-md'
                   type='text' placeholder={'Material unit'} defaultValue={material.unitMat} maxLength={6} required></input>
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