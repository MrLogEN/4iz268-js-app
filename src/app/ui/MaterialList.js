import GetMaterials from "@/app/lib/GetMaterials";
import MaterialItem2 from "@/app/ui/MaterialItem2";
export default async function MaterialList(){
    const result = await GetMaterials();

    if (result == null || result?.length < 1){
        return (
            <p>No material yet.</p>
        )
    }
    else{
        const listOfMaterials = [];
        result.forEach(material => listOfMaterials.push(
            <MaterialItem2 material={material}></MaterialItem2>
        ))
        return (
            <div className='flex flex-col gap-0'>
                {listOfMaterials}
            </div>
        )
    }
}