import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import './AvatarIcon.css'

function AvatarIcon({avatar_src, isOnline}) {
    return (
        <div className="contact__avatar">
            <Avatar src={avatar_src}></Avatar>
        </div>
    )
}

export default AvatarIcon
