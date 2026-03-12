import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { useProjects } from "../hook/useProjects";
import Loading from "../components/Loading";
import { ListWrapper } from "../components/ListItem";

export default function ProjectDetailPage() {
  const { key } = useParams();
  const { project, loading, error, setLoading } = useProjects();
  console.log(project);

  const [projectKey, setProjectKey] = useState({
    key: "",
    sort: "",
    title: "",
    summary: [],
    tasks: [],
    links: [],
    images: [],
    configurations: [],
  });
  useEffect(() => {
    console.log("key:", key);

    axios
      .get(`/api/projects/${key}`)
      .then((response) => {
        setProjectKey(response.data);
        setLoading(false);
        console.log("프로젝트 상세 정보:", response.data);
      })
      .catch((error) => {
        console.error("프로젝트 상세 정보를 불러오는 중 오류 발생:", error);
      });
  }, [key, setLoading]);

  if (loading) {
    return (
      <div
        className="container"
        style={{ flex: "1", justifyContent: "center", alignItems: "center" }}
      >
        <Loading />
      </div>
    );
  }

  if (error) {
    return (
      <div className="container">
        <p>오류 발생: {error.message}</p>
      </div>
    );
  }

  if (!projectKey) {
    return (
      <div className="container">
        <p>프로젝트를 찾을 수 없습니다.</p>
      </div>
    );
  }

  return (
    <div className="container" style={{ justifyContent: "flex-start" }}>
      <ListWrapper>
        <span>프로젝트 분류: {projectKey.sort}</span>
        <h2 style={{ marginTop: "2rem" }}>{projectKey.title}</h2>
      </ListWrapper>
      <ListWrapper>
        {projectKey.summary.map((item, index) => (
          <dl
            key={index}
            style={{
              display: "grid",
              gap: "1rem",
              gridTemplateColumns: "20rem auto",
            }}
          >
            {Object.entries(item).map(([itemKey, itemValue]) => (
              <>
                <dt key={`dt-${itemKey}`} style={{ fontWeight: "bold" }}>
                  {itemKey}
                </dt>
                <dd key={`dd-${itemKey}`}>{itemValue}</dd>
              </>
            ))}
          </dl>
        ))}
        <div style={{ marginTop: "5rem" }}>
          {projectKey.tasks.map((task, index) => (
            <p key={index} style={{ whiteSpace: "pre-line" }}>
              {task}
            </p>
          ))}
        </div>
        {/* 다른 필드들도 추가 가능 */}
      </ListWrapper>
    </div>
  );
}
