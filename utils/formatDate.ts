function formatDate(date: Date) {
  return new Date(date).toLocaleDateString('ja-JP');
}

export default formatDate;
