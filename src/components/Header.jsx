import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.header`
  display:flex;
	align-items: center;
	justify-content: center;
  padding:  1.6rem;
  font-size: 1.6rem
  line-height: 2rem;
`;

export default function Header() {
  const location = useLocation();
  const pathParts = location.pathname.split("/").filter(Boolean);
  const routerText =
    pathParts.length === 0 ? "홈" : pathParts[pathParts.length - 1];

  return (
    <StyledHeader style={{ marginLeft: "auto" }}>
      <h1>
        {" "}
        {pathParts.length > 0 && (
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            {" "}
            {"HOME"} {`>`}
          </Link>
        )}{" "}
        {routerText}
      </h1>
    </StyledHeader>
  );
}
