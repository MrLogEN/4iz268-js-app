'use server'

export async function GetStockByWarehouse(id){
    const api = process.env.STOCK_API_ROUTE;
    const url = `${api}/api/stock/experimental/warehouse/${id}`;
    try {
        const response = await fetch(url,{
            method: 'GET',
            cache: "no-cache"
        });
        if (response.ok){
            return response.json();
        }
        return null;
    }
    catch (ex){
        return null;
    }
}