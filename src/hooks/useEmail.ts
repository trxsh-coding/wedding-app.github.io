import emailjs from 'emailjs-com';
import React from 'react';

interface useEmailProps {
  name: string;
  message: string;
}

const serviceId = import.meta.env.VITE_EMAIL_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
const userId = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

export const useEmail = ({ name, message }: useEmailProps) => {
  const [isFetching, setIsFetching] = React.useState(false);
  const [isFetched, setIsFetched] = React.useState(false);
  const [error, setError] = React.useState(false);

  const handleEmailSubmit = React.useCallback(() => {
    const templateParams = {
      name,
      message,
      title: 'Свадьба: Подтверждение',
    };
    setIsFetching(true);
    emailjs
      .send(serviceId, templateId, templateParams, userId)
      .then(() => {
        setIsFetched(true);
      })
      .catch((error: string) => {
        setError(true);
        console.error('Ошибка отправки:', error);
      })
      .finally(() => {
        setIsFetching(false);
        setIsFetched(true);
      });
  }, [message, name]);

  return {
    handleEmailSubmit,
    isFetching,
    isFetched,
    error,
  };
};
