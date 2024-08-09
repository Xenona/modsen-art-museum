export const validateSearchQuery = (query: string) => {
  const sanitizedQuery = query.replace(/[<>]/g, "");
  const trimmedQuery = sanitizedQuery.trimStart();
  return trimmedQuery;
};
