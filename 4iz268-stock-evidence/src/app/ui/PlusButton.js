'use client'
import {useRef} from "react";
import PlusMenu from "@/app/ui/PlusMenu";
import {useState} from "react";

export default ()=>{
    const containerRef = useRef(null);
    const [opacity, setOpacity] = useState(0);
    function AppendSelection(){
        if (opacity === 0){
            containerRef.current.style.opacity = 100;
            setOpacity(100);
        }else {
            containerRef.current.style.opacity = 0;
            setOpacity(0);
        }
    }

    return (
        //<Link href={'/dashboard/new'} className='fixed hover:bg-gray-100 bg-white shadow-sm shadow-gray-700 circle bottom-8 right-8'>
        <div>
            <div className='fixed hover:bg-gray-100 bg-white shadow-sm shadow-gray-700 circle bottom-8 right-8' onClick={AppendSelection}>
                <svg id='plusButton' className='w-12 h-12'
                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                    <path className='stroke-gray-700' d="M12 5V12M12 12V19M12 12H19M12 12H5" strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"/>
                </svg>

            </div>
            <div ref={containerRef} className='opacity-0 transition-opacity'>
                <PlusMenu></PlusMenu>
            </div>
        </div>
    //</Link>
    )
}
