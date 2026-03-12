import { Link } from "react-router-dom";
//import { getProjects } from "../hook/api";
import List from "../components/List";
import { useProjects } from "../hook/useProjects";
import Loading from "../components/Loading";

export default function HomePage() {
  const { projects, loading, error } = useProjects();

  return (
    <div className="container">
      <h2>프로젝트 리스트 </h2>
      <Link to="/edit">프로젝트 등록</Link>
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
    </div>
  );
}
