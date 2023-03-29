import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import SearchBar from "./SearchBar";

export default function NavBar() {
  const router = useRouter();
  const now_path = router.asPath.split("/")[1];
  const [hiddenClass, setHiddenClass] = useState('dis-none')
  const [showClass, setShowClass] = useState('dis-block')

  return (
    <nav>
      <Link href="/" legacyBehavior>
        <a className="logo purple montserrat">
          <img src="https://cdn-icons-png.flaticon.com/512/8058/8058802.png"></img>  
          <span>Next Movie</span>
        </a>    
      </Link>
      <div className="navbox montserrat">
        <Link href="/" legacyBehavior>
          <a className={router.pathname === '/' ? "purple" : null}>Home</a>
        </Link>
        <Link href="/about" legacyBehavior>
          <a className={now_path === 'about' ? "purple" : null}>About</a>
        </Link>
        <Link href="/popular/1" legacyBehavior>
          <a className={now_path === 'popular' ? "purple" : null}>Popular</a>
        </Link>
        <Link href="/now_playing/1" legacyBehavior>
          <a className={now_path === 'now_playing' ? "purple" : null}>Now In Theaters</a>
        </Link>
        <Link href="/top_rated/1" legacyBehavior>
          <a className={now_path === 'top_rated' ? "purple" : null}>Top Rated</a>
        </Link>
      </div>
      <div className={`${hiddenClass} slide-in-right searchbar`}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/2961/2961937.png" 
          className={`erase-icon ${hiddenClass}`} 
          onClick={()=>{
            setHiddenClass('dis-none');
          }}/>
        <SearchBar width="250px"></SearchBar>
      </div>
      <button className={`search-btn`} onClick={()=>{
        setHiddenClass('dis-flex');
        setShowClass('dis-none');
      }}>
        <svg className="search__icon" aria-hidden="true" viewBox="0 0 24 24">
          <g>
            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
          </g>
        </svg>
      </button>
      <style jsx>
        {`
          nav {
            width: 100vw;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 20px 30px 20px 20px;
            box-shadow: 9px 10px 38px -5px rgba(0,0,0,0.1);
            position: fixed;
            top: 0;
            z-index: 99;
            background-color: white;
          }
          a {
            text-decoration: none;
            font-size: 1.2rem;
            transition: color 0.2s ease-in-out;
          }
          a:hover {
            color: #6c4bdf
          }
          img {
            height: 50px;
            margin-right: 5px;
          }
          .logo {
            font-size: 2rem;
            text-transform: uppercase;
            display: flex;
            align-items: center;
            font-weight: 700;
            letter-spacing: -0.12rem;
          }
          .navbox {
            color: #3a3a3a;
            text-transform: uppercase;
            letter-spacing: -0.05rem;
            transition: all 0.5s ease-in-out;
          }
          .navbox a{
            margin-left: 20px
          }
          .search__icon {
            height: 1.3em;
            width: 1.3em;
            fill: #6c4bdf;
            transition: all 0.5s ease-in-out;
          }
          .search-btn {
            margin-left: 214px;
          }
          .searchbar {
            position: fixed;
            right: 30px;
            align-items: center;
          }
          .erase-icon {
            width: 15px;
            height: 15px;
            margin-right: 10px;
          }
          @media (max-width: 800px) {
            nav {
              width: 100vw;
              height: 60px
            }
            a {
              font-size: 1.3rem;
            }
            img {
              height: 1.8rem;
            }
            .logo {
              font-size: 1.4rem
            }
            .navbox a{
              margin-left: 10px
            }
          }
        `}
      </style>
    </nav>
  )
}