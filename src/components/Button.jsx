import styled from "styled-components";

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  border: 0;
  background: none;
  font-weight: 700;
  text-align: center;
  color: var(--text-color);
  touch-action: manipulation;
  cursor: pointer;
`;


export default function Button(props) {
  const { title, onClick } = props;

  return <StyledButton onClick={onClick}>{title || "button"}</StyledButton>;
}