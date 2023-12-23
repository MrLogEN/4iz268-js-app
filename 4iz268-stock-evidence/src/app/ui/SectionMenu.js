export default function SectionMenu({name, url}){
    return(
        <div className='flex flex-row self-stretch grow after:bg-gray-100 after:w-0.5'>
          <a className='flex flex-row self-stretch grow bg-white justify-center hover:bg-gray-100 active:bg-gray-100 py-2' href={url}>
              {name}
          </a>
        </div>
    );
}