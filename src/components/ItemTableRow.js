function ItemTableRow (props){
    return (
        <tr className='ItemTableRow'>
            <td className='ItemTableColumn'>{props.item.itemCode}</td>
            <td className='ItemTableColumn'>{props.item.description}</td>
            <td className='ItemTableColumn'>{props.item.price}</td>
            <td className='ItemTableColumn'>{props.item.state}</td>
            <td className='ItemTableColumn'>{props.item.creationDate}</td>
            <td className='ItemTableColumn'>{props.item.creator.name}</td>
        </tr>
    );
}

export default ItemTableRow;