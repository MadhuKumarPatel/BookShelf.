import { useEffect,useState } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { FaBook } from "react-icons/fa";

const Header = () => {

    const [scrolled,setScrolled]=useState(false)

    const handleScroll = () =>{
        const offset = window.scrollY;
        if(offset > 100){
          setScrolled(true)
        }   
        else{
         setScrolled(false)
        }
   };

    useEffect(()=>{
       window.addEventListener("scroll",handleScroll);
       return () => window.removeEventListener("scroll", handleScroll);
   } , [])


    return (
        <>
        <header className={`main-header ${scrolled ? 'sticky-header' : '' }`}>
        <div className="header-content">
            <ul className="content">
                <li className="name"><Link className="links" to="/">BookShelf.</Link></li>
                <li><Link className="links" to="/bookshelf"><FaBook /></Link></li>
            </ul>
        </div>
    </header>
 
    </>
    )
};

export default Header;
