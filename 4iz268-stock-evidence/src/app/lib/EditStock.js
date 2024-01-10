'use server'

export async function EditStock(currentState, formData){

    const data = {
        MaterialId: formData.get('idMat'),
        WarehouseId: formData.get('idWrhs'),
        Quantity: formData.get('quantity')
    };

    if (data.MaterialId == null || data.WarehouseId == null || data.Quantity == null){
        return {message:'Failed to update stock record.', style:'text-red-700'}
    }

    const apiUrl = process.env.STOCK_API_ROUTE;
    const url = `${apiUrl}/api/stock`;
    const bodyData = JSON.stringify(data);

    const response = await fetch(url, {
        method: 'PUT',
        body: bodyData,
        headers:{
            "Content-Type": "application/json; charset=utf-8"
        },
        cache:"no-cache"
    });

    if (response.ok){
        return {message:'Stock record updated successfully.', style:'text-green-700'}
    }

    return {message:'Failed to update stock record 1.', style:'text-red-700'}

}