import { useState } from "react";


function ListGroup({items, heading}) {

    const [selectedIndex, setSelectedIndex] = useState(-1);

    return (
        <>
            <h1>{heading}</h1>
            {items.length === 0 && <p>No element found.</p>}
            <ul className="list-group">
                {
                    items.map((item, index) => (
                        <li key={item} className={selectedIndex === index ? "list-group-item active" : "list-group-item"} onMouseEnter={() => {setSelectedIndex(index)}} onMouseLeave={() => {setSelectedIndex(-1)}}>{item}</li>
                    ))
                }
            </ul>
        </>
    )
}

export default ListGroup;