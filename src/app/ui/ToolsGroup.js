import EditButton from "@/app/ui/EditButton";
import TrashButton from "@/app/ui/TrashButton";

export default function ToolsGroup({item, type, onRemoveFunc}){
    return(
        <div title='Edit' className='flex flex-row col-start-5 col-end-5'>
            <EditButton item={item} type={type}></EditButton>
            <TrashButton item={item} type={type} onRemoveFunc={onRemoveFunc}></TrashButton>
        </div>
    )
}