'use server'

import {fromJSON} from "postcss";

export default async function CreateNewMaterial(currentState, formData){

    if (!formData){
        return {message:"Failed to create material."}
    }
    const newMaterial = {
        IdMat:'placeholder',
        NameMat: formData.get('nameMat'),
        DescMat: formData.get('descMat'),
        UnitMat: formData.get('unitMat')
    }
    const requestData = JSON.stringify(newMaterial);
    try {
        const envVar = process.env.STOCK_API_ROUTE;
        const apiUrl = `${envVar}/api/material`; //localhost:5098
        const response = await fetch(apiUrl,{
            method: 'POST',
            headers:{
                "Content-Type": "application/json; charset=utf-8"
            },
            body: requestData
        });
        if (response.ok){
            return {message: 'Material created successfully.'}
        }
        return {message: response.status + ' ' + response.statusText + '\n' + requestData };
    }
    catch (ex){
        return {message: "Failed to create material."};
    }
}