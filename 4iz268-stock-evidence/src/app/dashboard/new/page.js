export default function NewPage(){

    return(
        <form>
            <div className='flex flex-row gap-2'>
            <label htmlFor={'itemType'}>Item type:</label>
            <select itemID={'itemType'} name={'itemType'} >
                <option value={'material'}>Material</option>
                <option value={'warehouse'}>Warehouse</option>
                <option value={'stock'}>Stock</option>
            </select>
            </div>
        </form>
    )
}