function formatDate(date: Date): string {
  return new Date(date).toLocaleDateString('en-US');
}

export default formatDate;
