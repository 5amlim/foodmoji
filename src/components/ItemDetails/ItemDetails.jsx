

export default function ItemDetails ({activeItem}) {
    return (
        <>
        {activeItem ?
            <div>
                <p>Item Details</p>
                <p>Name: {activeItem.title}</p>
                <p>Brand: {activeItem.brand}</p>
                <p>Description: {activeItem.description}</p>
            </div>
        :
            <div></div>
        }
        


        </>
    )
}