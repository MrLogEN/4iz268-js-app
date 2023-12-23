import EditButton from "@/app/ui/EditButton";
import TrashButton from "@/app/ui/TrashButton";

export default function ToolsGroup({itemId}){
    return(
        <div className='flex flex-row col-start-4 col-end-4'>
            <EditButton itemId={itemId}></EditButton>
            <TrashButton itemId={itemId}></TrashButton>
        </div>
    )
}