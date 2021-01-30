import React from 'react'
import './PostBox.css'
import Avatar from '@material-ui/core/Avatar';
import {IoMdPhotos} from 'react-icons/io'
import {FaUserTag} from 'react-icons/fa'
import {CgSmileMouthOpen} from 'react-icons/cg'


const post_items = [[<IoMdPhotos/>, "Photo/Video", "photo"],[<FaUserTag/>, "Identify Friends", "friends"], [<CgSmileMouthOpen/>, "Feeling/activity", "feelings"]]


function PostBox() {
    return (
        <div className="post__box">
            <div className="top__post__box">
                <Avatar src="https://scontent.fopo1-1.fna.fbcdn.net/v/t31.0-8/12240308_10207590645182654_6527767063056341391_o.jpg?_nc_cat=110&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeGeBLHB5RaGqjk3QLSqO5JmQoSM9EzSJ1hChIz0TNInWGxyQ1EPnILWPDnpFgPXkiw&_nc_ohc=LA7VPqJqbQAAX8OM0Jy&_nc_ht=scontent.fopo1-1.fna&oh=a2a616af3923165354f54437222c44e9&oe=60312706"></Avatar>
                <form>
                    <input type="text" placeholder="What Are Yout Thinking About, Bruno?"></input>
                    <button type="submit"></button>
                </form>
            </div>
            <div className="bottom__post__box">
                <div className="post__box__items">
                    {
                        post_items.map(
                            item => 
                            <div key={item[2]} className ={`post__option post__item__${item[2]}`}>
                                {item[0]}
                                <span>{item[1]}</span>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default PostBox
