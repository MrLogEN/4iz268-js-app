'use server'
export async function DeleteStock(record){

    if (record == null){
        return false;
    }
    if (record.idWrhs == null || record.idMat == null){
        return false;
    }


    const apiRoute = process.env.STOCK_API_ROUTE;
    const url = `${apiRoute}/api/stock`;
    const data = {
        MaterialId: record.idMat,
        WarehouseId: record.idWrhs,

    }
    const stringData = JSON.stringify(data);

    //return true;


    const response = await fetch(url, {
        method: 'DELETE',
        cache: "no-cache",
        body: stringData,
        headers:{
            "Content-Type": "application/json; charset=utf-8"
        }
    });
    if(response.ok){
        return true;
    }

    return false;

}