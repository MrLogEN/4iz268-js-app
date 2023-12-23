import ToolsGroup from "@/app/ui/ToolsGroup";

export default function MaterialItem({material}){
    return(
        <li key={material.idMat} className='grid grid-cols-4 gap-5 py-2 border-b-[1.5px]'>
            <div className='col-start-1 col-end-1 px-2 '>{material.nameMat}</div>
            <div className='col-start-2 col-end-2 px-2 text-gray-500'>{material.descMat}</div>
            <div className='col-start-3 col-end-3 text-center'>{material.unitMat}</div>
            <ToolsGroup itemId={material.idMat}></ToolsGroup>
        </li>
    )
}