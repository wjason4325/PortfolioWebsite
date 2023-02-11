import React from 'react'
import styles from '../style';

const Experience = () => {
  return (
      <section id="experience" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
            <div className="py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
            <h1 className="flex-1 font-poppins font-semibold ss:text-[60px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
              <span className="text-white">Work Experience</span>{" "}
            </h1>
            <p className={`${styles.paragraph} max-w-[600px] mt-7`}>
              Currently entering my internship year of studies and looking for opportunities for practical experience. 
          </p> 
          </div>

      </section>
    )
}


export default Experience