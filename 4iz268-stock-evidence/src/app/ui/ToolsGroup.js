import EditButton from "@/app/ui/EditButton";
import TrashButton from "@/app/ui/TrashButton";

export default function ToolsGroup({itemId}){
    return(
        <div title='Edit' className='flex flex-row col-start-5 col-end-5'>
            <EditButton itemId={itemId}></EditButton>
            <TrashButton itemId={itemId}></TrashButton>
        </div>
    )
}