import HeadTitle from "@/components/HeadTitle";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home({results}) {
  const router = useRouter();
  const onClick = (id, title) => {
    router.push(`/movies/${title}/${id}`)
  }
  console.log(results)
  return (
    <div className="body">
      <HeadTitle title="Home"></HeadTitle>
      {results?.map((movie)=>(
      <div className="movie" onClick={()=>onClick(movie.id, movie.original_title)} key={movie.id}>
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

export async function getServerSideProps() {
  const {results} = await (await fetch(
    `http://localhost:3000/api/movies`
  )).json();
  return {
    props: {
      results,
    }
  }
}