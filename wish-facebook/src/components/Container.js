import React from 'react'
import './Container.css'
import PerfilOption from './items/PerfilOption'
import {BsChevronDown,  BsFillCameraVideoFill} from 'react-icons/bs'
import {FaArrowRight} from 'react-icons/fa'
import HistoryItem from './items/HistoryItem'
import PostBox from './items/PostBox'
import { avatar, perfil_options, shortcuts, history_items, avatar_icons, posts } from './mock_data'
import AvatarIcon from './items/AvatarIcon'
import PostItem from './items/PostItem'
import RightSideBar from './RightSideBar'

const text= "O Amanhã. \n Por amor a ti correram muitas lágrimas. Tombaram muitos homens. E fecharam-se muitos destinos. Por amor a ti fez-se uma revolução sem balas crivadas. Por amor a ti fez-se renascer um povo, semeou-se a sua esperança e escreveu-se um futuro.\nAmanhã é tempo de honrar as lágrimas, os homens e os seus destinos. Amanhã, mais que qualquer outra coisa, é um dia de amar o povo e o seu direito a escolher a liberdade.\nPor tudo isto, cara Democracia, amanhã vou votar. E vou porque desejo ardentemente que voltes a ser o que eras, que te aproximes dos que te veneraram sempre, que não te deixes enganar por quem engana em teu nome, que voltes a semear a confiança e que penses numa coisa muito séria: tu és o povo e o povo és tu.\nAmanhã vou votar…Como sempre! E gostaria muito que, por amor a ti, todos fossem."

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
                            isLink={post.isLink} emojis={post.emojis} emojis_number={post.emojis_number} comments_number={post.comments_number} share_number={post.share_number}></PostItem>
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