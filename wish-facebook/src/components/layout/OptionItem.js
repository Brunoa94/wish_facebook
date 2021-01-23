import React from 'react'
import './OptionItem.css'

function OptionItem({Icon}) {
    return (
        <div className="option_item">
            {Icon && <Icon className={`header-option`}></Icon>}
        </div>
    )
}

export default OptionItem
