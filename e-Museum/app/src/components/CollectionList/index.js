import Item from "./item"

const CollectionList = ({data}) => {
    return (
        <ul className="flex flex-col gap-4">
            {
                data.map((item, key) => {
                    return <Item data={item} key={key} />
                })
            }
        </ul>
    )
}

export default CollectionList