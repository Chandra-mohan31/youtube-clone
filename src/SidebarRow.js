import React from 'react';
import "./SidebarRow.css";


function SidebarRow({selected,title,Icon}) {
    return (
        <div className={`sidebarrow ${selected && "selected"}`}>
            <Icon className="sidebarrow__icon" />
            <h1 className="sidebarrow__title">{title}</h1>
        </div>
    )
}

export default SidebarRow
