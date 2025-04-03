interface PicProps {
  src: string;
  alt?: string;
  width?: number | string;
  height?: number | string;
  IconClassName?: string;
  className?: string;
}

export const Pic = ({ src, alt, height, width, className, IconClassName }: PicProps) => (
  <a href={src} target="_blank" className={className} rel="noreferrer">
    <img src={src} alt={alt} width={width} height={height} className={IconClassName} />
  </a>
);
