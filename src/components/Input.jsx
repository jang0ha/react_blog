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
`;

export function TextInput(props) {
  const { width, height, value, onChange } = props;

  return <StyledInput height={height} value={value} onChange={onChange} />;
}
