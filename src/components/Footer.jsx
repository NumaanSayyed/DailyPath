import React from 'react';
import routine from '../images/fitness_routine.png'
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <>
      <footer className="relative pt-8 pb-6">

        {/* footer upper section  */}
          <div className="container px-5 py-24 mx-auto flex justify-center items-center md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
            <div className="w-96 flex-shrink-0 ml-[65px] justify-center items-center md:mx-0 mx-auto text-center md:text-left">
              <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                <span className="ml-28 text-3xl font-bold">
                    DailyPath
                </span>
              </a>
              <p className="mt-2 ml-28 text-lg leading-8 text-gray-1000">Find us on any of these platforms, we respond 1-2 business days.
              <div className="mt-6 lg:mb-0 mb-6">
                <button className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                  <i className="fab fa-twitter" />
                </button>
                <button className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                  <i className="fab fa-facebook-square" />
                </button>
                <button className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                  <i className="fab fa-dribbble" />
                </button>
                <button className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                  <i className="fab fa-github" />
                </button>
              </div>
              </p>
              </div>


             {/* UseFull links seciton   */}
            <div className="flex-grow flex justify-center items-center flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-[500] font-yeseva text-xl  mb-3">Useful links</h2>
                <nav className="list-none mb-10 leading-10 text-gray-1000 text-base font-[400] font-OpenSans">
                  <li><NavLink to="/" className="">Home</NavLink></li>
                  <li><NavLink to="milestones" className="">Milestones</NavLink></li>
                  <li><NavLink to="milestones" className="">Contact us</NavLink></li>
                  
                </nav>
              </div>

              {/* other resources section */}
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-[500] text-xl   mb-3">Other Resources </h2>
                <nav className="list-none mb-10 text-gray-1000 leading-10 text-base font-[400] ">
                <li><NavLink to="/" className="">MIT License</NavLink></li>
                <li><NavLink to="milestones" className="">Terms & conditions</NavLink></li>
                <li><NavLink to="milestones" className="">Privacy policy</NavLink></li>
                </nav>
              </div>
            </div>
          </div>

          {/* copywrite section  */}
          <div className="mx-auto border-t-[1px] border-solid flex justify-center items-center w-[70%]"></div>

          <div className= "p-6">
            <div className="container mx-auto text-gray-1000 py-4 px-5 flex justify-center items-center flex-wrap flex-col sm:flex-row">
              <p>Copyright  &copy; 2024 | All rights reserved</p>
            </div>
          </div>
          
      </footer>
    </>
  );
}

export default Footer;
