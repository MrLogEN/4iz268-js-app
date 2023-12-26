'use server'

export async function EditWarehouse(currentState, formData){
    if (!formData){
        return {message:`Failed to update warehouse.`, style:'text-red-700'}
    }
    const newWarehouse = {
        IdWrhs:formData.get('idWrhs'),
        NameWrhs: formData.get('nameWrhs'),
        TelWrhs: formData.get('telWrhs'),
        StrtWrhs: formData.get('strtWrhs'),
        Strt2Wrhs: formData.get('strt2Wrhs'),
        Strt3Wrhs: formData.get('strt3Wrhs'),
        CityWrhs: formData.get('cityWrhs'),
        PostWrhs: formData.get('postWrhs'),
        StateWrhs: formData.get('stateWrhs'),
    }

    try {
        const envVar = process.env.STOCK_API_ROUTE;
        const apiUrl = `${envVar}/api/warehouse/${newWarehouse.IdWrhs}`; //localhost:5098
        const warehouse = JSON.stringify(newWarehouse);

        const response = await fetch(apiUrl,{
            method: 'PUT',
            headers:{
                "Content-Type": "application/json; charset=utf-8",
            },
            cache: 'no-cache',
            body:warehouse
        });

        if (response.ok){
            return {message: 'Warehouse updated', style:'text-green-700'}
        }
        return {message:`${response.status} Failed to update warehouse.`, style:'text-red-700'}
    }
    catch (ex){
        return {message:'Failed to update warehouse.', style:'text-red-700'}

    }
}