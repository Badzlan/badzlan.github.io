export default function formatDate(date: Date) {
  const options: {
    month?: 'numeric' | '2-digit' | 'short';
    year?: 'numeric' | '2-digit';
  } = { month: 'short', year: 'numeric' };

  return new Intl.DateTimeFormat("en-US", options).format(date);
}
