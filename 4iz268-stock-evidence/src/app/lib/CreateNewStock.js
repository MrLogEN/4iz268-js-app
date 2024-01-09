'use server'

export async function CreateNewStock(status, formData){

    const input = formData.get('idWrhs');
    const select = formData.get('warehouses');

    const data = {
        WarehouseId: input?.length < 1 ? select : input,
        MaterialId: formData.get('idMat'),
        Quantity: formData.get('quantity')
    }
    const apiRoute = process.env.STOCK_API_ROUTE;
    const url = `${apiRoute}/api/stock`;

    const stringData = JSON.stringify(data);
    const response = await fetch(url, {
        method: 'POST',
        cache: "no-cache",
        body:stringData,
        headers:{
            "Content-Type": "application/json; charset=utf-8"
        }
    });
    if (response.ok){
        return {message: 'Stock created', style: 'text-green-700'}
    }
    return {message: `${response.status} Failed to create stock`, style: 'text-red-700'}
    //return {message: `${stringData} Failed to create stock`, style: 'text-red-700'}
}