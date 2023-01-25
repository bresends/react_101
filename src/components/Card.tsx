import type { FC } from 'react';
import { Link } from 'react-router-dom';

interface CardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

export const Card: FC<CardProps> = ({ title, description, image, link }) => {
  return (
    <div className="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100  bg-opacity-50 shadow-2xl shadow-gray-600/10">
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
        <div className="mt-6 relative">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
            {title}
          </h3>
          <p className="mt-6 mb-8 text-gray-600">{description}</p>
          <span className="text-primary">Read more</span>
        </div>
      </Link>
    </div>
  );
};
