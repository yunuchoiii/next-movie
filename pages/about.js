import HeadTitle from "@/components/HeadTitle";

export default function About () {
  return <div>
    <HeadTitle title="About"></HeadTitle>
    <div className="logos">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png" className="img_react"></img>
      <img src="https://cdn-icons-png.flaticon.com/512/748/748113.png" width="50px" height="50px"></img>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/800px-Nextjs-logo.svg.png" className="img_nextjs"></img>      
    </div>
    <div className="contents">
      <h1>About Project</h1>
      <div className="about">
        <span className="purple fw-700">
          노마드코더님의 Next.js 강의
        </span>
        <span>
          를 들으면서 만든 React + Next.js 실습 프로젝트 입니다.
        </span>
      </div>
      <ul>
        <li>Lecture: <a href="https://nomadcoders.co/" target="_blank">NomadCoders.co</a></li>
        <li>API: <a href="https://www.themoviedb.org/documentation/api" target="_blank">The Movie Database</a></li>
      </ul>      
    </div>
    <style jsx>
      {`
        a{
          color: #6c4bdf
        }
        li {
          list-style-type: none;
        }
        .logos {
          width: 100vw;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          margin-bottom: 50px;
        }
        .img_react {
          width: 200px;
          margin-right: 50px;
        }
        .img_nextjs {
          width: 350px;
          margin-left: 50px;
        }
        .contents {
          text-align: center;
          font-size: 1.3rem;
          line-height: 2rem;
        }
        .about{
          margin: 30px;
          text-align: center;
          font-size: 1.5rem;
          line-height: 2.5rem;
        }
      `}
    </style>
  </div>;
}