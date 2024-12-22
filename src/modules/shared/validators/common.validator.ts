export const validateNumericQuery = (
  query?: string | string[] | number
): { error?: string; value?: number } => {
  if (!query) {
    return { error: "No query provided" };
  }

  const queryValue = Array.isArray(query) ? query[0] : query;

  const parsedValue = parseInt(queryValue as string, 10);

  if (isNaN(parsedValue)) {
    return { error: "Invalid query parameter" };
  }

  if (parsedValue < 0) {
    return { error: "Query must be 0 or greater" };
  }

  return { value: parsedValue };
};
