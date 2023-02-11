import React from 'react'
import styles from '../style';

const Projects = () => {
  return (
      <section id="projects" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
            <div className="py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
            <h1 className="flex-1 font-poppins font-semibold ss:text-[60px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
              <span className="text-white">Course Projects</span>{" "}
            </h1>
            <p className={`${styles.paragraph} max-w-[600px] mt-7`}>
            <span className="name-color ss:text-[24px] font-bold"><a style={{ color: '#66ccff' }}>
              Airline Company Website</a></span><br></br>
              December, 2022<br></br>
              This website was designed in a team of three using <span className="name-color"><a style={{ color: '#66ccff' }}>
              HTML, CSS, SQL, and PHP.</a></span> The idea behind the design and development of the website was to learn SQL Queries and apply them in real world scenarios by developing 
              a usable front-end website with PHP for the Queries. For this project, proper overhead was done with the design of <span className="name-color"><a style={{ color: '#66ccff' }}>
              Entity-Relationship Models and Relational Models</a></span> to understand the
              database to be implemented.
              <br/><br/>

              <span className="name-color ss:text-[24px] font-bold"><a style={{ color: '#66ccff' }}>
              Movie Theatre Website</a></span><br></br>
              December, 2022<br></br>
              This website was designed in a team of five using <span className="name-color"><a style={{ color: '#66ccff' }}>
              Java, React, and MySQL.</a></span> This website used Java for the backend and React for the frontend. Working SQL Queries were implemented that connected to a database created using MySQL.
              During development of this project, better software design patterns were implemented such as Singleton, Strategy, and Decorator patterns. Proper diagrams such as <span className="name-color"><a style={{ color: '#66ccff' }}>
              Use-case, Class-diagram, Sequence-diagrams, and State transition diagrams</a></span> were all designed for this website.
              <br/><br/>
          </p> 
          </div>
            <div className="py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
            <h1 className="flex-1 font-poppins font-semibold ss:text-[60px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
              <span className="text-white">Individual Projects</span>{" "}
            </h1>
            <p className={`${styles.paragraph} max-w-[600px] mt-7`}>
            <span className="name-color ss:text-[24px] font-bold"><a style={{ color: '#66ccff' }}>
              Portfolio Website</a></span><br></br>
              January, 2023<br></br>
              This website was designed using <span className="name-color"><a style={{ color: '#66ccff' }}>
              JavaScript, HTML, and CSS.</a></span> Developed using <span className="name-color"><a style={{ color: '#66ccff' }}>
              React and the Vite toolchain. Tailwind CSS</a></span> was used to write the styles. This website was developed to express more about me and will be updated with future projects and better designs as I learn more about web development!
              <br/><br/>
          </p> 
          </div>
      </section>
    )
}

export default Projects