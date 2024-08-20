import MovieCard from "@/Components/MovieCard";
import MovieDetails from "@/Components/MovieDetails";
import React from "react";

export default async function MovieDetailsPage({ params }) {
  const { movieId } = params;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MDM3YTAwN2ZhMmE5MzM1NTdmNWYyMzBlMGYyZTYwZiIsIm5iZiI6MTcyNDEyMTgzNS45Mzg1OTEsInN1YiI6IjY0OTkzOGVkNmY0M2VjMDBjNWM3MmY4NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lKLi0NyV3qV0XNsDaZbeHw6IWrAjDam7TWu0nq9wxnc",
    },
  };

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?language=ko-KR&page=1&region=kr`,
      options
    );
    const movie = await response.json();

    return (
      <div>
        <MovieDetails movie={movie} key={movie.title} />
      </div>
    );
  } catch (e) {
    throw new Error(e);
  }
}
