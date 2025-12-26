import React from "react";
import "./Contact.css";
import contact from "../../assets/contact.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  useGSAP(() => {
    gsap.from(".left-contact img", {
      x: -80,
      opacity: 0,
      scale: 0.95,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".left-contact",
        start: "top 85%",
        end: "top 45%",
        scrub: 1,
      },
    });
    gsap.from(".right-contact form", {
      x: 80,
      opacity: 0,
      scale: 0.95,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".right-contact",
        start: "top 85%",
        end: "top 45%",
        scrub: 1,
      },
    });
  });
  return (
    <div id="contact">
      <div className="left-contact">
        <img src={contact} alt="" />
      </div>
      <div className="right-contact">
        <form action="https://formspree.io/f/mvzpeydd" method="POST">
          <input type="text" name="username" placeholder="Enter your name " />
          <input type="email" name="Email" placeholder="Enter your email " />
          <textarea
            name="message"
            id="textarea"
            placeholder="Message me..."
          ></textarea>
          <input type="submit" value="Send.." id="btn" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
