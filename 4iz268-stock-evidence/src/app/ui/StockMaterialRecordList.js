import StockMaterialRecord from "@/app/ui/StockMaterialRecord";

export default function StockMaterialRecordList({filteredItems}){
    const records = [];
    filteredItems.forEach(s => {
        records.push(
            <StockMaterialRecord key={s.idWrhs+''+s.idMat} item={s}></StockMaterialRecord>
        );
    })

    return(
        <ul className='flex flex-col'>
            {records}
        </ul>
    )
}