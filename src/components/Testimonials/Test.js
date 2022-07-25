import React from "react";
import './Test.scss';

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "LINKED IN",
      title: "Connect",
      link:"https://www.linkedin.com/in/arun-kumar-r-78b926221/",
      img:
        "images/link.png",
      icon: "",
      desc:
        "Connect With ME LINKED IN Profile ",
    },
    {
      id: 2,
      name: "GIT HUB",
      title: "CHECK REPOSOTORY",
      img:
        "images/github.webp",
      icon: "assets/youtube.png",
      link:"https://github.com/SilentCat24",
      desc:
        "Check all my Projects in my GitHub Repositories ",
      featured: true,
    },
   
  ];
  return (
    <div className="testimonials" id="Test">
      <h1 >Social Links</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img
                className="user"
                src={d.img}
                alt=""
              />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
            <a href={d.link} target="_/blank" className="links" >{d.title}</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}