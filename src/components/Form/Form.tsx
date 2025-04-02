import { Container } from '@/atoms/Container';
import { Button } from '@/components/Button';
import { Checkbox } from '@/components/Checkbox';
import { Input } from '@/components/Input/Input';
import { Radio } from '@/components/Radio';
import { Typography } from '@/components/Typography';
import { useBreakpoints } from '@/hooks/useBreakpoints';
import emailjs from 'emailjs-com';
import React from 'react';

interface FormProps {
  scrollToNext: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const drinksList = [
  'Игристое вино',
  'Белое вино',
  'Красное вино',
  'Водка/Коньяк',
  'Виски/Ром',
  'Безалкогольные напитки',
];

const attendanceOptions = ['Приду', 'Не смогу прийти'];
const transferOptions = ['Да', 'Нет'];

const serviceId = import.meta.env.VITE_EMAIL_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
const userId = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

export const Form = ({ scrollToNext }: FormProps) => {
  const [name, setName] = React.useState('');
  const [selectedDrinks, setSelectedDrinks] = React.useState<string[]>([]);
  const [attendance, setAttendance] = React.useState<string | null>(null);
  const [transfer, setTransfer] = React.useState<string | null>(null);
  const [kidsInfo, setKidsInfo] = React.useState('');

  const { isDesktop } = useBreakpoints();

  const handleCheckboxChange = (drink: string) => {
    setSelectedDrinks((prev) =>
      prev.includes(drink) ? prev.filter((item) => item !== drink) : [...prev, drink]
    );
  };

  const FormWrapper = ({ children, caption }: { children: React.ReactNode; caption: string }) => (
    <div className="flex flex-col lg:gap-2">
      <Typography view="form">{caption}</Typography>
      {children}
    </div>
  );

  const handleEmailSubmit = () => {
    const templateParams = {
      name: name, // Имя пользователя
      message: `Присутствие: ${attendance}\nНапитки: ${selectedDrinks.join(', ')}\nТрансфер: ${transfer}\nДети: ${kidsInfo}`,
      title: 'Свадьба: Подтверждение',
    };

    emailjs
      .send(serviceId, templateId, templateParams, userId)
      .then(() => {
        console.log('Sending...');
      })
      .catch((error: string) => {
        console.error('Ошибка отправки:', error);
      });
  };

  return (
    <Container
      isLeftArrow
      onArrowClick={scrollToNext}
      title="Анкета"
      withBow
      className="lg:px-[30px] justify-start lg:justify-center w-full"
      childClassname="w-full gap-2 w-full"
      withDivider={isDesktop}
    >
      <div className="p-2.5 gap-2 w-full flex flex-col lg:px-[32px] lg:py-2 lg:gap-3.5 rounded-[20px] bg-white border-solid border-black border">
        {/* Имя */}
        <Input placeholder="Имя и фамилия" value={name} onChange={setName} />

        {/* Присутствие */}
        <FormWrapper caption="Подтвердите, пожалуйста, ваше присутствие:">
          {attendanceOptions.map((option) => (
            <Radio
              key={option}
              title={option}
              value={attendance === option}
              onChange={() => setAttendance(option)}
            />
          ))}
        </FormWrapper>

        {/* Напитки */}
        <FormWrapper caption="Ваши предпочтения в напитках:">
          {drinksList.map((drink) => (
            <Checkbox
              key={drink}
              value={selectedDrinks.includes(drink)}
              onChange={() => handleCheckboxChange(drink)}
              title={drink}
            />
          ))}
        </FormWrapper>

        {/* Трансфер (Radio) */}
        <FormWrapper caption="Вам нужен трансфер?">
          {transferOptions.map((option) => (
            <Radio
              key={option}
              title={option}
              value={transfer === option}
              onChange={() => setTransfer(option)}
            />
          ))}
        </FormWrapper>

        {/* Дети */}
        <div className="flex flex-col">
          <Typography view="form">Будете ли вы с детьми?</Typography>
          <Typography view="form">Если да, укажите количество:</Typography>
        </div>
        <Input placeholder="Возраст детей" value={kidsInfo} onChange={setKidsInfo} />
      </div>
      <Button title="Отправить" onClick={handleEmailSubmit} />
    </Container>
  );
};
