
export const metadata = {
    title: 'Stock Evidence - New Stock'
}
export default function NewStockLayout({children}){
    return(
        <>
            <h2 className='text-2xl'>New Stock</h2>
            {children}
        </>
    )
}