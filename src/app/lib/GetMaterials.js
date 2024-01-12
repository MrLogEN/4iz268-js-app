'use server'
export default async function GetMaterials(){

    try {
        const envVar = process.env.STOCK_API_ROUTE;
        const apiUrl = `${envVar}/api/material`; //localhost:5098
        const response = await fetch(apiUrl,{
            method: 'GET',
            cache: "no-cache"
        });
        return response.json();
    }
    catch (ex){
        return null;
    }

}