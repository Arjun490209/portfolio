import React from "react";
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
  useGSAP(() => {
    // 🔹 Project heading animation
    gsap.from("#project h1", {
      y: 80,
      opacity: 0,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#project h1",
        start: "top 85%",
        end: "top 50%",
        scrub: 1,
      },
    });

    // 🔹 Slider container entry
    gsap.from(".slider", {
      y: 50,
      opacity: 0,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".slider",
        start: "top 80%",
        end: "top 45%",
        scrub: 1,
      },
    });

    // 🔹 Cards stagger animation
    gsap.from(".slider > *", {
      y: 40,
      opacity: 0,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".slider",
        start: "top 75%",
        end: "top 40%",
        scrub: 1,
      },
    });

    // 🔹 Mouse wheel → horizontal scroll
    const slider = document.querySelector(".slider");
    if (slider) {
      slider.addEventListener(
        "wheel",
        (e) => {
          e.preventDefault();
          slider.scrollLeft += e.deltaY * 0.8; // smooth speed
        },
        { passive: false }
      );
    }
  });

  return (
    <div id="project">
      <h1>My Experienced in Project</h1>
      <div className="slider">
        <Cart title={"LMS"} image={lms} />
        <Cart title={"SHOPPING"} image={shopping} />
        <Cart title={"AUTHORIZATION"} image={auth} />
        <Cart title={"MONEY MANAGER"} image={money} />
        <Cart title={"TYPING MASTER"} image={typing} />
      </div>
    </div>
  );
};

export default Project;
