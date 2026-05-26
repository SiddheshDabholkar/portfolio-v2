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

function getExperience(startDate) {
  const now = new Date();

  const months =
    (now.getFullYear() - startDate.getFullYear()) * 12 +
    (now.getMonth() - startDate.getMonth());

  const years = months / 12;

  return years % 1 === 0 ? `${years} years` : `~${years.toFixed(1)} years`;
}

export { getParsed, getExperience };
