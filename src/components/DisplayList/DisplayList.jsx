import './DisplayList.css'

import DisplayListItem from "../DisplayListItem/DisplayListItem";

export default function DisplayList ({ displayItems, setCart, setActiveItem }) {
    const items = displayItems.map(item => { 
        return (
            <DisplayListItem setActiveItem={setActiveItem} key={item._id} item={item} setCart={setCart}/>
        )
    }
      );
    return (
        <ul className="DisplayList">
        <li>{items}</li>
        </ul>
    )
}