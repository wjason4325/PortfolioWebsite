import React from 'react'
import styles from '../style';
import {linkedin} from '../assets';

const Footer = () => (
    <section className = {`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className = {`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div>
        <h1 className="flex-1 font-poppins font-semibold ss:text-[42px] text-[30px] text-white ss:leading-[100.8px] leading-[75px]">
            <span className="text-gradient">Contact Information</span>{" "}
          </h1>
          <ul className ="list-none sm:flex hidden justify-center items-center flex-1">
            <li>
              <a
                href="mailto:jason.wu1@ucalgary.ca"
              >
                <h1 className="flex-1 font-poppins font-semibold ss:text-[24px] text-[24px] text-white ss:leading-[100.8px] leading-[75px] mr-10">
                <span className="text-white">Email: jason.wu1@ucalgary.ca</span>{" "}
              </h1>   
              </a> 
            </li>
            <li>
                <h1 className="flex-1 font-poppins font-semibold ss:text-[24px] text-[24px] text-white ss:leading-[100.8px] leading-[75px] mr-10">
                <span className="text-white">Phone Number: 403-554-1892</span>{" "}
              </h1>    
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/jason-wu-125a77262/"
              >
                <img src={linkedin} alt="linkedin" className="px-4 py-4"/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )


export default Footer