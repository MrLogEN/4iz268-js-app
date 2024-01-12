export const metadata = {
    title: 'Stock Evidence - Stock'
}
export default function StockLayout({children}){
    return(
        <>
            <h2 className='font-bold'>Stock</h2>
            {children}
        </>
    )
}