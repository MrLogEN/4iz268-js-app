import WarehouseItem from "@/app/ui/WarehouseItem";
import WarehouseList from "@/app/ui/WarehouseList";

export default function WarehousePage(){
    return(
        <div>
            <div className='grid grid-cols-4 pb-2 px-4'>
                <div className='text-center border-r-2'>Name</div>
                <div className='text-center border-r-2 col-span-2'>Id</div>
                <div className='text-center'>Operation</div>

            </div>
            <WarehouseList></WarehouseList>
        </div>
    )
}
