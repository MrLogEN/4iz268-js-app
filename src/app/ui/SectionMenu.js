import Link from "next/link";

export default function SectionMenu({name, url}){

    return(
        <div className='flex flex-row self-stretch grow after:bg-gray-100 after:w-0.5'>
          <Link className={'flex flex-row self-stretch grow justify-center hover:bg-gray-100 active:bg-gray-100 py-2 '} as={url.toString()} href={url} replace>
              {name}
          </Link>
        </div>
    );
}
