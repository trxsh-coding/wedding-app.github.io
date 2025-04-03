import { Button } from '@/components/Button';
import { Envelope } from '@/components/Envelope/Envelope';

export const Overlay = ({ onClick }: { onClick: VoidFunction }) => {
  return (
    <div
      onClick={onClick}
      className="h-full w-full justify-center flex items-center fixed top-0 left"
    >
      <div className="w-[90%] h-[50%] lg:w-[50%] bg-white z-20   rounded-4xl flex flex-col justify-center items-center">
        <Button className="w-fit px-4" title="Продолжить" onClick={onClick} />
      </div>
      <Envelope />
      <div className="h-full w-full backdrop-blur-lg absolute top-0 left-0"></div>
    </div>
  );
};
