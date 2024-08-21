import React from "react";
import MovieCard from "./MovieCard";

export default function MovieList({ movies }) {
  return (
    <div className="flex flex-wrap justify-center">
      {movies.map((movie) => {
        return <MovieCard movie={movie} key={movie.title} />;
      })}
    </div>
  );
}
