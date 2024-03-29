'use client'
import {DeleteMaterial} from "@/app/lib/DeleteMaterial";
import {DeleteWarehouse} from "@/app/lib/DeleteWarehouse";
import {DeleteStock} from "@/app/lib/DeleteStock";
const ConfirmationAlert =async (item, type, onRemoveFunc)=>{

    let deleteFunc = async ()=>false;

    if (type === 'material'){
        deleteFunc = DeleteMaterial;
    }
    if (type === 'warehouse'){
        deleteFunc = DeleteWarehouse;
    }
    if (type === 'stock'){
        deleteFunc = DeleteStock;
    }

    const result = confirm(`Do you wish to delete ${type} ${item?.idMat? ' with matID: '+item?.idMat : '' } ${item?.idWrhs? ' with wrhsID: '+item?.idWrhs : '' }?`);
    if (result){
        const deleted = await deleteFunc(item);
        if (deleted){
            let element = null;
            if (type === 'material'){
                //element  = document.getElementById(item.idMat);
                onRemoveFunc(false);
            }
            if (type === 'warehouse'){
                //element  = document.getElementById(item.idWrhs);
                onRemoveFunc(false);

            }
            if (type === 'stock'){
                //element = document.getElementById(item.idMat);
                onRemoveFunc(false);
            }
            //element?.remove();
        }
    }
}
export default function TrashButton({item, type, onRemoveFunc}){

    return(
        <button title='Delete' onClick={()=>ConfirmationAlert(item, type, onRemoveFunc)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path className='fill-red-700'
                    d="M20 6.21053H16V4.10526C16 3.54691 15.7893 3.01143 15.4142 2.61662C15.0391 2.2218 14.5304 2 14 2H10C9.46957 2 8.96086 2.2218 8.58579 2.61662C8.21071 3.01143 8 3.54691 8 4.10526V6.21053H4C3.73478 6.21053 3.48043 6.32143 3.29289 6.51884C3.10536 6.71624 3 6.98398 3 7.26316C3 7.54233 3.10536 7.81007 3.29289 8.00748C3.48043 8.20489 3.73478 8.31579 4 8.31579H5V19.8947C5 20.4531 5.21071 20.9886 5.58579 21.3834C5.96086 21.7782 6.46957 22 7 22H17C17.5304 22 18.0391 21.7782 18.4142 21.3834C18.7893 20.9886 19 20.4531 19 19.8947V8.31579H20C20.2652 8.31579 20.5196 8.20489 20.7071 8.00748C20.8946 7.81007 21 7.54233 21 7.26316C21 6.98398 20.8946 6.71624 20.7071 6.51884C20.5196 6.32143 20.2652 6.21053 20 6.21053ZM10 4.10526H14V6.21053H10V4.10526ZM17 19.8947H7V8.31579H17V19.8947Z"
                    />
                <path className='fill-red-700'
                    d="M10 9.36842C9.73478 9.36842 9.48043 9.47932 9.29289 9.67673C9.10536 9.87414 9 10.1419 9 10.4211V17.7895C9 18.0686 9.10536 18.3364 9.29289 18.5338C9.48043 18.7312 9.73478 18.8421 10 18.8421C10.2652 18.8421 10.5196 18.7312 10.7071 18.5338C10.8946 18.3364 11 18.0686 11 17.7895V10.4211C11 10.1419 10.8946 9.87414 10.7071 9.67673C10.5196 9.47932 10.2652 9.36842 10 9.36842Z"
                    fill="#1F2A37"/>
                <path className='fill-red-700'
                    d="M14 9.36842C13.7348 9.36842 13.4804 9.47932 13.2929 9.67673C13.1054 9.87414 13 10.1419 13 10.4211V17.7895C13 18.0686 13.1054 18.3364 13.2929 18.5338C13.4804 18.7312 13.7348 18.8421 14 18.8421C14.2652 18.8421 14.5196 18.7312 14.7071 18.5338C14.8946 18.3364 15 18.0686 15 17.7895V10.4211C15 10.1419 14.8946 9.87414 14.7071 9.67673C14.5196 9.47932 14.2652 9.36842 14 9.36842Z"
                    fill="#1F2A37"/>
            </svg>
        </button>
    )
}