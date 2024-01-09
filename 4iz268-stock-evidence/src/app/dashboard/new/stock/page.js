import {SelectWarehouseOptions} from "@/app/ui/SelectWarehouseOptions";
import StockForm from "@/app/ui/StockForm";

export default async function NewStockPage() {

    const options = await SelectWarehouseOptions();

    return (
        <StockForm warehouseOptions={options}></StockForm>
    )
}
