import axios from "axios";

export const getProject = async (key) => {
  const response = await axios.get(`api/projects/${key}`);
  return response.data;
};
