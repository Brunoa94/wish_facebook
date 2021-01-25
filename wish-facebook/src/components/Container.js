import React from 'react'
import './Container.css'
import PerfilOption from './items/PerfilOption'
import {BsChevronDown,  BsFillCameraVideoFill} from 'react-icons/bs'
import {FaArrowRight} from 'react-icons/fa'
import HistoryItem from './items/HistoryItem'
import PostBox from './items/PostBox'
import { avatar, perfil_options, shortcuts, history_items, avatar_icons } from './mock_data'
import AvatarIcon from './items/AvatarIcon'


function Container() {
    return (
        <div className="main__container">
            <div className="left__side__bar">
                <div className="perfil__options">
                    <PerfilOption avatar={avatar[0]} text={avatar[1]} item="perfil_img"></PerfilOption>
                    {
                        perfil_options.map(
                            item => <PerfilOption img_src={item[0]} text={item[1]}></PerfilOption>
                        )
                    }
                    <PerfilOption Icon={BsChevronDown} text="Watch more"></PerfilOption>
                </div>
                <div className="shortcut__options">
                    <div className="shortcut__span__div">
                        <span>Shortcuts</span>
                    </div>
                    {
                        shortcuts.map(
                            item => <PerfilOption shortcut={item[0]} text={item[1]}></PerfilOption>
                        )
                    }
                </div>
            </div>
            <div className="feed__container">
                <div className="history__items">
                    {
                        history_items.map(
                            item => <HistoryItem avatar={item[0]} img_src={item[1]}></HistoryItem>
                        )
                    }
                    <div className="next__history">
                        <FaArrowRight className="next__history__icon"></FaArrowRight>
                    </div>
                </div>
                <PostBox></PostBox>
                <div className="video__room">
                    <div className="create__room">
                        <div className="camera__icon__div">
                            <BsFillCameraVideoFill className="camera__icon"></BsFillCameraVideoFill>
                            <span className="">+</span>
                        </div>
                        <span className="create__room__span">Create room</span>
                    </div>
                    <div className="room__contacts">
                        {
                            avatar_icons.map(
                                item => <AvatarIcon avatar_src={item[0]} isOnline={item[1]}></AvatarIcon>
                            )
                        }
                    </div>  
                    <div className="next_avatars">
                        <FaArrowRight className="arrow_avatar"></FaArrowRight>
                    </div>        
                </div>
            </div>
            <div className="right__side__bar">
                <span>right</span>
            </div>
        </div>
    )
}

export default Container
