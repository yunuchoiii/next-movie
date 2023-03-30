import HeadTitle from "@/components/HeadTitle";

export default function About () {
  return <div className="body fl-center fl-col">
    <HeadTitle title="About"></HeadTitle>
    <div className="logos">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png" className="img_react"></img>
      <img src="https://cdn-icons-png.flaticon.com/512/748/748113.png" className="img_plus"></img>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/800px-Nextjs-logo.svg.png" className="img_nextjs"></img>      
    </div>
    <div className="textbox">
      <div className="NMlogo">
        {/* <img src="https://cdn-icons-png.flaticon.com/512/8058/8058802.png" className="mr-10"></img>   */}
        <span className="purple alfa"> NEXT MOVIE</span>  
      </div>
      <div className="about">
        <span>
          <b>노마드코더</b>님의 <b>Next.js</b> 강의를 토대로 만든<br/> <b>React</b> + <b>Next.js</b> 실습 프로젝트 입니다.
        </span>
      </div>
      <ul>
        <li>Lecture: <a href="https://nomadcoders.co/" target="_blank">NomadCoders.co</a></li>
        <li>API: <a href="https://www.themoviedb.org/documentation/api" target="_blank">The Movie Database</a></li>
        <li>Icons: <a href="https://www.flaticon.com/" target="_blank">flaticon</a></li>
        <li>Github: <a href="https://github.com/yunuchoiii/next-movie" target="_blank">yunuchoiii/next-movie</a></li>
      </ul>    
    </div>
    <style jsx global>
      {`
        .contents {
          height: calc(100% - 70px);
          padding-top: 75px !important;
          margin-top: 0 !important;
        }
        .body {
          height: 100%;
        }
        ul > li > a{
          color: #6c4bdf;
        }
        ul {
          width: max-content;
        }
        li {
          list-style-type: none;
        }
        .logos {
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          margin-bottom: 30px;
        }
        .img_react {
          width: 130px;
          margin-right: 50px;
        }
        .img_nextjs {
          width: 250px;
          margin-left: 50px;
        }
        .img_plus {
          width: 50px;
          height: 50px;
        }
        .title {
          font-size: 2.3rem;
        }
        .textbox {
          font-size: 1.3rem;
          line-height: 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .about{
          margin: 30px;
          text-align: center;
          font-size: 1.5rem;
          line-height: 2.5rem;
        }
        .NMlogo {
          font-size: 2.5rem;
          display: flex;
          align-items: center;
        }
        .NMlogo img {
          width: 60px;
        }
        @media (max-width: 800px) {
          .logos {
            margin-top: 30px;
          }
          .img_react {
            width: 80px;
            margin-right: 30px;
          }
          .img_nextjs {
            width: 150px;
            margin-left: 30px;
          }
          .img_plus {
            width: 20px;
            height: 20px;
          }
          .title {
            font-size: 1.8rem;
          }
          .about {
            font-size: 1.1rem;
            line-height: 2rem;
            white-space: nowrap;
          }
          .textbox {
            font-size: 1rem;
            line-height: 1.8rem;
          }
          .NMlogo {
            font-size: 2rem;
          }
          .NMlogo img {
            width: 40px;
          }
        }
      `}
    </style>
  </div>;
}