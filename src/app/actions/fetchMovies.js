"use server";
export async function fetchMoviesWithCategory(category) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.API_KEY}`,
    },
  };

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${category}?language=ko-KR&page=1&region=kr`,
      options
    );
    const json = await response.json();
    const movies = json.results; // 데이터 확보

    return movies;
  } catch (e) {
    throw new Error(e);
  }
}

export async function fetchMoviesWithSearchTerm(searchTerm) {
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
    return movies;
  } catch (e) {
    throw new Error(e);
  }
}

export async function fetchMovieWithMovieId(movieId) {
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
    return movie;
  } catch (e) {
    throw new Error(e);
  }
}
