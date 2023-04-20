import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close, logo_brian } from "../assets";
import { data } from "autoprefixer";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>

      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">

       {/* image - logo */}
        <Link to="/" className="flex items-center gap-2" onClick={() => {setActive(""); window.screenTop(0, 0);}}>
          <img src={logo_brian} alt="logo_brian" className="w-12 h-12 object-contain"/>
          <p className="text-white text-[18px] font-bold cursor-pointer flex">Brian Olaya &nbsp; <span className="sm:block hidden"> | Developer</span></p>
        </Link>

        {/* menu large device */}        
        <ul className="list-none hidden sm:flex flex-row gap-10">
          <li className={`${active===navLinks[0].title?"text-white":"text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}key={navLinks[0].id}   onClick={()=> setActive(navLinks[0].title)}>
          <a href={`#${navLinks[0].id}`}>{navLinks[0].title}</a>  
          </li>
          <li className={`${active===navLinks[1].title?"text-white":"text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}key={navLinks[1].id} onClick={()=> setActive(navLinks[1].title)}>
          <a href={`#${navLinks[1].id}`}>{navLinks[1].title}</a>  
          </li>
          <li className={`${active===navLinks[2].title?"text-white":"text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}key={navLinks[2].id} onClick={()=> setActive(navLinks[2].title)}>
          <a href={`#${navLinks[2].id}`}>{navLinks[2].title}</a>  
          </li>
        </ul>

        {/* icon menu small device */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img src={toggle ? close : menu} alt="menu" 
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={()=> setToggle(!toggle)}/>
        </div>

        {/* menu small device */}
        <div className={`${! toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 m in-w-[140px] z-10 rounded-xl`}>
        <ul className="list-none flex justify-end items-start flex-col gap-4">
          <li className={`${active===navLinks[0].title?"text-white":"text-secondary"} font-poppins font-medium cursor-pointer text-[16px]`}key={navLinks[0].id} onClick={()=>{ setActive(navLinks[0].title); setToggle(!toggle) }}>
           <a href={`#${navLinks[0].id}`}>{navLinks[0].title}</a>  
          </li>
          <li className={`${active===navLinks[1].title?"text-white":"text-secondary"} font-poppins font-medium cursor-pointer text-[16px]`}key={navLinks[1].id} onClick={()=>{ setActive(navLinks[1].title); setToggle(!toggle)}}>
           <a href={`#${navLinks[1].id}`}>{navLinks[1].title}</a>  
          </li>
          <li className={`${active===navLinks[2].title?"text-white":"text-secondary"} font-poppins font-medium cursor-pointer text-[16px]`}key={navLinks[2].id} onClick={()=>{ setActive(navLinks[2].title); setToggle(!toggle)}}>
           <a href={`#${navLinks[2].id}`}>{navLinks[2].title}</a>  
          </li>
        </ul>
        </div>

      </div>

    </nav>
  );
};

export default Navbar;
