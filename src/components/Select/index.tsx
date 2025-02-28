import { FC } from "react";
import { CustomSelect, Wrapper } from "./styles";

type Props = {
  placeholder: string;
  onChange: (e: string) => void;
  children: React.ReactNode;
  value?: string;
};

export const Select: FC<Props> = ({
  placeholder,
  onChange,
  children,
  value,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <Wrapper>
      <CustomSelect onChange={handleChange} value={value}>
        <option value="">{placeholder}</option>
        {children}
      </CustomSelect>
    </Wrapper>
  );
};
