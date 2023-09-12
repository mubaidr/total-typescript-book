const throwError = (message: string) => {
  throw new Error(message);
};

const handleSearchParams = (params: { id?: string }) => {
  const id = params.id || throwError("No id provided");

  type test = Expect<Equal<typeof id, string>>;

  return id;
};