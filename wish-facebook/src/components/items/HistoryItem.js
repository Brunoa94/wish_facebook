import React from 'react'
import './HistoryItem.css'
import Avatar from '@material-ui/core/Avatar';

function HistoryItem({img_src, avatar}) {
    return (
        <div className="history__item">
            <div className="circle__button">
                { avatar && <Avatar className="history__avatar" src={avatar}></Avatar>}
            </div>
            <img className="history__img" src={img_src} alt="Isaquias"></img>
        </div>
    )
}

export default HistoryItem
