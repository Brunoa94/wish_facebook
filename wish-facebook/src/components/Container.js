import React from 'react'
import './Container.css'
import PerfilOption from './items/PerfilOption'
import {BsChevronDown} from 'react-icons/bs'
import {FaArrowRight} from 'react-icons/fa'
import HistoryItem from './items/HistoryItem'
import PostBox from './items/PostBox'

function Container() {
    return (
        <div className="main__container">
            <div className="left__side__bar">
                <div className="perfil__options">
                    <PerfilOption avatar={"https://scontent.fopo1-1.fna.fbcdn.net/v/t31.0-8/12240308_10207590645182654_6527767063056341391_o.jpg?_nc_cat=110&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeGeBLHB5RaGqjk3QLSqO5JmQoSM9EzSJ1hChIz0TNInWGxyQ1EPnILWPDnpFgPXkiw&_nc_ohc=LA7VPqJqbQAAX8OM0Jy&_nc_ht=scontent.fopo1-1.fna&oh=a2a616af3923165354f54437222c44e9&oe=60312706"} text="Bruno Afonso" item="perfil_img"></PerfilOption>
                    <PerfilOption img_src={"https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/0gH3vbvr8Ee.png?_nc_eui2=AeGJv9GfZIKhZ-JZT6uo0pnAqWeiF2guI5upZ6IXaC4jm_7vMSXAM6SHeIADp7Ot7do"} text="Pages"></PerfilOption>
                    <PerfilOption img_src={"https://static.xx.fbcdn.net/rsrc.php/v3/y9/r/7_gcmlwrelX.png?_nc_eui2=AeGSdqcLKdf6iPI7YpteFU6j3z6Lpcuu8HnfPouly67weVMR5CberwSgMlCLrxE8zq0"} text="COVID-19: Information's Center"></PerfilOption>
                    <PerfilOption img_src={"https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/tSXYIzZlfrS.png?_nc_eui2=AeGGGWqmNPQ6zp5yZPr8oybtY2wdbxH-OX5jbB1vEf45fpvFPK7vjoOr4RxECGhsOdg"} text="Friends"></PerfilOption>
                    <PerfilOption img_src={"https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/Im_0d7HFH4n.png?_nc_eui2=AeEEgJDzniW36Nu7C2OmYLbym5Q_-YdsEieblD_5h2wSJzycB7ziZaFP1CUzqquSuPs"} text="Groups"></PerfilOption>
                    <PerfilOption img_src={"https://static.xx.fbcdn.net/rsrc.php/v3/y4/r/MN44Sm-CTHN.png?_nc_eui2=AeEHE31SEUv12sWKQDj-rKL7rr7hPsNNZ9iuvuE-w01n2AWciE9zzuVJBb4gfBMJWiw"} text="Marketplace"></PerfilOption>
                    <PerfilOption img_src={"https://static.xx.fbcdn.net/rsrc.php/v3/y-/r/FhOLTyUFKwf.png?_nc_eui2=AeEOU19pSwcmLP6WEIK6FS-9qF4NV7eRtieoXg1Xt5G2J3B_s8mHs_wO87Jt66cNQkg"} text={"Watch"}></PerfilOption>
                    <PerfilOption Icon={BsChevronDown} text="Watch more"></PerfilOption>
                </div>
                <div className="shortcut__options">
                    <div className="shortcut__span__div">
                        <span>Shortcuts</span>
                    </div>
                    <PerfilOption shortcut={"https://scontent-lis1-1.xx.fbcdn.net/v/t31.0-8/25488457_1808403515868137_2137194378940725477_o.jpg?_nc_cat=108&ccb=2&_nc_sid=825194&_nc_eui2=AeHAFgfkhSx2568_gp2fjSpXwPqCCExKqczA-oIITEqpzL9BtuCW-cu2DzITsfSJO4g&_nc_ohc=6Ssh2NU-NvEAX-C6ELZ&_nc_ht=scontent-lis1-1.xx&oh=864f057d6a6b1b61ebdbda88d0768b45&oe=6031EB97"} text="Pplware - Programação"></PerfilOption>
                    <PerfilOption shortcut={"https://upload.wikimedia.org/wikipedia/en/7/7a/Trivia_Crack_logo.png"} text="Trivia Crack"></PerfilOption>
                    <PerfilOption shortcut={"https://stillmedab.olympic.org/media/Images/OlympicOrg/News/General/olympic-flag.jpg"} text="Olimpic Games - Tokyo 2020"></PerfilOption>
                    <PerfilOption shortcut={"https://static.globalnoticias.pt/jn/common/images/favicons/mstile-310x310.png"} text="Jornal de Noticias"></PerfilOption>
                    <PerfilOption shortcut={"https://pbs.twimg.com/profile_images/1007421610276638721/fotlRiCd.jpg"} text="Record"></PerfilOption>
                </div>
            </div>
            <div className="feed__container">
                <div className="history__items">
                    <HistoryItem avatar={"https://scontent.fopo1-1.fna.fbcdn.net/v/t31.0-8/12240308_10207590645182654_6527767063056341391_o.jpg?_nc_cat=110&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeGeBLHB5RaGqjk3QLSqO5JmQoSM9EzSJ1hChIz0TNInWGxyQ1EPnILWPDnpFgPXkiw&_nc_ohc=LA7VPqJqbQAAX8OM0Jy&_nc_ht=scontent.fopo1-1.fna&oh=a2a616af3923165354f54437222c44e9&oe=60312706"} img_src="https://s2.glbimg.com/2TANAyyU7_FP3ia12Y-82trf2_Y=/0x0:1300x867/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2019/B/9/wwIEAhQGuh1YccOlSAmw/isaquias-szeged2019-1-.jpg"></HistoryItem>
                    <HistoryItem avatar={"https://scontent-lis1-1.xx.fbcdn.net/v/t31.0-8/26220869_1670148463006355_4723147900241550143_o.jpg?_nc_cat=105&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeHrGNo5C3mL9fkHT58r4oahVaThOuXBbmRVpOE65cFuZL2DqOg_djRutNSQOpJ_htU&_nc_ohc=bVRFtiacFjgAX9L-6z-&_nc_ht=scontent-lis1-1.xx&oh=b1b8312f209fb5fa9b7464cb2dd45755&oe=60334C46"} img_src="https://static.todamateria.com.br/upload/56/78/56784e94abd35-cerebro.jpg"></HistoryItem>
                    <HistoryItem avatar={"https://scontent.fopo1-1.fna.fbcdn.net/v/t1.0-9/125410166_10158230882396749_2333812815025200549_o.jpg?_nc_cat=1&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeGQUooAJMIYAK-F3tynz5gGMbYDKYqxFwoxtgMpirEXCuzfRt6EobUYgBIimTqtpvM&_nc_ohc=QSmu5cwWj3UAX-9PC7m&_nc_ht=scontent.fopo1-1.fna&oh=7c72b0614ec980ac01a4ef43767eaf81&oe=60338FE6"} img_src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/President_Barack_Obama.jpg/960px-President_Barack_Obama.jpg"></HistoryItem>
                    <HistoryItem avatar={"https://scontent-lis1-1.xx.fbcdn.net/v/t1.0-9/123696581_221368326022320_3998394282329807908_o.jpg?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeEq5hgKWj2PtHcvIJrOL7N_Ml-TP3noIS8yX5M_eeghL-Z52sQJB1xeebFfHFEXtT0&_nc_ohc=gM5oLrpXwkgAX8aWF35&_nc_ht=scontent-lis1-1.xx&oh=26586abdc4b44507cb66e5634e1ad71e&oe=6034B328"} img_src="https://i0.wp.com/espalhafactos.com/wp-content/uploads/2018/09/maxresdefault-1.jpg?w=1200&ssl=1"></HistoryItem>
                    <HistoryItem avatar={"https://scontent.fopo1-1.fna.fbcdn.net/v/t1.0-9/136152103_239224144235382_7739292106526263132_n.jpg?_nc_cat=1&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeGOu-5sKLjTrdxLKpPRarKaOGG6HnWRYFU4YboedZFgVTHhSEFT2f6DMyxeIqleaBo&_nc_ohc=XePXmWaSr78AX_5bRI1&_nc_ht=scontent.fopo1-1.fna&oh=25ee9760c1f563ada33db444476a24ea&oe=60331D8A"} img_src="https://p2.trrsf.com/image/fget/cf/940/0/images.terra.com/2019/10/04/muse.jpg"></HistoryItem>
                    <div className="next__history">
                        <FaArrowRight className="next__history__icon"></FaArrowRight>
                    </div>
                </div>
                <PostBox></PostBox>
            </div>
            <div className="right__side__bar">
                <span>right</span>
            </div>
        </div>
    )
}

export default Container
