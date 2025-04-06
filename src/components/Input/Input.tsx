import mergeClassname from '@/utils/merge';

interface InputProps {
  value: string;
  placeholder: string;
  className?: string;
  error?: boolean;
  onChange: (value: string) => void;
}

export const Input = ({ value, placeholder, onChange, className, error }: InputProps) => {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={mergeClassname(
        'lg:pb-2 focus:outline-0 border-b border-solid',
        error && 'border-red-600 text-red-600',
        className
      )}
    />
  );
};
