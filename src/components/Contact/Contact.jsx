import React, { useRef } from "react";
import "./Contact.css";
import contact from "../../assets/contact.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const contactRef = useRef(null);

  useGSAP(
    (self) => {
      gsap.fromTo(
        self.selector(".left-contact img"),
        { opacity: 0, x: -80 },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: self.selector(".left-contact"),
            start: "top 85%",
            scrub: 1,
          },
        }
      );

      gsap.fromTo(
        self.selector(".right-contact form"),
        { opacity: 0, x: 80 },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: self.selector(".right-contact"),
            start: "top 85%",
            scrub: 1,
          },
        }
      );

      ScrollTrigger.refresh();
    },
    { scope: contactRef }
  );

  return (
    <section id="contact" ref={contactRef}>
      <div className="left-contact">
        <img src={contact} alt="contact" />
      </div>

      <div className="right-contact">
        <form action="https://formspree.io/f/mvzpeydd" method="POST">
          <input type="text" name="username" placeholder="Your Name" />
          <input type="email" name="email" placeholder="Your Email" />
          <textarea name="message" placeholder="Message..." />
          <input type="submit" value="Send" />
        </form>
      </div>
    </section>
  );
};

export default Contact;
