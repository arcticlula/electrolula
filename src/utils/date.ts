export function formatMonthYear(dateString: string): string {
  if (!dateString) return '';
  
  // Create a Date object
  const date = new Date(dateString);
  
  if (isNaN(date.getTime())) {
    return dateString; // Handle invalid date
  }

  // 2. Format using Intl.DateTimeFormat
  return new Intl.DateTimeFormat('en-GB', {
    year: 'numeric',
    month: 'long',
  }).format(date);
}