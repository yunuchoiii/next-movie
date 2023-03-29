import HeadTitle from "@/components/HeadTitle";
import { useEffect, useState } from "react";

export default function Detail ({params}) {
  const [title, id] = params || [];
  const [info, setInfo] = useState({});
  useEffect(() => {
    (async () => {
      const response = await (await fetch(
        `http://localhost:3000/api/movies/id=${id}`
      )).json();
      setInfo(response);
    })();
  }, [])
  return <div>
    <HeadTitle title={title}></HeadTitle>
    {info === {} ? <h1>Loading</h1> :<div>
      <img src={`https://image.tmdb.org/t/p/w500/${info.poster_path}`} className="poster box-shadow"></img>
      <div className="contents">
        <p className="purple title">{info.original_title}</p>
        <p className="tagline">{info.tagline}</p>
        <hr></hr>
        <p className="overview">{info.overview}</p>
        <div className="tags">
          {info.genres ? info.genres.map((genre) => 
            <div className="tag" key={genre.id}>{genre.name}</div>
          ) : null }
        </div>
        <hr></hr>
        <div className="details">
          <div>
            <b>Rate</b>
            <span className="purple fw-700 ml-10">
              {info.vote_average ? info.vote_average.toFixed(1):null}
            </span>
          </div>
          <div>
            <b>Country</b>
            <span className="purple fw-700 ml-10">
              {info.production_countries ? info.production_countries[0].name : null}
            </span>
          </div>
          <div>
            <b>Release</b>
            <span className="purple fw-700 ml-10">
              {info.release_date}
            </span>
          </div>
          <div>
            <b>Runtime</b> 
            <span className="purple fw-700 ml-10">
              {Math.floor(info.runtime/60)}h {info.runtime%60}m
            </span>
          </div>        
          <div>
            <b>Production</b>
            {info.production_companies ?
            <ul className="purple fw-700 ml-10">
              {info.production_companies.map((company) => <li key={company.id}>{company.name}</li>)}
            </ul>
            : <li></li>} 
          </div>
        </div>
        <hr></hr>
        <div className="icons">
          {info.homepage != "" ? 
          <a href={info.homepage} target="_blank">
            <img src="https://cdn-icons-png.flaticon.com/512/7781/7781669.png" className="filter-dark mr-15"/>
          </a> : null}
          {info.imdb_id != "" ? 
          <a href={`https://www.imdb.com/title/${info.imdb_id}/`} target="_blank">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"/>
          </a> : null}
        </div>
      </div>
    </div>}

    <style jsx>
      {`
        * {
          display: flex;
        }
        hr {
          margin-top: 15px;
          margin-bottom: 18px;
          background: #d6d6d6;
          height:1px;
          width: 100%;
          border:0;
        }
        ul {
          flex-direction: column;
          align-items: baseline;
        }
        .poster {
          height: 75vh;
          border-radius: 10px;
        }
        .title {
          font-size: 2.5rem;
          font-weight: 700;
        }
        .tagline {
          font-size: 1.5rem;
          margin-top: 5px;
          color: #808080;
        }
        .contents {
          flex-direction: column;
          padding-left: 50px;
          height: 100%;
          font-size: 1.2rem;
        }
        .overview {
          line-height: 1.8rem;
        }
        .details {
          width: 100%;
          align-items: flex-start;
          flex-direction: column;
          line-height: 2rem;
        }
        .details div{
          flex-direction: row;
          align-items: baseline;
          margin: 2px 0px;
        }
        .details b{
          width: 100px;
          align-items: flex-start;
        }
        .tags {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          margin-top: 10px;
        }
        .tag {
          padding: 5px 10px;
          border: 1px solid #6c4bdf;
          border-radius: 20px;
          margin-right: 10px;
          margin-bottom: 10px;
        }
        .icons {
          margin-top: 8px;
          flex-direction: row;
        }
        .icons img {
          height: 30px;
        }
        .filter-dark {
          filter: brightness(0.8);
        }
        @media (max-width: 800px) {
          *{
            flex-direction: column;
            align-items: center;
          }
          hr {
            margin-top: 10px;
            margin-bottom: 13px;
          }
          .poster {
            width: 80%;
            height: auto;
            margin-bottom: 0px;
          }
          .title {
            font-size: 1.8rem;
            text-align: center;
          }
          .tagline {
            font-size: 1.2rem;
            text-align: center;
          }
          .contents {
            font-size: 1rem;
            padding: 5%;
          }
          .overview {
            line-height: 1.5rem;
            word-break: break-all;
          }
          .tags {
            justify-content: center;
          }
          .details {
            text-align: left;
          }
          .details b{
            width: 90px;
          }
        }
      `}
    </style>
  </div>;
}

export function  getServerSideProps ({params:{params}}){
  return {
    props: {params}
  }
}
