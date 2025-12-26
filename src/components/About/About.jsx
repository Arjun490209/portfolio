import React, { useRef } from "react";
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
  const aboutRef = useRef(null);

  useGSAP(
    (self) => {
      /* ---------- Circle ---------- */
      gsap.from(self.selector(".circle"), {
        x: -60,
        opacity: 0,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: self.selector(".circle-line"),
          start: "top 80%",
          end: "top 40%",
          scrub: 0.8,
        },
      });

      /* ---------- Line ---------- */
      gsap.from(self.selector(".line"), {
        scaleY: 0,
        opacity: 0,
        transformOrigin: "top",
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: self.selector(".circle-line"),
          start: "top 80%",
          end: "top 40%",
          scrub: 0.8,
        },
      });

      /* ---------- About Headings ---------- */
      gsap.from(self.selector(".about-details h1"), {
        x: -50,
        opacity: 0,
        stagger: 0.25,
        ease: "power3.out",
        scrollTrigger: {
          trigger: self.selector(".about-details"),
          start: "top 80%",
          end: "top 40%",
          scrub: 0.8,
        },
      });

      /* ---------- About List ---------- */
      gsap.from(self.selector(".about-details li"), {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: self.selector(".about-details"),
          start: "top 80%",
          end: "top 40%",
          scrub: 0.8,
        },
      });

      /* ---------- RIGHT CARDS (SCROLL BASED) ---------- */
      gsap.from(self.selector(".rightAbout > *"), {
        x: 100,
        opacity: 0,
        stagger: 0.2,
        ease: "power1.inOut",
        clearProps: "transform",
        scrollTrigger: {
          trigger: self.selector(".rightAbout"),
          start: "top 80%",
          end: "top 40%",
          scrub: 1.5, // 🔹 smoother scroll
        },
      });
    },
    { scope: aboutRef }
  );

  return (
    <section id="about" ref={aboutRef}>
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
        <Card title="MERN STACK DEVELOPER" image={mern} />
        <Card title="NEXT JS BASIC" image={next} />
        <Card title="JAVA BASIC" image={java} />
      </div>
    </section>
  );
};

export default About;
