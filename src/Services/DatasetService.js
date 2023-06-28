import apiClient from '../api/axios';

export const detailDatasetService = async (name) => {
  const res = await apiClient.get(`/dataset/${name}`);
  return res.data.data;
};
