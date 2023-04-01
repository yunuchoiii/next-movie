import HeadTitle from "@/components/HeadTitle";
import Loader from "@/components/Loader";
import { useEffect, useState } from "react";

export default function Detail ({params}) {
  const [title, id] = params || [];
  const [info, setInfo] = useState({});
  const defaultImage = 'https://cdn-icons-png.flaticon.com/512/8058/8058802.png'

  useEffect(() => {
    (async () => {
      const response = await (await fetch(
        `http://localhost:3000/api/movies/id=${id}`
      )).json();
      setInfo(response);
      console.log(response)
    })();
  }, [])
  return <div>
    <HeadTitle title={title}></HeadTitle>
    {!info.title ? 
    <div className="loading fl-center">
      <Loader/>
    </div> 
    :<div className="body">
      <div className="posterbox">
        <img 
          src={`https://image.tmdb.org/t/p/w500/${info.poster_path}`} 
          alt="poster"
          className="poster box-shadow" 
          onError={(e)=>{
            e.target.onerror = null;
            e.target.src = defaultImage;
            e.target.classList.add("default-image");
          }}></img>        
      </div>
      <div className="contentsbox">
        <div className="titlebox">
          <span className="purple title">
            {info.original_title}
          </span>
          {info.title != info.original_title ? 
            <span className="co-title"><br/> ({info.title})</span> : null}          
        </div>
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
          <div class>
            <b>Rate</b>
            <span className="purple fw-700 ml-10">
              {info.vote_average ? info.vote_average.toFixed(1):null}
            </span>
          </div>
          {!info.production_countries.length == 0 ? 
            <div>
              <b>Country</b>
              <span className="purple fw-700 ml-10">
                {info.production_countries.map((country, index) => {
                  return <span key={country.id}>
                    {country.name}<br></br>
                  </span>
                })}
              </span>
            </div>
          : null}
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
            <img src="https://cdn-icons-png.flaticon.com/512/4556/4556814.png" alt="homepage" className="filter-invert mr-15"/>
          </a> : null}
          {info.imdb_id != "" ? 
          <a href={`https://www.imdb.com/title/${info.imdb_id}/`} target="_blank">
            <img alt="imdb" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"/>
          </a> : null}
        </div>
      </div>
    </div>}

    <style jsx>
      {`
        .body {
          display: flex;
          color: #f3f3f3;
        }
        .contents {
          padding-top: 60px !important;
          margin-top: 75px !important;
        }
        hr {
          margin-top: 15px;
          margin-bottom: 18px;
          background: #45525b;
          height:1px;
          width: 100%;
          border:0;
        }
        ul {
          flex-direction: column;
          align-items: baseline;
        }
        .posterbox {
          width: 30%;
          min-width: 350px;
        }
        .poster {
          width: 100%;
          border-radius: 10px;
        }
        .default-image {
          height: 400px;
          background-color: #131f27;
        }
        .title {
          font-size: 2.5rem;
          font-weight: 700;
        }
        .co-title {
          color: #808080;
          font-size: 1.2rem;
        }
        .tagline {
          font-size: 1.5rem;
          margin-top: 5px;
          color: #808080;
        }
        .contentsbox {
          width: 70%;
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
          display: flex;
          flex-direction: row;
          align-items: baseline;
          margin: 5px 0px;
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
          border: 1px solid #b486ff;
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
        .filter-invert {
          filter: invert(0.9);
        }
        .loading {
          height: 500px;
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
          nav {
            flex-direction: row;
          }
          .NMlogo {
            width: auto !important;
          }
          .posterbox {
            width:80%;
            min-width: auto;
          }
          .poster {
            width: 100%;
            height: auto;
            margin-bottom: 0px;
          }
          .titlebox {
            text-align: center;
          }
          .title {
            font-size: 1.8rem;
            text-align: center;
          }
          .co-title {
            font-size: 1rem;
          }
          .tagline {
            font-size: 1.2rem;
            text-align: center;
          }
          .contentsbox {
            width: 100%;
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
          .icons {
            display: flex;
            justify-content: center;
            margin-top: 20px;
          }
        }
      `}
    </style>
  </div>;
}
