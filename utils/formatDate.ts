function formatDate(date: Date): string {
  return new Date(date).toLocaleDateString('ja-JP');
}

export default formatDate;
