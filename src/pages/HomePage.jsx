import { Link } from "react-router-dom";
//import { getProjects } from "../hook/api";
import List from "../components/List";
import { useProjects } from "../hook/useProjects";
import Loading from "../components/Loading";
import { LinkButton } from "../components/Button";
export default function HomePage() {
  const { projects, loading, error } = useProjects();

  return (
    <section className="container">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2>프로젝트 리스트 </h2>
        <LinkButton to="/edit" title="프로젝트 등록" rounded={true} />
      </div>
      {loading ? (
        <Loading />
      ) : error ? (
        <div className="container">
          <p>오류 발생: {error.message}</p>
        </div>
      ) : projects.length === 0 ? (
        <div className="container">
          <p>프로젝트 없음</p>
        </div>
      ) : (
        <List
          posts={projects}
          linkTo={(post) => `/projects/${post.project_key}`}
        ></List>
      )}
    </section>
  );
}
