'use client'
import {GetWarehousesForSelect} from "@/app/lib/GetWarehousesForSelect";
export function SelectWarehouseOptions(){
    const data = GetWarehousesForSelect();
    const resultOptions = [];

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
        <select name={'warehouses'}>
            {resultOptions}
        </select>
    )
}