import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  const now_path = router.asPath.split("/")[1];

  return (
    <nav>
      <Link href="/" legacyBehavior>
        <a className="logo purple montserrat">
          <img src="https://cdn-icons-png.flaticon.com/512/8058/8058802.png"></img>  
          <span>Next Movie</span>
        </a>    
      </Link>
      <div className="navbox">
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
            font-size: 1.4rem;
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
            color: #3a3a3a
          }
          .navbox a{
            margin-left: 20px
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