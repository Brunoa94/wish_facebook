import React from 'react'
import './Container.css'
import PerfilOption from './PerfilOption'
import {BsChevronDown} from 'react-icons/bs'

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
                <span>feed</span>
            </div>
            <div className="right__side__bar">
                <span>right</span>
            </div>
        </div>
    )
}

export default Container
