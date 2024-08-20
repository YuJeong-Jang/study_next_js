import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function MovieCard({ movie }) {
  return (
    <div className="m-4 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Link href={`/movie/details/${movie.id}`}>
        <Image
          className="rounded-t-lg"
          width={500}
          height={200}
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
      </Link>
      <div className="p-5">
        <Link href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {movie.title}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {movie.overview}
        </p>
      </div>
    </div>
  );
}
