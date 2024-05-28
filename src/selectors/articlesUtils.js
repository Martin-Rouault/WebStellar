const handleSortArticles = (sortOption, articles) => {
  const sortedArticles = articles.slice().sort((a, b) => {
    const dateA = new Date(a.created_at);
    const dateB = new Date(b.created_at);

    if (sortOption === 'latest') {
      return dateB - dateA; // Triez par les plus récents en premier
    }
    if (sortOption === 'oldest') {
      return dateA - dateB; // Triez par les plus anciens en premier
    }

    return 0; // Par défaut, ne pas trier
  });
  return sortedArticles;
};

export default handleSortArticles;
