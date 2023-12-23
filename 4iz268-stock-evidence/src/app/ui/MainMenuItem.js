export default function MainMenuItem({name, url}) {
    return(
      <a href={url} className='hover:bg-gray-100 p-3'>{name}</a>
    );
}