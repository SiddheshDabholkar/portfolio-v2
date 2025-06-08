const getParsed = (data: any) => {
  if (!data) {
    return null;
  }
  try {
    const parsedText = JSON.parse(data);
    return parsedText;
  } catch (error) {
    return null;
  }
};

export { getParsed };
