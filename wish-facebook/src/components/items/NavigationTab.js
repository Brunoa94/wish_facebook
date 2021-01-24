import React from 'react'
import './NavigationTab.css'

function NavigationTab({Icon, selected}) {
    return (
        <div className={`navigation__tab ${selected == "true" ? 'selected' : ''}`}>
            { Icon && <Icon className={`navigation__tab__icon`}></Icon>}
        </div>
    )
}

export default NavigationTab
