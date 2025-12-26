import React, { useRef } from "react";
import "./Project.css";
import Cart from "../Card/Cart";
import lms from "../../assets/lms.png";
import shopping from "../../assets/shopping.png";
import money from "../../assets/money.png";
import auth from "../../assets/auth.png";
import typing from "../../assets/typing.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  const projectRef = useRef(null);

  useGSAP(
    (self) => {
      /* ---------- Heading ---------- */
      gsap.fromTo(
        self.selector("h1"),
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: self.selector("h1"),
            start: "top 70%",
            once: true, // 🔥 run only once
          },
        }
      );

      /* ---------- Cards ---------- */
      gsap.fromTo(
        self.selector(".slider > *"),
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.15,
          clearProps: "transform",
          scrollTrigger: {
            trigger: self.selector(".slider"),
            start: "top 65%",
            once: true, // 🔥 animation ek hi baar
          },
        }
      );
    },
    { scope: projectRef }
  );

  return (
    <section id="project" ref={projectRef}>
      <h1>My Experience in Projects</h1>

      <div className="slider">
        <Cart title="LMS" image={lms} />
        <Cart title="SHOPPING" image={shopping} />
        <Cart title="AUTHORIZATION" image={auth} />
        <Cart title="MONEY MANAGER" image={money} />
        <Cart title="TYPING MASTER" image={typing} />
      </div>
    </section>
  );
};

export default Project;
