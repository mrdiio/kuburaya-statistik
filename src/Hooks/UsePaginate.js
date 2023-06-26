const UsePaginate = (data, { numberPerPage = 10 }) => {
  const pages = Math.ceil(data.length / numberPerPage);

  const paginatedData = Array.from({ length: pages }, (_, index) => {
    const start = index * numberPerPage;
    return data.slice(start, start + numberPerPage);
  });

  return { paginatedData, pages };
};

export default UsePaginate;
