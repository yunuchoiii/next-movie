import HeadTitle from "@/components/HeadTitle";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Detail ({params}) {
  const [title, id] = params || [];
  const [info, setInfo] = useState({});
  useEffect(() => {
    (async () => {
      const response = await (await fetch(
        `http://localhost:3000/api/movies/${id}`
      )).json();
      setInfo(response)
    })();
  }, [])
  return <div>
    <HeadTitle title={title}></HeadTitle>
    <img src={`https://image.tmdb.org/t/p/w500/${info.poster_path}`} className="poster box-shadow"></img>
    <div className="contents">
      <span className="purple title">{title}</span>
      <p className="overview">{info.overview}</p>
    </div>

    <style jsx>
      {`
        * {
          display: flex;
        }
        .poster {
          height: 70vh;
          border-radius: 10px;
          margin-top: 10px;
          margin-bottom: 20px;
        }
        .title {
          font-size: 2.5rem;
          font-weight: 700;
        }
        .contents {
          flex-direction: column;
          padding: 30px;
          padding-left: 50px;
          height: 100%;
          font-size: 1.2rem;
        }
        .overview {
          margin-top: 10px;
          line-height: 1.8rem;
        }
        @media (max-width: 800px) {
          *{
            flex-direction: column;
            align-items: center;
          }
          .poster {
            width: 70%;
            height: auto;
            margin-bottom: 0px;
          }
          .title {
            font-size: 1.8rem
          }
          .contents {
            font-size: 1rem;
            padding-left: 30px;
          }
          .overview {
            line-height: 1.5rem;
          }
        }
      `}
    </style>
  </div>;
}

export function  getServerSideProps ({params:{params}}){
  console.log(params);
  return {
    props: {params}
  }
}
