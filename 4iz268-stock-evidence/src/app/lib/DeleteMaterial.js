'use server'

export async function DeleteMaterial(materialId){
    const envVar = process.env.STOCK_API_ROUTE;
    const callUrl = `${envVar}/api/material/${materialId}`;
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