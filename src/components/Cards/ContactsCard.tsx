import type { FC } from 'react';

interface ContactsCardProps {
  children?: never;
}

const ContactsCard: FC<ContactsCardProps> = () => {
  return (
    <div className="g">
      <h1>ContactsCard</h1>
    </div>
  );
};
export default ContactsCard;
