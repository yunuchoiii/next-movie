/** @type {import('next').NextConfig} */

const API_KEY = process.env.API_KEY;

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // {
      //   source: "/contact",
      //   destination: "/form",
      //   permanent: false,
      // }
    ]
  },
  async rewrites() {
    return [
      {
        source: `/api/movies/popular/page=:page`,
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=:page`,
      },
      {
        source: `/api/movies/top_rated/page=:page`,
        destination: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&page=:page`,
      },
      {
        source: `/api/movies/latest/page=:page`,
        destination: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&page=:page`,
      },
      {
        source: `/api/movies/id=:id`,
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`,
      },
    ]
  }
}

module.exports = nextConfig
