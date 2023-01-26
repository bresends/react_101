import type { FC } from 'react';
import { Header } from '../components/Header';

interface BirthdayProps {
  children?: never;
}

export const Birthday: FC<BirthdayProps> = () => {
  return (
    <div className="h-screen bg-[#F089B1]">
      <Header />
    </div>
  );
};
