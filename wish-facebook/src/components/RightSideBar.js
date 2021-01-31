import React from 'react'
import './RightSideBar.css'
import Avatar from '@material-ui/core/Avatar'
import AvatarIcon from './items/AvatarIcon'
import { AiFillGift } from 'react-icons/ai'
import { avatar_icons } from './mock_data'

const brands = [
    [
        "https://scontent-lis1-1.xx.fbcdn.net/v/t45.1600-4/cp0/q90/spS444/p296x100/138805897_6226970259832_5528916617000848014_n.png.jpg?_nc_cat=102&ccb=2&_nc_sid=67cdda&_nc_eui2=AeEvfOP5Vvgi5VDt167ixEasEL3g2qA1qRkQveDaoDWpGV4xtHEJ4NS5oEzC1-yKtLo&_nc_ohc=mkU_Y7U5_KwAX9xtOrC&_nc_ht=scontent-lis1-1.xx&oh=1332d87f8abf59aa6a5297d308530c5c&oe=603A7679",
        "Buy Now in iStore.pt",
        "istore.pt"
    ],
    [
        "https://scontent.fopo1-1.fna.fbcdn.net/v/t45.1600-4/cp0/q75/spS444/p296x100/139814381_23846666028950519_2968858402553777511_n.jpg?_nc_cat=104&ccb=2&_nc_sid=67cdda&_nc_eui2=AeHGvp5b2sKF-qIyBBNxDfiWVtSWNVARxP9W1JY1UBHE_0PaK8LimCGAYLIj0iGArek&_nc_ohc=HsrfRW023TQAX8ZyujS&_nc_ht=scontent.fopo1-1.fna&oh=2f4659d838de9002e9e64a06953542c4&oe=603A0138",
        "Polipromotion",
        "polipromotion.com"
    ]
]

const avatar_requester = "https://scontent-lis1-1.xx.fbcdn.net/v/t1.0-9/116872084_3197010910387974_182977898568593861_n.jpg?_nc_cat=106&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeG-mO_Zomrn5V6hAqiClISI-_4Z4CLjwur7_hngIuPC6nMC4ib_ZC52W3z7J_yWfi0&_nc_ohc=0BopWbdW5swAX95UcyZ&_nc_ht=scontent-lis1-1.xx&oh=e0a27c9629f56a31cc297fc79543bab0&oe=6039AA5B"

function RightSideBar() {
    return (
        <div className="right__side__container">
            <div className="sponsors__container">
                <span className="sponsors__title">Sponsored</span>
                {
                    brands.map(
                        brand =>
                        <div className="brand__container">
                            <img src={brand[0]}></img>
                            <div className="brand__informations">
                                <span className="brand__title">{brand[1]}</span>
                                <span className="brand__url">{brand[2]}</span>
                            </div>
                        </div>
                    )
                }
            </div>
            <div className="friends__request__container">
                <div className="friends__request__header">
                    <span className="title">Friends Request</span>
                    <span className="show__all">Show all</span>
                </div>
                <div className="friend__requester">
                    <Avatar src={avatar_requester}></Avatar>
                    <div className="friend__requester__details">
                        <div className="friend__requester__first__line">
                            <span className="friend__requester__name">Mafalda Afonso</span>
                            <span className="request__time">9h</span>
                        </div>
                        <div className="common__friends">
                            <span className="common__friends">14 friends in common</span>
                        </div>
                        <div className="request__button confirm"><span>Confirm</span></div>
                        <div className="request__button reject"><span>Reject</span></div>
                    </div>
                </div>
            </div>
            <div className="birthdays__container">
                <span className="birthdays__title">Birthdays</span>
                <div className="birthdays__informations">
                    <AiFillGift className="birthday__gift"></AiFillGift>
                    <span><strong>Laura Afonso</strong> and <strong>3 others</strong> have their birthdays today</span>
                </div>
            </div>
            <div className="contacts__container">
                <div className="contacts__headers">
                    <span className="contacts__title">Contacts</span>
                </div>
                <div className="contacts__chat">
                    {
                        avatar_icons.map( contact =>
                            <div className="contact__chat">
                                <AvatarIcon avatar_src={`${contact[0]}`} type={contact[1]} name={contact[2]} isFor={"chat"}></AvatarIcon>
                                <span className="contact__name">{contact[2]}</span>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default RightSideBar
