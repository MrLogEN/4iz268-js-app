import {GetWarehousesForSelect} from "@/app/lib/GetWarehousesForSelect";
export async function SelectWarehouseOptions(){
    const data = await GetWarehousesForSelect();
    let resultOptions = [];

    if (data == null){
        return(
            {resultOptions}
        )
    }
    if (data.length < 1){
        return(
            {resultOptions}
        )
    }

    data.forEach(w => resultOptions.push(
        <option value={w.idWrhs}>{w.nameWrhs}</option>
    ))
    return (
        <select className='px-4 py-2 rounded grow' name={'warehouses'} id={'warehouses'}>
            {resultOptions}
        </select>
    )
}