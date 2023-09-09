import React from "react";

function InfoTile({image, imageAlt, title, children}) {
    return (
        <section>
            <h2>{title}</h2>
            <img src={image} alt={imageAlt}/>
            {children}
        </section>
    )
}

export default InfoTile;