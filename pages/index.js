import HomeBanner from "@/components/HomeBanner";
import SearchBar from "@/components/SearchBar";
import Popular from "./popular/[...page]";

export default function Index() {
  return (
    <div className="home">
      <div className="mt-30 mb-30">
        <SearchBar></SearchBar>
      </div>
      <HomeBanner sort="popular" title="Popular"></HomeBanner>
      <hr></hr>
      <HomeBanner sort="now_playing" title="Now In Theaters"></HomeBanner>
      <hr></hr>
      <HomeBanner sort="top_rated" title="Top Rated"></HomeBanner>
      <style jsx>
        {`
          .home{
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          hr {
            width: 97%;
            background: #45525b;
            height:1px;
            border:0;
            margin: 30px 0px;
          }
          @media (max-width: 800px) {
            .home {
              margin-top: 10px;
            }
          }
        `}
      </style>
    </div>
  );
}