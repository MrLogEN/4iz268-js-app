import WarehouseItem from "@/app/ui/WarehouseItem";

export default function WarehousePage(){

    const dummyData = {
        idWrhs: "da51654e-74e7-4fb2-bad8-36c9eb967c4a",
        nameWrhs: "Sklad 1",
        telWrhs: "777777777",
        strt2Wrhs: null,
        strtWrhs: "Revolucni",
        strt3Wrhs: null,
        cityWrhs: "Brno",
        postWrhs: "19000",
        stateWrhs: "Czech republic",
    }

    return(
        <div>
            <WarehouseItem warehouse={dummyData}></WarehouseItem>
            <WarehouseItem warehouse={dummyData}></WarehouseItem>

        </div>
    )
}
