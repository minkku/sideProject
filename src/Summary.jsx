function Summary({ summary, loading }) {
  if (loading) {
    return <p>요약 중...</p>;
  }

  return <p>요약 결과: {summary}</p>;
}

export default Summary;
