'use server'

export async function DeleteMaterial(item){
    const envVar = process.env.STOCK_API_ROUTE;
    const callUrl = `${envVar}/api/material/${item.idMat}`;
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