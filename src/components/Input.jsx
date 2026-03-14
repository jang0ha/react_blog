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

const StyledTextarea = styled(StyledInput).attrs({ as: "textarea" })`
  resize: none;
  min-height: 12rem;
`;

export const TextArea = forwardRef(function TextArea(props, ref) {
  const { value, onChange, name } = props;

  return (
    <StyledTextarea value={value} onChange={onChange} ref={ref} name={name} />
  );
});

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
