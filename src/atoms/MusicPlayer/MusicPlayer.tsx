import Pause from '@/assets/images/pause.svg?react';
import Play from '@/assets/images/play-button-svgrepo-com.svg?react';
import WeddingSong from '@/assets/music/song.mp3';
import { SvgIcon } from '@/components/Icon';
import React from 'react';

export const MusicPlayer = ({
  triggerPlay = false,
}: {
  triggerPlay: boolean;
  onClick: VoidFunction;
}) => {
  const audioRef = React.useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = React.useState(triggerPlay);

  React.useEffect(() => {
    if (audioRef.current) {
      if (playing) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [playing, triggerPlay]);

  const togglePlayback = React.useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
    } else {
      audio.play().catch((err) => {
        console.warn('Playback error:', err);
      });
    }

    setPlaying(!playing);
  }, [playing]);
  return (
    <>
      <SvgIcon
        className="fixed top-4 left-3 z-50 stroke-secondary"
        Icon={playing ? Pause : Play}
        iconClassName="w-6 h-6"
        onClick={togglePlayback}
      />
      <audio ref={audioRef} src={WeddingSong} />
    </>
  );
};
