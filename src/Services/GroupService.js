import apiClient from '../api/axios';

export const getGroupService = async (page, limit) => {
  // const res = await axios.get('https://jsonplaceholder.typicode.com/users');
  const res = await apiClient.get(`/group?page=${page}&pageSize=${limit}`);
  return res.data.data;
};

export const getDatasetsByGroupService = async (id, page, pageSize) => {
  const res = await apiClient.get(
    `/dataset/group/${id}?page=${page}&pageSize=${pageSize}`
  );
  return res.data.data;
};
