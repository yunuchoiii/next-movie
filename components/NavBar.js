import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();

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
          <a className={router.pathname === '/about' ? "purple" : null}>About</a>
        </Link>            
      </div>
      <style jsx>
        {`
          nav {
            width: 100vw;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 20px;
            box-shadow: 9px 10px 38px -5px rgba(0,0,0,0.1);
            position: fixed;
            top: 0;
            z-index: 99;
            background-color: white;
          }
          a {
            text-decoration: none;
            font-size: 2rem;
            font-weight: 700;
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
            font-weight: 500;
            letter-spacing: -0.12rem;
          }
          .navbox {
            color: #3a3a3a
          }
          .navbox a{
            margin: 15px
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
              margin: 8px
            }
          }
        `}
      </style>
    </nav>
  )
}