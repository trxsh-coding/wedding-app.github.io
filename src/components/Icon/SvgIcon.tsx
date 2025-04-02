interface SvgImageProps {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; // Тип для SVG-компонента
  alt?: string;
  width?: number | string;
  height?: number | string;
  iconClassName?: string;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export const SvgIcon = ({
  height,
  width,
  className,
  iconClassName,
  onClick,
  Icon,
}: SvgImageProps) => (
  <div onClick={onClick} className={className}>
    <Icon className={iconClassName} width={width} height={height} />
  </div>
);
