import SectionMenu from "@/app/ui/SectionMenu";
import PlusButton from "@/app/ui/PlusButton";

export const metadata = {
    title: 'Stock Evidence - Dashboard'
}
export default function DashboardLayout({children}){
    return(
        <>
            <h1 className='text-4xl'>Dashboard</h1>
            <p className='text-gray-500'>From here you can do the evidence of materials</p>
            <nav className='flex flex-row self-stretch justify-between gap-0 shadow-sm'>
                <SectionMenu name={'Material'} url={'/dashboard/material'}></SectionMenu>
                <SectionMenu name={'Warehouse'} url={'/dashboard/warehouse'}></SectionMenu>
                <SectionMenu name={'Stock'} url={'/dashboard/stock'}></SectionMenu>
            </nav>
            {children}
            <PlusButton></PlusButton>
        </>
    )
}