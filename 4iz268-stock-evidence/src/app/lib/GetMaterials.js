
export default async function GetMaterials(){

    try {
        const envVar = process.env.STOCK_API_ROUTE;
        const apiUrl = `${envVar}/api/material`; //localhost:5098
        const response = await fetch(apiUrl,{method: 'GET'});
        const data = response.json();
        return data;
    }
    catch (ex){
        return null;
    }

}