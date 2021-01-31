import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import './AvatarIcon.css'
import If from './If'

function AvatarIcon({avatar_src, type, isFor}) {
    return (
        <div>
            <If test={type === "isOnline"}>
                <div className={`contact__avatar ${isFor === "chat" ? "chat" : ""}`}>
                    <Avatar className="avatar__icon" src={avatar_src}></Avatar>
                    <div className="online__badge"></div>
                </div>
            </If>
            <If test={type === "notOnline"}>
                <div className={`contact__avatar ${isFor === "chat" ? "chat" : ""}`}>
                    <Avatar className="avatar__icon" src={avatar_src}></Avatar>
                </div>
            </If>
        </div>
    )
}

export default AvatarIcon
