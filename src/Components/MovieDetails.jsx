import Image from "next/image";
import React from "react";

export default function MovieDetails({ movie }) {
  return (
    <div className="m-20">
      <a
        href="#"
        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <Image
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
         
          width={1500}
          height={1000}
            alt={movie.title}
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {movie.title}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {movie.tagline}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {movie.overview}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <span>평점 : </span>
            {movie.vote_average}
          </p>
        </div>
      </a>
    </div>
  );
}
