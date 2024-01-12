export default function PrimaryLinkButton({text, url, rightIcon}){
    return(
        <a href={url} className='flex flex-row gap-2 justify-center items-center px-2 py-1 bg-blue-700 rounded-md text-white'>
            <p>{text}</p>
            {rightIcon == null ? null : <img src={rightIcon} alt='' className='w-5 h-5 stroke-white'></img> }
        </a>
    )
}