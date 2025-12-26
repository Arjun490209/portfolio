import React from "react";
import "./About.css";
import Card from "../Card/Cart";
import mern from "../../assets/mern.png";
import java from "../../assets/java.png";
import next from "../../assets/next.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
 
  useGSAP(() => {

  gsap.from(".circle", {
    x: -60,
    opacity: 0,
    stagger: 0.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".circle",
      start: "top 70%",
      end: "top 40%",
      scrub: 0.8,
    },
  });

  gsap.from(".line", {
    scaleY: 0,
    opacity: 0,
    transformOrigin: "top",
    stagger: 0.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".line",
      start: "top 70%",
      end: "top 40%",
      scrub: 0.8,
    },
  });

  gsap.from(".about-details h1", {
    x: -50,
    opacity: 0,
    stagger: 0.25,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".about-details",
      start: "top 75%",
      end: "top 40%",
      scrub: 0.8,
    },
  });

  gsap.from(".about-details li", {
    y: 50,
    opacity: 0,
    stagger: 0.15,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".about-details",
      start: "top 70%",
      end: "top 40%",
      scrub: 0.8
    },
  });

  gsap.from(".rightAbout > *", {
    x: 100,
    opacity: 0,
    stagger: 0.25,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".rightAbout",
      start: "top 75%",
      end: "top 45%",
      scrub: 0.8,
    },
  });
  gsap.from(".right-contact form > *", {
  y: 30,
  opacity: 0,
  stagger: 0.15,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".right-contact",
    start: "top 80%",
    end: "top 40%",
    scrub: 1,
  },
});


});


  return (
    <div id="about">
      <div className="leftAbout">
        <div className="circle-line">
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
        </div>
        <div className="about-details">
          <div className="person-info">
            <h1>Person Info</h1>
            <ul>
              <li>
                <span>NAME</span> : ARJUN PRAJAPATI
              </li>
              <li>
                <span>AGE</span> : 21 YEARS
              </li>
              <li>
                <span>GENDER</span> : MALE
              </li>
              <li>
                <span>LANGUAGE KNOWN</span> : HINDI, ENGLISH
              </li>
            </ul>
          </div>
          <div className="education">
            <h1>Education</h1>
            <ul>
              <li>
                <span>DEGREE</span> : COMPUTER
              </li>
              <li>
                <span>BRANCH</span> : COMPUTER SCIENCE
              </li>
              <li>
                <span>CGPA</span> : 8.2
              </li>
            </ul>
          </div>
          <div className="skill">
            <h1>Skills</h1>
            <ul>
              <li>MERN STACK DEVELOPER</li>
              <li>BASIC JAVA</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="rightAbout">
        <Card title={"MERN STACK DEVELOPER"} image={mern} />
        <Card title={"NEXT JS BASIC"} image={next} />
        <Card title={"JAVA BASIC"} image={java} />
      </div>
    </div>
  );
};
export default About;
