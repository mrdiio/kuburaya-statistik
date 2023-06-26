import apiClient from '../api/axios';

export const getOrganizationService = async (page, pageSize) => {
  const res = await apiClient.get(
    `/organization?page=${page}&pageSize=${pageSize}`
  );
  return res.data.data;
};

export const getDatasetsByOrganizationService = async (id, page, pageSize) => {
  const res = await apiClient.get(
    `/dataset/organization/${id}?page=${page}&pageSize=${pageSize}`
  );
  return res.data.data;
};
