import HeadTitle from "@/components/HeadTitle";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const currentPage = router.query.page == null ? 1 : parseInt(router.query.page[0]);
  const [movies, setMovies] = useState();
  const [firstPage, setFirstPage] = useState(1);
  const [pages, setPages] = useState([]);
  const onMovieClick = (id, title) => {
    router.push(`/movies/${title}/${id}`);
  }
  const onPageClick = (page) => {
    router.push(`/page/${page}`);
  }
  const getPagesArray = () => {
    const firstPage = parseInt((currentPage-1)/5)*5 + 1;
    let pagesArr = [];
    for (let i=0; i<5; i++) {
      pagesArr.push(firstPage + i);
    }
    setFirstPage(firstPage);
    setPages(pagesArr);
  }
  async function pagination() {
    const newResults = await (await fetch(
      `http://localhost:3000/api/movies/popular/page=${currentPage}`
    )).json();
    setMovies(newResults.results);
    getPagesArray();
  }
  useEffect(()=> {
    pagination();
  }, [currentPage])

  return (
    <div className="body">
      <HeadTitle title="Home"></HeadTitle>
      {movies?.map((movie)=>(
      <div className="movie" onClick={()=>onMovieClick(movie.id, movie.original_title)} key={movie.id}>
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="poster"></img>    
        <Link 
          href={`/movies/${movie.original_title}/${movie.id}`}
          key={movie.id} 
          legacyBehavior
        >
          <a className="title">
            <h4>
              {movie.original_title}
            </h4>
          </a>
        </Link>
      </div>
      ))}
      <div className="pagination">
        <ul className="montserrat">
          <li onClick={()=>{firstPage === 1 ? null : onPageClick(firstPage-5)}} className="pg-btn">prev</li>
          {pages.map((page)=>{
            return <li key={page} onClick={()=>{onPageClick(page)}}>
              <div className={currentPage == page ? "fl-center active" : "fl-center"}>
                {page}
              </div>
            </li>
          })}
          <li onClick={()=>{onPageClick(firstPage+5)}} className="pg-btn">next</li>
        </ul>
      </div>
      <style jsx>
        {`
          .body {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
          }
          .movie {
            width: 18%;
            margin-bottom: 30px;
            text-align: center;
            transition: transform 0.2s ease-in-out;
          }
          .movie:hover {
            transform: scale(1.1);
          }
          .poster {
            width: 100%;
            border-radius: 10px;
            box-shadow: 10px 10px 20px -2px rgba(0,0,0,0.1);
            margin-bottom: 10px;
          }
          .title {
            color: #313131;
          }
          .pagination {
            width: 100vw;
            margin: 10px;
            margin-top: 20px;
            display: flex;
            justify-content: center;
          }
          .pagination ul {
            display: flex;
            list-style-type: none;
            padding: 0;
            align-items: center;
          }
          .pagination li {
            margin-right: 20px;
            cursor: pointer;
            text-transform : uppercase;
          }
          .pagination li div{
            font-size: 1.2rem;
            border-radius: 30px;
            width: 3rem;
            height: 3rem;
            transition: background-color 0.3s ease-out, color 0.1s ease-out
          }
          .pagination li div:hover{
            background-color: #6c4bdf;
            color: white;
          }
          .active{
            color: #6c4bdf;
          }
          .pg-btn:hover {
            text-decoration: underline;
            text-decoration-color: #6c4bdf;
            text-decoration-thickness: 3px;
            text-underline-position : under;
          }
          @media (max-width: 800px) {
            .movie {
              width: 47%;
              margin-bottom: 30px
            }
            .movie:hover {
              transform: scale(1);
            }
            .movie:active {
              transform: scale(0.9);
            }
          }
        `}
      </style>
    </div>
  );
}

export async function getServerSideProps({param}) {
  console.log(param)
  const {results} = await (await fetch(
    `http://localhost:3000/api/movies/popular/page=1`
  )).json();
  return {
    props: {
      results,
    }
  }
}