import GetMaterials from "@/app/lib/GetMaterials";
import MaterialItem from "@/app/ui/MaterialItem";
export default async function MaterialList(){
    const result = await GetMaterials();
    // return (
    //     <p>{result?.length}</p>
    // )
    if (result == null || result?.length < 1){
        return (
            <p>Zadny material</p>
        )
    }
    else{
        const listOfMaterials = [];
        result.forEach(material => listOfMaterials.push(
           <MaterialItem material={material}></MaterialItem>
        ))
        return (
            <div className='flex flex-col gap-0'>
                {listOfMaterials}
            </div>
        )
    }
}