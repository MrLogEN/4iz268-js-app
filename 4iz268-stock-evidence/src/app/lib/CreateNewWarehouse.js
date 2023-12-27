'use server'
export async function CreateNewWarehouse(currentState, formData){
    if (!formData){
        return {message:"Failed to create warehouse.", style:'text-red-700'}
    }

    const newWarehouse = {
        IdWrhs: 'placehodler',
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
        const data = JSON.stringify(newWarehouse);

        const envVar = process.env.STOCK_API_ROUTE;
        const url = `${envVar}/api/warehouse`;

        const response = await fetch(url, {
            method: "POST",
            headers:{
                "Content-Type": "application/json; charset=utf-8"
            },
            body: data
        })
        if (response.ok){
            return {message: 'Warehouse created successfully', style:'text-green-700'}
        }
        return {message:`${response.status} Failed to create warehouse.`, style:'text-red-700'}

    }
    catch (ex){
        return {message:"Failed to create warehouse.", style:'text-red-700'}
    }
}