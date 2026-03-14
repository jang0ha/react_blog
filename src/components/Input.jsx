import { forwardRef } from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  width: 100%;
  ${(props) =>
    props.height &&
    `
        height: ${props.height}px;
    `}
  padding:  1.6rem;
  font-size: 1.6rem;
  line-height: 2rem;
  border: 1px solid #ddd;
  &:focus {
		outline:1px solid #111;
`;

export const TextInput = forwardRef(function TextInput(props, ref) {
  const { height, value, onChange, name } = props;

  return (
    <StyledInput
      height={height}
      value={value}
      onChange={onChange}
      ref={ref}
      name={name}
    />
  );
});
