import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Pagination from "./Pagnation";
import SearchBar from "./SearchBar";

export default function SearchResult () {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");
  const [totalPage, setTotalPage] = useState("");
  const [page, setPage] = useState("");
  const [results, setResults] = useState([]);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  
  async function pagination() {
    const res = await (await fetch(
      `http://localhost:3000/api/search/keyword=${keyword}/page=${page}`
    )).json();
    setResults(res.results);
    setTotalPage(res.total_pages);
  }

  useEffect(()=>{
    if (router.query.keyword) {
      setKeyword(router.query.keyword[0]);
      setPage(router.query.keyword[1]);
    }
    pagination();
    console.log(results.length)
  }, [router.query.keyword, keyword, page])
  
  return <div className="fl-center fl-col">
    <SearchBar keyword={keyword}></SearchBar>
    <div className="header">
      Search Results for <b className="purple">{keyword}</b>
    </div>
    {results.length != 0 ? results.map((movie)=>{
      return <Link
      href={`/movies/${movie.original_title}/${movie.id}`}
      key={movie.id} 
      legacyBehavior>
        <div className="movie box-shadow-2 fl-between">
          <div className="info">
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="poster"></img>
            <div className="fl-col">
              <div className="title">
                {movie.title}<br/>
                <span>{movie.original_title != movie.title ? movie.original_title : null}</span>
              </div>
              <div className="date">
                {movie.release_date ? movie.release_date.split('-')[0] : null}
              </div>
            </div>
          </div>
          <img src="https://cdn-icons-png.flaticon.com/512/2989/2989988.png" width="30px" className="arrow"></img>
        </div>
      </Link>
    }) : <div className="empty fl-center">No Search Results Found.</div>}

    {results.length != 0 ? <Pagination 
      sort={`search/${keyword}`} 
      page={page}
      totalPage={totalPage}/> : null}

    <style jsx global>
      {`
        .contents {
          min-height: calc(100% - 70px);
          padding-top: 110px !important;
          margin-top: 0 !important;
        }
        .fl-col {
          display: flex;
          justify-content: center;
        }
        .header {
          font-size: 2.2rem;
          margin: 20px 0 30px;
          text-align: center;
        }
        .movie {
          width: 50%;
          border-radius: 10px;
          padding: 10px;
          padding-right: 20px;
          margin-bottom: 15px;
          border: 2px solid transparent;
          transition: all 0.2s ease-out;
        }
        .movie:hover {
          border: 2px solid #c3a9ed;
          transform: scale(1.05)
        }
        .info {
          display: flex;
        }
        .poster {
          width: 70px;
          height: 105px;
          border-radius: 5px;
          margin-right: 10px;
        }
        .title {
          font-size: 1.2rem;
        }
        .title span {
          font-size: 0.9rem;
          color: #808080
        }
        .date {
          margin-top: 5px;
          font-size: 1rem;
        }
        .empty {
          height: 300px;
          font-size: 1.2rem;
        }
        @media (max-width: 800px) {
          .movie {
            width: 90%;
          }
          .arrow {
            display: none;
          }
          .title {
            font-size: 1rem;
          }
          .title span {
            font-size: 0.8rem;
            color: #808080
          }
          .date {
            margin-top: 5px;
            font-size: 0.9rem;
          }
        }
      `}
    </style>
  </div>
}
