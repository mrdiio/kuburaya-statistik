import axios from 'axios';

export const getOrganizationService = async () => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return res.data;
};
