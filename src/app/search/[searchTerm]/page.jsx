import MovieCard from "@/Components/MovieCard";
import MovieList from "@/Components/MovieList";
import React from "react";

export default async function SearchResult({ params }) {
  const { searchTerm } = params;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.API_KEY}`,
    },
  };

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&language=ko-KR&page=1&region=kr`,
      options
    );
    const json = await response.json();
    const movies = await json.results;

    return <MovieList movies={movies} />;
  } catch (e) {
    throw new Error(e);
  }
}
