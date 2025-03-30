import React, { useEffect, useRef } from "react";
import pdf from "../pdf/resume.pdf";
import hero from "./Data/hero.json";
import Typed from "typed.js";

const Home = () => {
  const typeRef =useRef(null)
  useEffect(() => {
    const options ={
      strings:["Welcome to my Profile","My Name is Ayush Sharma"],
      typeSpeed:50,
      backSpeed:50,
      loop:true
    }

    const typed = new Typed(typeRef.current , options)
  
    return () => {
       typed.destroy();
    }
  }, [])
  return (
    <>
      <div className="container home">
        <div className="left">
          <h1 ref={typeRef}>
             
          </h1>
          <a
            href={pdf}
            download="resume.pdf"
            className="btn btn-outline-warning my-3"
          >
            Download Resume
          </a>
        </div>
        <div className="right">
          <div className="img">
            <img src={`/assets/${hero.imgSrc}`} alt="hero" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;