const renderDate = (dateString) => {
  return new Date(dateString).toDateString();
};

export default {
  renderDate,
};
