'use server'
export async function DeleteWarehouse(item){
    const envVar = process.env.STOCK_API_ROUTE;
    const callUrl = `${envVar}/api/warehouse/${item.idWrhs}`;
    try {
        const response = await fetch(callUrl, {
            method: 'DELETE'
        });
        return response.ok;
    }
    catch (ex){
        return false;
    }
}