import Link from "next/link";

export default ()=>{
    return(
        <Link href={'/dashboard/new'} className='fixed hover:bg-gray-100 bg-white shadow-sm shadow-gray-700 circle bottom-8 right-8'>
            <svg className='w-12 h-12 p-' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                <path className='stroke-gray-700' d="M12 5V12M12 12V19M12 12H19M12 12H5"  strokeWidth="2" strokeLinecap="round"
                      strokeLinejoin="round"/>
            </svg>
        </Link>
    )
}