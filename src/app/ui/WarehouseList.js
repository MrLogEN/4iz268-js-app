import {GetWarehouses} from "@/app/lib/GetWarehouses";
import WarehouseItem from "@/app/ui/WarehouseItem";

export default async function WarehouseList(){
    const rawList =  await GetWarehouses();
    if (!rawList){
        return (
            <p>
                Nothing here yet.
            </p>
        )
    }
    const resultList = [];
    rawList.forEach(w => resultList.push(
       <WarehouseItem warehouse={w}></WarehouseItem>
    ));

    return(
        <ul>
            {resultList}
        </ul>
    )
}