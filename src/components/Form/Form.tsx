import { Container } from '@/atoms/Container';
import { FormSent } from '@/atoms/FormSent/FormSent';
import { Button } from '@/components/Button';
import { Checkbox } from '@/components/Checkbox';
import { Input } from '@/components/Input/Input';
import { Radio } from '@/components/Radio';
import { Typography } from '@/components/Typography';
import { useBreakpoints } from '@/hooks/useBreakpoints';
import { useEmail } from '@/hooks/useEmail';
import mergeClassname from '@/utils/merge';
import React from 'react';

interface FormProps {
  scrollToNext: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const drinksList = ['Игристое вино', 'Белое вино', 'Красное вино', 'Водка', 'Виски/Ром', 'Коньяк'];
const attendanceOptions = ['Приду', 'Не смогу прийти'];
const transferOptions = ['Да', 'Нет'];
const kidsOptions = ['Да', 'Нет'];

export const Form = ({ scrollToNext }: FormProps) => {
  const [name, setName] = React.useState('');
  const [selectedDrinks, setSelectedDrinks] = React.useState<string[]>([]);
  const [attendance, setAttendance] = React.useState<string | null>(null);
  const [transfer, setTransfer] = React.useState<string | null>(null);
  const [kidsInfo, setKidsInfo] = React.useState('');
  const [withKids, setWithKids] = React.useState('');

  const message = React.useMemo(() => {
    return `Присутствие: ${attendance}\nНапитки: ${selectedDrinks.join(', ')}\nТрансфер: ${transfer}\nДети: ${kidsInfo}`;
  }, [attendance, kidsInfo, selectedDrinks, transfer]);

  const { handleEmailSubmit, isFetched, isFetching } = useEmail({ message, name });

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

  return !isFetched ? (
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
          <FormWrapper caption="Будете ли вы с детьми?">
            {kidsOptions.map((option) => (
              <Radio
                key={option}
                title={option}
                value={withKids === option}
                onChange={() => setWithKids(option)}
              />
            ))}
          </FormWrapper>
        </div>
        <div
          className={mergeClassname(
            withKids === kidsOptions[0] ? 'h-auto' : 'h-0',
            'transition-all duration-300 ease-linear overflow-hidden'
          )}
        >
          <Input placeholder="Количество детей" value={kidsInfo} onChange={setKidsInfo} />
        </div>
      </div>
      <Button loading={isFetching} title="Отправить" onClick={handleEmailSubmit} />
    </Container>
  ) : (
    <FormSent scrollToNext={scrollToNext} />
  );
};
