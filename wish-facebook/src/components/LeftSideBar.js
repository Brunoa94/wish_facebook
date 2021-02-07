import React from 'react'
import PerfilOption from './items/PerfilOption'
import { avatar, perfil_options, shortcuts } from './mock_data'
import { BsChevronDown } from 'react-icons/bs'

function LeftSideBar() {
    return (
        <div>
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
    )
}

export default LeftSideBar
