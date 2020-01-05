import React, { Component } from "react";
import "./Post.css";

class Post extends Component {
  constructor(props){
    super(props);
  }
  render() {
    const nickname= this.props.nickname;
    const avatar= this.props.avatar;
    const image = this.props.image;
    const caption= this.props.caption;
    return (
      <article className="Post" ref="Post">
        <header>
          <div className="Post-user">
            <div className="Post-user-avatar">
              <img
                //src="https://i.pinimg.com/originals/5d/32/76/5d32768cfb240ef4875c712f4b2f08ba.jpg"
                //alt= "rick profile pic"
                src={avatar} alt= {nickname}
              />
            </div>
            <div className="Post-user-nickname">
              <span>{nickname}</span>
            </div>
          </div>
        </header>
        <div className="Post-image">
          <div className="Post-image-bg">
            <img
              //alt="first pic"
              //src="https://www.goldderby.com/wp-content/uploads/2019/04/Rick-and-Morty.jpg?w=620&h=360&crop=1"
              alt= {caption} src= {image}
            />
          </div>
        </div>
        <div className="Post-caption">
          <strong>{nickname}</strong> {caption}
        </div>
      </article>
    );
  }
}
export default Post;
