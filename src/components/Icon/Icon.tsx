interface SvgImageProps {
  src: string;
  alt?: string;
  width?: number | string;
  height?: number | string;
  IconClassName?: string;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export const Icon = ({
  src,
  alt,
  height = 32,
  width = 32,
  className,
  IconClassName,
  onClick,
}: SvgImageProps) => (
  <div onClick={onClick} className={className}>
    <img src={src} alt={alt} width={width} height={height} className={IconClassName} />
  </div>
);
