import SectionMenu from "@/app/ui/SectionMenu";

export default function DashboardLayout({children}){
    return(
        <>
        <nav className='flex flex-row self-stretch justify-between gap-0 shadow-sm'>
            <SectionMenu name={'Material'} url={'dashboard/material'}></SectionMenu>
            <SectionMenu name={'Warehouse'} url={'dashboard/warehouse'}></SectionMenu>
            <SectionMenu name={'Stock'} url={'dashboard/stock'}></SectionMenu>
        </nav>
            {children}
        </>
    )
}