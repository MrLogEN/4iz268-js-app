import ToolsGroup from "@/app/ui/ToolsGroup";

export default function MaterialItem({material}){

    const partialId = material.idMat.substring(0,10) + '...';
    let partialDescription = material.descMat;
    if (material.descMat.length > 16){
        partialDescription = material.descMat.substring(0,15)+'...';
    }
    let partialName = material.nameMat;
    if (material.nameMat.length > 16){
        partialName = material.nameMat.substring(0,15)+'...';
    }

    return(
        <li id={material.idMat} key={material.idMat} className='grid grid-cols-5 gap-5 py-2 border-b-[1.5px]'>
            <div title={material.idMat} className='col-start-1 col-end-1 px-2 text-sm'>{partialId}</div>
            <div title={material.nameMat} className='col-start-2 col-end-2 px-2  text-sm'>{partialName}</div>
            <div title={material.descMat} className='col-start-3 col-end-3 text-gray-500 text-sm'>{partialDescription}</div>
            <div title={material.unitMat} className='col-start-4 col-end-4 text-center text-sm'>{material.unitMat}</div>
            <ToolsGroup itemId={material.idMat}></ToolsGroup>
        </li>
    )
}