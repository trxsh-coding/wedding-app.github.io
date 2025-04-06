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

const drinksList = [
  'Игристое вино',
  'Белое вино',
  'Красное вино',
  'Водка',
  'Безалкогольные напитки',
  'Другое (уточните, что бы хотелось)',
];
const attendanceOptions = ['Да, приду', 'Нет, не смогу прийти'];
const transferOptions = ['Да', 'Нет'];
const kidsOptions = ['Да', 'Нет'];
type ErrorFields = keyof typeof errorState;

const errorState = {
  name: false,
  withKids: false,
};

export const Form = ({ scrollToNext }: FormProps) => {
  const [name, setName] = React.useState('');
  const [selectedDrinks, setSelectedDrinks] = React.useState<string[]>([]);
  const [attendance, setAttendance] = React.useState<string | null>(null);
  const [transfer, setTransfer] = React.useState<string | null>(null);
  const [additionalDrinks, setAdditionalDrinks] = React.useState<string>('');

  const [kidsInfo, setKidsInfo] = React.useState('');
  const [withKids, setWithKids] = React.useState('');

  const [error, setError] = React.useState<{
    name: boolean;
    withKids: boolean;
  }>(errorState);

  const message = React.useMemo(() => {
    return `Присутствие: ${attendance}\nНапитки: ${selectedDrinks.join(', ')}\n${additionalDrinks ?? ''}\nТрансфер: ${transfer}\nДети: ${kidsInfo}`;
  }, [additionalDrinks, attendance, kidsInfo, selectedDrinks, transfer]);

  const { isDesktop } = useBreakpoints();

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const firstName = params.get('first');
    const secondName = params.get('second');
    if (firstName || secondName) {
      setName(`${firstName} ${secondName ? 'и ' + secondName : ''}`);
    }
  }, []);

  const setValidationError = React.useCallback((name: string) => {
    return !name.length;
  }, []);

  const isValid = React.useMemo(() => {
    return (Object.keys(error) as ErrorFields[]).every((key) => {
      return !error[key];
    });
  }, [error]);

  const { handleEmailSubmit, isFetched, isFetching } = useEmail({ message, name, valid: isValid });

  React.useEffect(() => {
    setError({
      name: setValidationError(name),
      withKids: setValidationError(kidsInfo) && withKids === kidsOptions[0],
    });
  }, [kidsInfo, name, setValidationError, withKids]);

  const handleCheckboxChange = React.useCallback(
    (drink: string) => {
      setSelectedDrinks((prev) =>
        prev.includes(drink) ? prev.filter((item) => item !== drink) : [...prev, drink]
      );
    },
    [setSelectedDrinks]
  );

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
        <Input error={error.name} placeholder="Имя и фамилия" value={name} onChange={setName} />

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
        {selectedDrinks.includes(drinksList[drinksList.length - 1]) && (
          <Input placeholder="Пожелания" value={additionalDrinks} onChange={setAdditionalDrinks} />
        )}
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
          <Input
            error={error.withKids}
            placeholder="Количество детей"
            value={kidsInfo}
            onChange={setKidsInfo}
          />
        </div>
      </div>
      <Button loading={isFetching} title="Отправить" onClick={handleEmailSubmit} />
      {!isValid && (
        <Typography view="caption" className="!text-red-600">
          проверьте, всё ли заполнено 💌
        </Typography>
      )}
    </Container>
  ) : (
    <FormSent scrollToNext={scrollToNext} />
  );
};
