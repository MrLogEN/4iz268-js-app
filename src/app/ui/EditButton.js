'use client'
import {useRouter} from "next/navigation";

export default function EditButton({item, type}) {

    const router = useRouter();
    let urlToRedirect = '';
    if (type==='material'){
        urlToRedirect = `/dashboard/edit/material?materialId=${item.idMat}&materialName=${item.nameMat}&materialDesc=${item.descMat}&materialUnit=${item.unitMat}`;
    }
    if (type==='warehouse'){
        urlToRedirect = `/dashboard/edit/warehouse?warehouseId=${item.idWrhs}&warehouseName=${item.nameWrhs}&warehouseTel=${item.telWrhs}&warehouseStrt2=${item.strt2Wrhs}&warehouseStrt=${item.strtWrhs}&warehouseStrt3=${item.strt3Wrhs}&warehouseCity=${item.cityWrhs}&warehousePost=${item.postWrhs}&warehouseState=${item.stateWrhs}`;
    }
    if (type==='stock'){
        urlToRedirect = `/dashboard/edit/stock?materialId=${item.idMat}&warehouseId=${item.idWrhs}&quantity=${item.quantity}`;
    }
    return (
        <button onClick={()=>router.push(urlToRedirect)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path className='fill-gray-500'
                d="M15.7618 18.9188C15.7618 18.9614 15.7458 19.0022 15.7173 19.0322C15.6887 19.0623 15.65 19.0792 15.6096 19.0792H4.97535C4.93498 19.0792 4.89626 19.0623 4.86771 19.0322C4.83916 19.0022 4.82312 18.9614 4.82312 18.9188V7.71491C4.82312 7.67237 4.83916 7.63157 4.86771 7.6015C4.89626 7.57142 4.93498 7.55452 4.97535 7.55452H11.5167L13.3398 5.63374H4.97535C4.4516 5.63425 3.94945 5.85368 3.5791 6.24386C3.20875 6.63404 3.00048 7.1631 3 7.71491V18.9188C3.00048 19.4706 3.20875 19.9997 3.5791 20.3899C3.94945 20.7801 4.4516 20.9995 4.97535 21H15.6096C16.1334 20.9995 16.6355 20.7801 17.0059 20.3899C17.3762 19.9997 17.5845 19.4706 17.585 18.9188V12.0271L15.7618 13.9478V18.9188Z"
                />
            <path className='fill-gray-500'
                d="M20.1957 3.84357C19.6828 3.30343 18.9874 3 18.2623 3C17.5371 3 16.8417 3.30343 16.3288 3.84357L9.23781 11.3135C9.11071 11.4476 9.02412 11.6184 8.98895 11.8043L8.34448 15.2002C8.31744 15.3397 8.3202 15.4839 8.35256 15.6222C8.38493 15.7605 8.44608 15.8894 8.53159 15.9998C8.6171 16.1101 8.72483 16.199 8.84697 16.26C8.96912 16.321 9.10262 16.3527 9.23781 16.3527C9.29898 16.3525 9.36 16.3463 9.42012 16.3344L12.6425 15.6554C12.819 15.6181 12.9811 15.5265 13.1083 15.3923L20.1984 7.92235C20.4528 7.65454 20.6545 7.33651 20.792 6.98646C20.9296 6.63641 21.0003 6.26122 21 5.88236C20.9997 5.5035 20.9286 5.12842 20.7906 4.77857C20.6525 4.42873 20.4504 4.111 20.1957 3.84357ZM18.9067 5.20156C18.9915 5.29076 19.0587 5.39668 19.1046 5.51327C19.1505 5.62986 19.1741 5.75483 19.1741 5.88104C19.1741 6.00725 19.1505 6.13222 19.1046 6.24881C19.0587 6.3654 18.9915 6.47132 18.9067 6.56052L18.4181 7.07433L17.1292 5.71633L17.6178 5.20156C17.7887 5.02152 18.0205 4.92037 18.2623 4.92037C18.504 4.92037 18.7358 5.02152 18.9067 5.20156ZM12.0117 13.8249L10.4 14.1649L10.7227 12.466L15.8402 7.07433L17.1292 8.43232L12.0117 13.8249Z"
                />
        </svg>
        </button>
    )
}