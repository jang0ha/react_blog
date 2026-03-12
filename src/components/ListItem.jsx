import styled from "styled-components";
import { Link } from "react-router-dom";

export const ListWrapper = styled.li`
  width: 100%;
  padding: 2rem;
  background: #fff;
  font-size: 2rem;
  font-weight: 500;
  border-radius: 1.4rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  & + li {
    margin-top: 1.6rem;
  }
`;

export default function ListItem({ post, onClick, children, linkTo }) {
  const listProps = onClick ? { onClick } : {};
  const titleContent = linkTo ? (
    <Link to={linkTo} style={{ textDecoration: "none", color: "inherit" }}>
      {post.title}
      {children && children}
    </Link>
  ) : (
    <>
      {post.title}
      {children && children}
    </>
  );

  return <ListWrapper {...listProps}>{titleContent}</ListWrapper>;
}
