import DisplayListItem from "../DisplayListItem/DisplayListItem";

export default function DisplayList ({ displayItems, setCart }) {
    const items = displayItems.map(item => { 
        return (
            <DisplayListItem key={item._id} item={item} setCart={setCart}/>
        )
    }
      );
    return (
        <>
        {items}
        </>
    )
}