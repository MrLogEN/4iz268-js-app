import StockWarehouseRecord from "@/app/ui/StockWarehouseRecord";

export default function StockWarehouseRecordList({stocks}){

    if (stocks.length < 1){
        return (
            <p className='px-4 text-xl'>No content</p>
        );
    }

    const uniqueWarehouses = [];
    stocks.forEach(s => {
        if (!uniqueWarehouses.includes(s.idWrhs)){
            uniqueWarehouses.push(s.idWrhs);
        }
    });
    const resultWarehouseList = [];
    uniqueWarehouses.forEach(w => {
        const filteredStock = [];
        stocks.forEach(s =>{
            if (s.idWrhs === w){
                filteredStock.push(s);
            }
        })

        resultWarehouseList.push(
          <StockWarehouseRecord key={filteredStock[0].idWrhs} filteredStock={filteredStock}></StockWarehouseRecord>
        );

    });
    return(
        <ul className='flex flex-col'>
            {resultWarehouseList}
        </ul>
    )
}