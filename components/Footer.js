export default function Footer () {
  return <>
    <div className="footer fl-between">
      <div className="copyright">
        Copyright © 2023. Next Movie. All rights reserved.
      </div>
      <div className="contact">
        <a href="mailto:chltjdnjs529@gmail.com">
          <i className="fa-regular fa-envelope fa-2xl" style={{color: "#d1d1d1"}}></i>
        </a>
        <a href="https://github.com/yunuchoiii/next-movie">
          <i className="fa-brands fa-github fa-2xl" style={{color: "#d1d1d1"}}></i>
        </a>
      </div>
    </div>
    <style jsx>
      {`
        a {
          margin: 10px;
        }
        .footer {
          width: 100%;
          height: 70px;
          background-color: #555555;
          padding: 0 20px;
          font-size: 1rem;
        }
        .copyright {
          color: #d1d1d1;
          font-weight: 300;
        }
      `}
    </style>
  </>
}