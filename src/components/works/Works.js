import React,{ useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    // {
    //   id: "1",
    //   icon: "images/form.png",
    //   title: "Form Validation",
    //   desc:
    //     "Form Validation Using HTML,CSS,JAVA SCRIPT ",
    //   img:
    //     "images/form.png",
    //     code:"https://form-validation-pattern.netlify.app/"
    // },
    {
      id: "2",
      icon: "images/rock.jpg",
      title: "ROCK PAPER SCISSOR GAME",
      desc:
        "Game Using HTML CSS JAVASVRIPT",
      img:
        "images/rock.jpg",
        code:"https://rock-paper-lizard9.netlify.app/"
    },
    {
      id: "3",
      icon: "images/currency.png",
      title: "currency converter",
      desc:
        "Currency converter using HTML,CSS,JAVSCRIPT",
      img:
        "images/currency.png",
        code:"https://currency-conve.netlify.app/"
    },
    {
      id: "4",
      icon: "images/todos.jpg",
      title: "TODO APP",
      desc:
        "TODO APP using React JS,CSS",
      img:
      "images/todos.jpg",
        code:"https://clever-treacle-9c21f8.netlify.app/"
    },

    {
      id: "5",
      icon: "images/user.jpg",
      title: "User Management System",
      desc:
        "Taking data from external API and arranging them in table",
      img:
      "images/user.jpg",
        code:"https://codesandbox.io/s/kg2b7g?file=/src/Pagination/page.js"
    },

  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    
    <div className="works" id="works">
      <h1 className="Head">Projects</h1>
      
     
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
             <a href={d.code} target='blank'>GO-LIVE</a>  
                </div>
              </div>
              <div className="right">
                <img
                  src={d.img}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="images/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="images/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}