import { useState, useEffect } from "react";
import axios from "axios";

export const useProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await axios.get("/api/projects");
        setProjects(response.data);
        setError(null);
        console.log(response.data);
      } catch (error) {
        console.error("프로젝트 목록을 불러오는 중 오류 발생:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return { projects, loading, error, setLoading };
};
