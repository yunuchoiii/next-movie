import Link from "next/link";
import { useEffect, useState } from "react";

export default function HomeBanner (props) {
  const [movies, setMovies] = useState([]);
  async function getDatas() {
    const arr = [];
    const response = await (await fetch(
      `/api/movies/${props.sort}/page=1`
    )).json();
    for(let i=0; i<=5; i++) {
      arr.push(response.results[i]);
    }
    setMovies(arr);
  }
  useEffect(()=>{
    getDatas();
  }, [])

  return <>
    <div className="banner">
      <div className="fl-between">
        <Link href={`/${props.sort}/1`} legacyBehavior>
          <a className="title fw-700 montserrat">{props.title}</a>
        </Link>
        <Link href={`/${props.sort}/1`} legacyBehavior>
          <button className="more-btn pc">
            <span>MORE</span>
          </button>
        </Link>
      </div>
      <div className="movie-list">
        {movies.map((movie, index) => {
          return <Link
          href={`/movies/${movie.original_title}/${movie.id}`}
          key={movie.id} 
          legacyBehavior>
            <a 
              className="movie box-shadow-2" 
              style={{backgroundImage:`url(https://image.tmdb.org/t/p/w500/${movie.poster_path})`}}
              onMouseEnter={()=>{
                const info = document.getElementById(movie.id);
                document.getElementById(`info_${props.sort}_${movie.id}`).style.visibility = 'visible';
              }}
              onMouseLeave={()=>{
                const info = document.getElementById(movie.id);
                document.getElementById(`info_${props.sort}_${movie.id}`).style.visibility = 'hidden';
              }}
            >
              <div className="index fl-center montserrat">{index+1}</div>
              <div id={`info_${props.sort}_${movie.id}`} className="info fl-center fl-col">
                <span>{movie.title}</span>
                <div className="fl-center mt-10">
                  <img src="https://cdn-icons-png.flaticon.com/512/956/956100.png" width="20px"></img>
                  <span className="rate">{movie.vote_average.toFixed(1)}</span>
                </div>
              </div>
            </a>          
          </Link>
        })}
      </div>
      <div className="fl-center mo">
        <Link href={`/${props.sort}/1`} legacyBehavior>
          <button className="more-btn">
            <span>MORE</span>
          </button>
        </Link>        
      </div>
    </div>
  <style jsx>
    {`
      .mo {
        display: none !important;
      }
      .pc {
        display: block !important;
      }
      .banner {
        width: 95%;
      }
      .title {
        font-size: 2.4rem;
        color: #d8d8d8;
        transition: color 0.2s ease-out;
        white-space: nowrap;
      }
      .title:hover {
        color: #b486ff
      }
      .fl-between {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
      }
      .movie-list {
        display: flex;
        justify-content: space-between;
        padding: 30px 0px 20px;
      }
      .movie {
        width: 15.5%;
        position: relative;
        padding-bottom: 23.25%;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      }
      .poster {
        width: 100%;
        height: 100%;
      }
      .info {
        width: 100%;
        height: 100%;
        padding: 10px;
        position: absolute;
        top:0;
        left:0;
        z-index: 1;
        background-color: rgba(0, 0, 0, 0.5);
        color: #f9f9f9;
        font-size: 1.1rem;
        text-align: center;
        visibility: hidden;
      }
      .rate {
        font-size: 1rem;
        margin-left: 5px;
      }
      .index {
        width: 30px;
        height: 30px;
        border-radius: 30px;
        background-color: #b486ff;
        color: #11191f;
        font-size: 1.2rem;
        position: absolute;
        left: -12px;
        top: -12px;
        z-index: 2;
      }
      .more-btn {
        display: inline-block;
        color: #b486ff;
        text-align: center;
        font-size: 1rem;
        transition: all 0.5s;
        cursor: pointer;
        margin: 5px;
      }
      .more-btn span {
        cursor: pointer;
        display: inline-block;
        position: relative;
        transition: 0.5s;
      }
      .more-btn span:after {
        content: '»';
        position: absolute;
        opacity: 0;
        top: 0;
        right: -15px;
        transition: 0.5s;
      }
      .more-btn:hover span {
        padding-right: 15px;
      }
      .more-btn:hover span:after {
        opacity: 1;
        right: 0;
      }
      @media (max-width: 800px) {
        .mo {
          display: flex !important;
        }
        .pc {
          display: none !important;
        }
        .banner {
          width: 90%;
        }
        .title {
          font-size: 1.8rem;
          letter-spacing: -0.08rem;
        }
        .movie-list {
          flex-wrap: wrap;
          padding: 40px 0px 0px;
        }
        .movie {
          width: 46%;
          padding-bottom: 69%;
          margin-bottom: 30px;
        }
        a {
          border-radius: 10px;
        }
        .info {
          border-radius: 10px;
        }
      }
    `}
  </style>
  </>
}