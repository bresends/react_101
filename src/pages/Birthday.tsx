import type { FC } from 'react';

interface BirthdayProps {
  children?: React.ReactNode;
}

export const Birthday: FC<BirthdayProps> = ({ children }) => {
  return (
    <img
      alt="birthday reminder"
      src="https://react-projects.netlify.app/_next/image?url=https%3A%2F%2Fv5.airtableusercontent.com%2Fv1%2F14%2F14%2F1673892000000%2FNNPWanECoOoTMVZ5PjUHVA%2Fe9wpchBkURBcARf3kjs-veILCRL2Wh0udBZ9f5SzXMUkXpMRHP374RpOw9b1gJPO-uOo2_C7AEermW0aqfDWpq-pTQoOayClpP3shu4MmGeWjBAohwWSw7Bl3rFtGaWd%2FeF1Rjxw-C8hWc9IH9ZBaDtp4YhtKvnTLt9me5wskjuA&w=3840&q=75"
      decoding="async"
      data-nimg="fill"
      className="absolute inset-0 h-full w-full object-cover"
    />
  );
};
