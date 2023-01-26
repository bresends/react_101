import type { FC } from 'react';
import { Link } from 'react-router-dom';

interface CardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

export const MainPageCard: FC<CardProps> = ({
  title,
  description,
  image,
  link,
}) => {
  return (
    <div className="group rounded-3xl border border-gray-100 bg-white bg-opacity-50 p-6  shadow-2xl shadow-gray-600/10 sm:p-8">
      <Link to={link}>
        <div className="relative overflow-hidden rounded-xl">
          <img
            src={image}
            alt="art cover"
            loading="lazy"
            width={1000}
            height={667}
            className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
          />
        </div>
        <div className="relative mt-6">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
            {title}
          </h3>
          <p className="mt-6 mb-8 text-gray-600">{description}</p>
          <button
            type="button"
            className="inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-tight shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:text-white hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
          >
            Detalhes
          </button>
        </div>
      </Link>
    </div>
  );
};
