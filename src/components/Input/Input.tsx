interface InputProps {
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
}

export const Input = ({ value, placeholder, onChange }: InputProps) => {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="lg:pb-2 focus:outline-0 border-b border-solid"
    />
  );
};
