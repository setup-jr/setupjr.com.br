import { HTMLAttributes } from "react";

type CheckboxProps = HTMLAttributes<HTMLInputElement>;

const Checkbox = ({ ...rest }: CheckboxProps) => (
  <input
    {...rest}
    type="checkbox"
    className={`${rest.className || ""} form-checkbox duration-75 rounded`}
  />
);

export default Checkbox;
