const getRecommendations = async () => {
  const response = await fetch('/api/recommendations', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ preferences: ['example'] })
  });
  return await response.json();
};

export default { getRecommendations };
