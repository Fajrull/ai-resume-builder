const formatDate = (dateString) => {
  if (!dateString) return "";
  const options = { day: "2-digit", month: "long", year: "numeric" };
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", options);
};

export default formatDate;
