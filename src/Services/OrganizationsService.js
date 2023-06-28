import apiClient from '../api/axios';

export const getOrganizationService = async (page, pageSize) => {
  const res = await apiClient.get(
    `/organization?page=${page}&pageSize=${pageSize}`
  );
  return res.data.data;
};

export const getDatasetsByOrganizationService = async (
  name,
  page,
  pageSize
) => {
  const res = await apiClient.get(
    `/dataset/organization/${name}?page=${page}&pageSize=${pageSize}`
  );
  return res.data.data;
};
