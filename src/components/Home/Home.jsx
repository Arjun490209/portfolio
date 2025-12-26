import React from "react";
import "./Home.css";
import man from "../../assets/arjun.png";
import { Typewriter } from "react-simple-typewriter";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Home = () => {

   useGSAP(() => {
    let t1= gsap.timeline()
    t1.from(".line1",{
      y:80,
      duration:1,
      opacity:0
    })
    t1.from(".line2",{
      y:80,
      duration:1,
      opacity:0
    })
    t1.from(".line3",{
      y:80,
      duration:1,
      opacity:0
    })
    gsap.from(".rightHome img", {
       x:200,
      duration:1,
      opacity:0
    })
  });
  return (
    <div id="home">
      <div className="leftHome">
        <div className="homeDetails">
          <div className="line1">I'M</div>
          <div className="line2">ARJUN PRAJAPATI</div>
          <div className="line3">
            <Typewriter
              words={["WEB DEVELOPER", "EDITOR", "MERN STACK"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={200}
              deleteSpeed={60}
              delaySpeed={1500}
            />
          </div>
          <button>HIRE ME</button>
        </div>
      </div>

      <div className="rightHome">
        <img src={man} alt="Arjun" />
      </div>
    </div>
  );
};

export default Home;
