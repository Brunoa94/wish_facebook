import React from 'react'
import './RightSideBar.css'

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
            </div>
        </div>
    )
}

export default RightSideBar
