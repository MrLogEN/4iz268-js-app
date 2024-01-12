'use server'

export async function EditMaterial(currentState, formData){
    if (!formData){
        return {message:`Failed to update material.`, style:'text-red-700'}
    }
    const newMaterial = {
        IdMat:formData.get('idMat'),
        NameMat: formData.get('nameMat'),
        DescMat: formData.get('descMat'),
        UnitMat: formData.get('unitMat')
    }
    try {
        const envVar = process.env.STOCK_API_ROUTE;
        const apiUrl = `${envVar}/api/material/${newMaterial.IdMat}`; //localhost:5098

        const replacer = (key, value) => (value === null ? null : value);

        const material = JSON.stringify(newMaterial, replacer);

        const response = await fetch(apiUrl,{
            method: 'PUT',
            headers:{
                "Content-Type": "application/json; charset=utf-8",
            },
            cache: 'no-cache',
            body:material
        });

        if (response.ok){
            return {message: 'Material updated', style:'text-green-700'}
        }
        return {message:`${response.status} Failed to update material.`, style:'text-red-700'}
    }
    catch (ex){
        return {message:'Failed to update material.', style:'text-red-700'}

    }

}