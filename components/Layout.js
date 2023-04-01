import Footer from "./Footer";
import NavBar from "./NavBar";

export default function Layout ({children}) {
  return <>
    <NavBar></NavBar>
    <div className="contents">{children}</div>
    <Footer className="footer"></Footer>
    <style jsx>
      {`
        .contents {
          padding: 40px 50px 40px;
          margin-top: 80px;
          min-height: calc(100% - 70px);
        }
        @media (max-width: 800px) {
          .contents {
            padding: 0px 20px;
            margin-top: 60px;
            margin-bottom: 30px;
          }
        }
      `}
    </style>
  </>
}