import { Fragment } from "react"

export default function NewOrderPage ({items}) {
    const itemList = items.map((item) => {
        return (
            <Fragment key={item.id}>
            <p >{item.title}</p>
            <p >${item.price}</p>
            </ Fragment>
        )
    })
    return(
        <>
        {itemList}
        </>
    )
}