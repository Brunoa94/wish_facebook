import React from 'react'
import './Container.css'
import {BsFillCameraVideoFill} from 'react-icons/bs'
import {FaArrowRight} from 'react-icons/fa'
import HistoryItem from './items/HistoryItem'
import PostBox from './items/PostBox'
import { history_items, avatar_icons, posts } from './mock_data'
import AvatarIcon from './items/AvatarIcon'
import PostItem from './items/PostItem'
import RightSideBar from './RightSideBar'
import LeftSideBar from './LeftSideBar'

function Container() {
    return (
        <div className="main__container">
            <div className="left__side__bar">
                <LeftSideBar></LeftSideBar>
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
                                item => <AvatarIcon avatar_src={item[0]} type={item[1]} isFor="chat"></AvatarIcon>
                            )
                        }
                    </div>  
                    <div className="next_avatars">
                        <FaArrowRight className="arrow_avatar"></FaArrowRight>
                    </div>        
                </div>
                <div className="feed__posts">
                    {
                        posts.map(
                            post => <PostItem img_src={post.img_src} avatar={post.avatar} username={post.username} date={post.date} text={post.text}
                            isLink={post.isLink} emojis={post.emojis} emojis_number={post.emojis_number} comments_number={post.comments_number} share_number={post.share_number}
                            link_website={post.link_website} link_title={post.link_title} has_history={post.has_history}></PostItem>
                        )
                    }
                </div>
            </div>
            <div className="right__side__bar">
                <RightSideBar></RightSideBar>
            </div>
        </div>
    )
}

export default Container