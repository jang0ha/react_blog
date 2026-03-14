import { useState, useRef } from "react";
import { ListWrapper } from "../components/ListItem";
import { TextInput } from "../components/Input";
import styled from "styled-components";
import Button from "../components/Button";
const StyledFieldset = styled.fieldset`
  display: grid;
  gap: 1.6rem;
  grid-template-columns: 20rem 1fr;
  margin-top: 2rem;
  & + fieldset {
  }
`;

export default function FormPage() {
  const [value, setValue] = useState({});
  const projectKeyRef = useRef(null);
  const projectTitleRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);

    const formData = new FormData();

    if (!value.project_key) {
      alert("프로젝트 키를 입력해주세요.");
      projectKeyRef.current.focus();
      return;
    }
    if (!value.project_title) {
      alert("타이틀을 입력해주세요.");
      projectTitleRef.current.focus();
      return;
    }
    formData.append("project_key", value.project_key);
    formData.append("project_title", value.project_title);
    return fetch("http://localhost:5713/api/projects", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to create project");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Project created:", data);
        // Redirect to homepage or show success message
        window.location.href = "/";
      })
      .catch((error) => {
        console.error("Error creating project:", error);
        alert("프로젝트 등록에 실패했습니다.");
      });
  };

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

        <form action="" method="post">
          <StyledFieldset>
            <label htmlFor="project_key">프로젝트 키</label>
            <TextInput
              id="project_key"
              height={40}
              ref={projectKeyRef}
              onChange={handleChange}
              name="project_key"
            />
          </StyledFieldset>
          <StyledFieldset>
            <label htmlFor="project_title">타이틀</label>
            <TextInput
              id="project_title"
              height={40}
              ref={projectTitleRef}
              onChange={handleChange}
              name="project_title"
            />
          </StyledFieldset>
          <br />
          <Button type="submit" title="등록" onClick={handleSubmit} />
        </form>
      </ListWrapper>
    </section>
  );
}
