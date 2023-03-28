import Footer from "./Footer";
import NavBar from "./NavBar";

export default function Layout ({children}) {
  return <>
    <NavBar></NavBar>
    <div className="contents">{children}</div>
    <Footer></Footer>
    <style jsx>
      {`
        .contents {
          padding: 50px;
          margin-top: 90px;
        }
        @media (max-width: 800px) {
          .contents {
            padding: 20px;
            margin-top: 70px;
          }
        }
      `}
    </style>
  </>
}