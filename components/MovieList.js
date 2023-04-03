import HeadTitle from "@/components/HeadTitle";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Loader from "./Loader";
import Pagination from "./Pagnation";

export default function MovieList(props) {
  const router = useRouter();
  const currentPage = router.query.page == null ? 1 : parseInt(router.query.page[0]);
  const [movies, setMovies] = useState();
  const [totalPage, setTotalPage] = useState();
  const onMovieClick = (id, title) => {
    router.push(`/movies/${title}/${id}`);
  }
  async function pagination() {
    const newResults = await (await fetch(
      `/api/movies/${props.sort}/page=${currentPage}`
    )).json();
    setMovies(newResults.results);
    setTotalPage(newResults.total_pages);
  }
  useEffect(()=> {
    pagination();
  }, [currentPage])

  return (
    <div className="body">
      <HeadTitle title={props.title}></HeadTitle>
      <div className="title montserrat fw-700">
        <span>{props.title}</span>
      </div>
      {movies ? movies?.map((movie)=>(
      <div className="movie" onClick={()=>onMovieClick(movie.id, movie.title)} key={movie.id}>
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="poster"></img>    
        <Link
          href={`/movies/${movie.original_title}/${movie.id}`}
          key={movie.id} 
          legacyBehavior
        >
          <a className="movie-title">
            {movie.original_title}
          </a>
        </Link>
      </div>
      )) :     
      <div className="loading fl-center">
        <Loader/>
      </div> }

      <Pagination 
        sort={props.sort} 
        page={currentPage}
        totalPage={totalPage}/>

      <style jsx>
        {`
          .body {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
          }
          .title {
            width: 100vw;
            padding-bottom: 50px;
            text-align: center;
            font-size: 2.3rem;
            color: #f3f3f3;
          }
          .movie {
            width: 18%;
            margin-bottom: 36px;
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
          .movie-title {
            color: #d8d8d8;
          }
          .loading {
            height: 500px;
            width: 100%;
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
            .title {
              font-size: 1.8rem;
              margin-top: 20px;
            }
          }
        `}
      </style>
    </div>
  );
}

// export async function getServerSideProps({param}) {
//   console.log(param);
//   const {results} = await (await fetch(
//     `/api/movies/${props.sort}/page=1`
//   )).json();
//   return {
//     props: {
//       results,
//     }
//   }
// }