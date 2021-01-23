import React from 'react'
import './PerfilOption.css'
import Avatar from '@material-ui/core/Avatar';

function PerfilOption({img_src, text, item, avatar, Icon, shortcut}) {
    return (
        <div className="perfil__option">
            {shortcut && <img src={shortcut} className="shortcut__option"></img>}
            {avatar && <Avatar className="perfil__option__avatar" src={avatar} alt={item}></Avatar>} 
            {img_src && <img src={img_src} alt={item}></img>}
            {Icon && <div className="perfil__option__icon__div"><Icon className="perfil__option__icon"></Icon></div>}            
            <span>{text}</span>
        </div>
    )
}

export default PerfilOption
