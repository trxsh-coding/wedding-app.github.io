import { Invite } from '@/atoms/Invite';
import { Location } from '@/atoms/Location';
import { MusicPlayer } from '@/atoms/MusicPlayer/MusicPlayer';
import { Present } from '@/atoms/Present';
import { Preview } from '@/atoms/Preview';
import { Rest } from '@/atoms/Rest';
import { Timer } from '@/atoms/Timer';
import { Timing } from '@/atoms/Timing';
import { Form } from '@/components/Form';
import { useBreakpoints } from '@/hooks/useBreakpoints';
import React from 'react';

function App() {
  const mainRef = React.useRef<HTMLDivElement>(null);

  const { isDesktopXl } = useBreakpoints();

  const scrollToNext = (event: React.MouseEvent<HTMLDivElement>) => {
    const currentDiv = (event.target as HTMLElement).closest('.container-item'); // Ищем ближайший контейнер
    if (!currentDiv) return;

    const parentDiv = currentDiv.parentElement; // Родительский контейнер (mainRef)
    if (!parentDiv) return;

    const children = Array.from(parentDiv.children); // Достаем всех детей родителя
    const currentIndex = children.findIndex((child) => child === currentDiv); // Определяем индекс текущего контейнера

    if (currentIndex !== -1 && children[currentIndex + 1]) {
      (children[currentIndex + 1] as HTMLElement).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div
      ref={mainRef}
      className="px-[28px] lg:p-0 w-full flex items-center justify-center flex-col"
    >
      <Preview isDesktop={isDesktopXl} scrollToNext={scrollToNext} />
      <Invite scrollToNext={scrollToNext} />
      <Location scrollToNext={scrollToNext} />
      <Timing scrollToNext={scrollToNext} />
      <Rest scrollToNext={scrollToNext} />
      <Present scrollToNext={scrollToNext} />
      <Form scrollToNext={scrollToNext} />
      <Timer />
      <MusicPlayer />
    </div>
  );
}

export default App;
