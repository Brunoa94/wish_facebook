import React, { useState } from 'react'
import './Header.css'
import Avatar from '@material-ui/core/Avatar';
import OptionItem from './items/OptionItem'

import { AiOutlinePlus, AiFillHome } from 'react-icons/ai'
import { FaFacebookMessenger, FaBell, FaFlipboard, FaDesktop, FaStoreAlt } from 'react-icons/fa'
import { GoTriangleDown, GoSearch } from 'react-icons/go'
import { IoStorefrontOutline } from 'react-icons/io5'
import { HiUserGroup } from 'react-icons/hi'
import NavigationTab from './items/NavigationTab';

function Header() {
    const [tab, setTab] = useState("home")
    return (
        <div className="header">
            <div className="logo_search_bar">
                <img alt="facebook_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1365px-Facebook_f_logo_%282019%29.svg.png"></img>
                <div className="search__div">
                    <form>
                        <GoSearch className="search__icon"></GoSearch>
                        <input type="text" placeholder="Search on Facebook"></input>
                        <button type="submit"></button>
                    </form>
                </div>
            </div>
            <div className="navigation_tabs_bar">
                <div onClick={()=> setTab("home")} className={`navigation__tab ${tab == "home" ? 'selected' : ''}`}>
                    <AiFillHome className={`navigation__tab__icon`}></AiFillHome>
                </div>
                <div onClick={()=> setTab("desktop")} className={`navigation__tab ${tab == "desktop" ? 'selected' : ''}`}>
                    <FaDesktop className={`navigation__tab__icon`}></FaDesktop>
                </div>
                <div onClick={()=> setTab("market")} className={`navigation__tab ${tab == "market" ? 'selected' : ''}`}>
                    <IoStorefrontOutline className={`navigation__tab__icon`}></IoStorefrontOutline>
                </div>
                <div onClick={()=> setTab("groups")} className={`navigation__tab ${tab == "groups" ? 'selected' : ''}`}>
                    <HiUserGroup className={`navigation__tab__icon`}></HiUserGroup>
                </div>
                <div onClick={()=> setTab("games")} className={`navigation__tab ${tab == "games" ? 'selected' : ''}`}>
                    <FaFlipboard className={`navigation__tab__icon`}></FaFlipboard>
                </div>
            </div>
            <div className="login_options_bar">
                <Avatar alt="Bruno Afonso" src="https://scontent.fopo1-1.fna.fbcdn.net/v/t31.0-8/12240308_10207590645182654_6527767063056341391_o.jpg?_nc_cat=110&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeGeBLHB5RaGqjk3QLSqO5JmQoSM9EzSJ1hChIz0TNInWGxyQ1EPnILWPDnpFgPXkiw&_nc_ohc=LA7VPqJqbQAAX8OM0Jy&_nc_ht=scontent.fopo1-1.fna&oh=a2a616af3923165354f54437222c44e9&oe=60312706"></Avatar>
                <span><strong>Bruno</strong></span>
                <div className="options_items">
                    <OptionItem Icon={AiOutlinePlus}></OptionItem>
                    <OptionItem Icon={FaFacebookMessenger}></OptionItem>
                    <OptionItem Icon={FaBell}></OptionItem>
                    <OptionItem Icon={GoTriangleDown}></OptionItem>
                </div>
            </div>
        </div>
    )
}

export default Header;
