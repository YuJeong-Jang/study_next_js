// tailwind css bootstrap => flowbite
// movie api website => tmdb

import MovieCard from "@/Components/MovieCard";
import { redirect } from "next/navigation";

// next14에서 작성한 모든 컴포넌트 (App 디렉토리 내의 컴포넌트)
export default async function Home() {
  redirect("/category/now_playing");

  // // 1. imdb에서 데이터 페칭 수행 --> movie 데이터 json 파일 응담
  // // 2. json.results --> []이 응답 .. 20개의 영화 데이터를 포함

  // const options = {
  //   method: "GET",
  //   headers: {
  //     accept: "application/json",
  //     Authorization:
  //        `Bearer ${process.env.API_KEY}`,
  //   },
  // };

  // const response = await fetch(
  //   "https://api.themoviedb.org/3/movie/now_playing?language=ko-KR&page=1&region=kr",
  //   options
  // );
  // const json = await response.json();
  // const movies = json.results; // 데이터 확보
  // // console.log(json);
  // return (
  //   <div className="flex flex-wrap justify-center">
  //     {movies.map((movie) => {
  //       return <MovieCard movie={movie} />;
  //       // <div key={movie.title}>{movie.title}</div>;
  //     })}
  //   </div>
  // );
}
