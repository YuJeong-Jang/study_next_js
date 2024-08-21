import MovieCard from "@/Components/MovieCard";
import MovieDetails from "@/Components/MovieDetails";
import React from "react";

export default async function MovieDetailsPage({ params }) {
  const { movieId } = params;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.API_KEY}`,
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
