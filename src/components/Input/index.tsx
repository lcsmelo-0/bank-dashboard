import { FC, HTMLInputTypeAttribute, useMemo, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import { CustomInput, EyeIcon, Wrapper } from "./styles";

type Props = {
  placeholder: string;
  value: string | undefined;
  onChange: (e: string) => void;
  type?: HTMLInputTypeAttribute;
};

export const Input: FC<Props> = ({
  placeholder,
  value,
  onChange,
  type = "text",
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const inputType = useMemo(
    () => (type === "password" && !showPassword ? "password" : "text"),
    [type, showPassword]
  );

  return (
    <Wrapper>
      <CustomInput
        type={inputType}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        $isPassword={type === "password"}
      />
      {type === "password" && (
        <EyeIcon onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </EyeIcon>
      )}
    </Wrapper>
  );
};
