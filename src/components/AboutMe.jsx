import React from 'react'
import styles from '../style';
import { chart } from '../assets';

const AboutMe = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            <span className="text-gradient">About Me</span>{" "}
          </h1>
        </div>
          <p className={`${styles.paragraph} max-w-[600px] mt-7`}>
            Undergraduate Software Engineer studying at the <span className="name-color"><a style={{ color: '#66ccff' }}>
            University of Calgary</a></span> looking for opportunities to learn and further my knowledge!
            I possess a <span className="name-color">strong work ethic</span> and is capable of <span className="name-color">effective collaboration.</span>
            <br/><br/>I am interested in: <span className="name-color">Web development,
            Cyber Security, Game Development, and Data Analysis. My future plans include looking for internship opportunities and working on more individual projects to learn more.</span>
            <br/><br/>From individual projects and studies I have gained a good understanding of the following topics: <span className="name-color"><a style={{ color: '#66ccff' }}>
            Operating Systems, Algorithms, Embedded Systems, Object Oriented Programming.</a></span> My work with teamworks so far has helped me in understanding <span className="name-color"><a style={{ color: '#66ccff' }}>
            Teamwork and Programming Strategies like Agile Development and Software Architecture</a></span><br></br> <br></br>Thanks for visiting my website! Feel free to check out my projects or get in touch
            via any of my contacts!
        </p>   
      </div>
          <div className="py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[60px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            <span className="text-white">Technical Skills</span>{" "}
          </h1>
          <img src={chart} alt="skills" className="w-[100%] h-[60%] relative z-[5]" />
        </div>
    </section>
  )
}

export default AboutMe