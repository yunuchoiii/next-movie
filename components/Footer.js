export default function Footer () {
  return <>
    <div className="footer fl-between fl-row">
      <div className="copyright">
        Copyright © 2023. Next Movie.<br/>All rights reserved.
      </div>
      <div className="contact fl-center fl-row">
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
          background-color: #090e10;
          padding: 0 20px;
          font-size: 0.9rem;
          line-height: 1.5;
        }
        .copyright {
          color: #d1d1d1;
          font-weight: 300;
        }

        @media (max-width: 800px) {
          .footer {
            font-size: 0.8rem;
          }
        }
      `}
    </style>
  </>
}