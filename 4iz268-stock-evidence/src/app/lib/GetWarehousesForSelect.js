'use client'

export function GetWarehousesForSelect(){
    const api = process.env.STOCK_API_ROUTE;
    const apiUrl = `${api}/api/warehouse`;
    const response = fetch(apiUrl, {
        method: "GET",
        cache: "no-cache"
    })
    if (response.ok){
        return response.json();
    }
    return null;
}

