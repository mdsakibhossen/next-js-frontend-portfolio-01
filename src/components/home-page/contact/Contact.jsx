"use client";
import Button from "@/components/button/Button";
import ScrollingIndicator from "@/components/scrolling-indicator/ScrollingIndicator";
import SecContainer from "@/components/sec-container/SecContainer";
import SecHeader from "@/components/sec-header/SecHeader";
import { animateSecHeader } from "@/utils/gsap/common/animateSecHeader";
import { animateContactForm, animateContactHeading } from "@/utils/gsap/home-page/animateContact";
import { animateScrollIndicator } from "@/utils/gsap/home-page/animateScrollIndicator";
import { useGSAP } from "@gsap/react";
import { useState } from "react";
import { FiSend } from "react-icons/fi";

const Contact = () => {
  const [alertMsg,setAlertMsg] = useState({
    text: "",
    isSucceed: true
  });
  useGSAP(() => {
    animateScrollIndicator(".contact .top-inidicator");
    animateSecHeader(
      ".contact .sec-header .title, .contact .sec-header .sub-title"
    );
    animateContactHeading()
    animateContactForm()
  }, []);

  const submitHandler = (e)=>{
    e.preventDefault();
    const fullName = e.target[0].value;
    const email = e.target[1].value;
    const msg = e.target[2].value;
    // console.log(e.target[0].value);

    if (!fullName.trim() || !email.trim() || !msg.trim()) {
      setAlertMsg({
        text: "Please Enter All The Fields...",
        isSucceed: false
      })
      return false;
    }

    if (!email.includes("@") || !email.includes(".") || email.trim().length < 7 ) {
      setAlertMsg({
        text: "Please Enter Your Valid Emails...",
        isSucceed: false,
      });
      return false;
    }

    setAlertMsg({
        text: "Message Send Successfully!!!",
        isSucceed: true,
      });



  }
  return (
    <SecContainer classes="contact bg-black/90 py-20 min-h-screen">
      <div className="top-inidicator mb-10">
        <ScrollingIndicator />
      </div>
      <div className="header text-white/70">
        <SecHeader
          title={"Contact"}
          subTitle={"I am striving to never stop learning and improving"}
        />
      </div>
      <div className="content max-w-[800px] mx-auto">
        <h2 className="heading text-primary border-2 border-primary rounded-tl-[2rem] rounded-br-[2rem] text-xl md:text-2xl lg:text-3xl max-w-max px-8 py-2 mb-5 mx-auto md:mx-0">
          Send me a Message
        </h2>
        <div className="form-box mt-10">
          {alertMsg.text && <small className={`inline-block ${alertMsg.isSucceed ? "text-green-400" : "text-red-400"}`}>{alertMsg.text}</small>}
          <form action="" onSubmit={submitHandler}>
            <div className="flex flex-col gap-6 md:flex-row mb-6 md:mb-10">
              <div className="single-field w-full flex flex-col">
                <label className="text-primary overflow-hidden" htmlFor="name">
                  Your Name<sup>*</sup>
                </label>
                <input
                  className="outline-none text-primary border-b border-primary bg-transparent px-3 py-1"
                  type="text"
                  placeholder="Enter Your Name"
                />
              </div>
              <div className="single-field w-full flex flex-col">
                <label className="text-primary" htmlFor="email">
                  Your Email<sup>*</sup>
                </label>
                <input
                  className="outline-none text-primary border-b border-primary bg-transparent px-3 py-1"
                  type="text"
                  placeholder="Enter Your Email"
                />
              </div>
            </div>
            <div className="single-field flex flex-col">
              <label className="text-primary" htmlFor="message">
                Your Message<sup>*</sup>
              </label>
              <input
                className="outline-none text-primary border-b border-primary bg-transparent px-3 py-1"
                type="text"
                placeholder="Enter Your Needs"
              />
            </div>
            <div className="btn-box mt-8 text-center">
              <Button isBgFill={true} type="submit">
                <span className="flex gap-2 items-center">
                  <span>Send Message </span>
                  <span>
                    <FiSend />
                  </span>
                </span>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </SecContainer>
  );
};

export default Contact;
