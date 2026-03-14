import styled from "styled-components";
import { Link } from "react-router-dom";

const sizeStyles = {
  sm: `padding: 0.4rem 1rem; font-size: 1.2rem;`,
  md: `padding: 0.6rem 1.4rem; font-size: 1.4rem;`,
  lg: `padding: 0.8rem 2.2rem;   font-size: 1.6rem;`,
};

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  background: #25b09b;
  font-weight: 700;
  text-align: center;
  touch-action: manipulation;
  border: 0;
  cursor: pointer;
  color: #fff;

  ${({ size = "md" }) => sizeStyles[size]}
  ${({ rounded }) => rounded && `border-radius: 4rem;`}
`;

//버튼
export default function Button(props) {
  const { type, title, onClick, size, rounded } = props;

  return (
    <StyledButton type={type} onClick={onClick} size={size} rounded={rounded}>
      {title || "button"}
    </StyledButton>
  );
}

// 링크 버튼
export function LinkButton({ to, title, size, rounded }) {
  return (
    <StyledButton as={Link} to={to} size={size} rounded={rounded}>
      {title || "button"}
    </StyledButton>
  );
}
