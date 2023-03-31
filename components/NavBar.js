import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import SearchBar from "./SearchBar";

export default function NavBar() {
  const router = useRouter();
  const now_path = router.asPath.split("/")[1];
  const [hiddenClass, setHiddenClass] = useState('dis-none');
  const [slideMobile, setSlideMobile] = useState('dis-none');

  function navBtnHandler () {
    if (slideMobile === 'dis-none') {
      setSlideMobile('dis-flex slide-in-bottom');
    } else if (slideMobile === 'dis-flex slide-in-bottom') {
      setSlideMobile('slide-out-bottom');
    } else if (slideMobile === 'slide-out-bottom') {
      setSlideMobile('dis-flex slide-in-bottom');
    }
  }

  useEffect(()=>{
    setHiddenClass('dis-none');
    setSlideMobile('dis-none');
  }, [router])
  
  return (
    <>
      <nav>
        <Link href="/" legacyBehavior>
          <a className="NMlogo purple alfa">
            {/* <img src="https://cdn-icons-png.flaticon.com/512/8058/8058802.png"></img>   */}
            <span>Next Movie</span>
          </a>
        </Link>
        <div className="navbox-pc montserrat">
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
        <div className={`${hiddenClass} searchbar`}>
          <svg src="https://cdn-icons-png.flaticon.com/512/2961/2961937.png" 
            className={`erase-icon ${hiddenClass}`} 
            onClick={()=>{
              setHiddenClass('dis-flex slide-out-right');
            }}
            clipRule="evenodd"
            fillRule="evenodd"
            fill="#f3f3f3"
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg">
              <path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"/>
          </svg>
          <SearchBar width="250px"></SearchBar>
        </div>
        <button className='search-btn' onClick={()=>{
          setHiddenClass('dis-flex slide-in-right');
        }}>
          <svg className="search__icon" aria-hidden="true" viewBox="0 0 24 24">
            <g>
              <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
            </g>
          </svg>
        </button>
        <button className="nav-mo-btn" >
          <svg 
            onClick={()=>{
              navBtnHandler();
            }}
            fill="#f3f3f3" 
            viewBox="0 0 32 32" 
            version="1.1" 
            xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier"> 
              <path d="M0.844 6.050c-0.256-0.256-0.381-0.581-0.381-0.975s0.125-0.719 0.381-0.975 0.581-0.381 0.975-0.381h28.512c0.394 0 0.719 0.125 0.975 0.381s0.381 0.581 0.381 0.975-0.125 0.719-0.381 0.975-0.581 0.381-0.975 0.381h-28.512c-0.394 0-0.719-0.125-0.975-0.381zM31.306 14.963c0.256 0.256 0.381 0.581 0.381 0.975s-0.125 0.719-0.381 0.975-0.581 0.381-0.975 0.381h-28.512c-0.394 0-0.719-0.125-0.975-0.381s-0.381-0.581-0.381-0.975 0.125-0.719 0.381-0.975 0.581-0.381 0.975-0.381h28.512c0.394 0 0.719 0.125 0.975 0.381zM31.306 25.819c0.256 0.256 0.381 0.581 0.381 0.975s-0.125 0.719-0.381 0.975-0.581 0.381-0.975 0.381h-28.512c-0.394 0-0.719-0.125-0.975-0.381s-0.381-0.581-0.381-0.975 0.125-0.719 0.381-0.975 0.581-0.381 0.975-0.381h28.512c0.394 0 0.719 0.131 0.975 0.381z"></path> 
            </g>
          </svg>
        </button>
      </nav>

      {/* 모바일 네비게이션바 */}
      <div className="fl-center nav-mo">
        <div className={`navbox-mo montserrat fl-center fl-col box-shadow-2 ${slideMobile}`}>
          <SearchBar></SearchBar>
          <Link href="/" legacyBehavior>
            <a className={router.pathname === '/' ? "purple" : null}>Home</a>
          </Link>
          <Link href="/about" legacyBehavior>
            <a className={now_path === 'about' ? "purple" : null}>About</a>
          </Link>
          <hr/>
          <Link href="/popular/1" legacyBehavior>
            <a className={now_path === 'popular' ? "purple" : null}>Popular</a>
          </Link>
          <Link href="/now_playing/1" legacyBehavior>
            <a className={now_path === 'now_playing' ? "purple" : null}>Now In Theaters</a>
          </Link>
          <Link href="/top_rated/1" legacyBehavior>
            <a className={now_path === 'top_rated' ? "purple" : null}>Top Rated</a>
          </Link>
          <hr/>
          <div className="contact fl-between fl-row">
            <a href="mailto:chltjdnjs529@gmail.com">
              <i className="fa-regular fa-envelope fa-xl" style={{color: "#d1d1d1"}}></i>
            </a>
            <a href="https://github.com/yunuchoiii/next-movie">
              <i className="fa-brands fa-github fa-xl" style={{color: "#d1d1d1"}}></i>
            </a>
          </div>
          <svg src="https://cdn-icons-png.flaticon.com/512/2961/2961937.png" 
            className={'close-nav-icon'} 
            onClick={()=>{
              navBtnHandler();
            }}
            clipRule="evenodd"
            fillRule="evenodd"
            fill="#f3f3f3"
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg">
              <path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"/>
          </svg>
        </div>        
      </div>

      <style jsx>
        {`
          nav {
            width: 100vw;
            height: 75px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 20px 30px;
            position: fixed;
            top: 0;
            z-index: 100;
            background-color: #12191f;
          }
          a {
            text-decoration: none;
            font-size: 1.2rem;
            transition: color 0.2s ease-in-out;
          }
          a:hover {
            color: #7f58ff
          }
          img {
            height: 50px;
            margin-right: 5px;
          }
          .NMlogo {
            width: 250px;
            font-size: 1.6rem;
            text-transform: uppercase;
            display: flex;
            align-items: center;
            font-weight: 400;
            letter-spacing: -0.05rem;
          }
          .navbox-pc {
            color: #d8d8d8;
            text-transform: uppercase;
            letter-spacing: -0.05rem;
            transition: all 0.5s ease-in-out;
          }
          .navbox-pc a{
            margin-left: 20px
          }
          .navbox-mo {
            display: none;
          }
          .nav-mo-btn {
            display: none;
          }
          .search__icon {
            height: 1.3em;
            width: 1.3em;
            fill: #7f58ff;
            transition: all 0.5s ease-in-out;
          }
          .search-btn {
            width: 250px;
            display: flex;
            justify-content: flex-end;
          }
          .searchbar {
            position: fixed;
            right: 30px;
            align-items: center;
          }
          .erase-icon {
            width: 20px;
            height: 20px;
            margin-right: 20px;
            color: 808080;
          }
          @media (max-width: 1200px) {
            nav {
              width: 100vw;
              height: 60px;
            }
            a {
              font-size: 1.3rem;
            }
            img {
              height: 1.8rem;
            }
            .NMlogo {
              font-size: 1.2rem
            }
            .search-btn {
              display: none;
            }
            .navbox-pc {
              display: none;
            }
            .navbox-mo {
              display: flex;
              justify-content: space-between;
              width: 100%;
              height: calc(100% - 60px);
              position: fixed;
              bottom: 0;
              background-color: #141f27;
              z-index: 99;
              padding: 50px;
              border-top-left-radius: 30px;
              border-top-right-radius: 30px;
            }
            .navbox-mo > a {
              font-size: 1.2rem;
            }
            .nav-mo-btn {
              display: block;
              width: 20px;
            }
            .contact {
              width: 85px;
            }
            .close-nav-icon {
              width: 30px;
              height: 30px;
              color: #808080;
            }
            hr {
              width: 70%;
              background: #45525b;
              height:1px;
              border:0;
            }
          }
        `}
      </style>
    </>

  )
}