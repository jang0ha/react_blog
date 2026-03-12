import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export const useProjectDetail = () => {
  const { key } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/api/projects/${key}`);
        setProject(response.data);
        setError(null);
      } catch (error) {
        console.error("프로젝트 상세 정보를 불러오는 중 오류 발생:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    if (key) {
      fetchProject();
    }
  }, [key]);

  return { project, loading, error };
};
