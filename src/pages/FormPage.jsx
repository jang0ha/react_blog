import { ListWrapper } from "../components/ListItem";
import { TextInput } from "../components/Input";
import styled from "styled-components";

const StyledFieldset = styled.fieldset`
  display: grid;
  gap: 1.6rem;
  grid-template-columns: 20rem 1fr;
  margin-top: 2rem;
  & + fieldset {
  }
`;

export default function FormPage() {
  return (
    <section className="container">
      <ListWrapper>
        <h2
          style={{
            borderBottom: "1px solid #ccc",
            paddingBottom: "1rem",
            marginBottom: "1rem",
          }}
        >
          프로젝트 등록
        </h2>

        <StyledFieldset>
          <label htmlFor="project_key">프로젝트 키</label>
          <TextInput id="project_key" height={40} name="project_key" />
        </StyledFieldset>
        <StyledFieldset>
          <label htmlFor="project_title">타이틀</label>
          <TextInput id="project_title" height={40} name="project_key" />
        </StyledFieldset>

        <form action="" method="post"></form>
      </ListWrapper>
    </section>
  );
}
