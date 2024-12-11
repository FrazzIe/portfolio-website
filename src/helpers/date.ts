export function shortDate(date: Date) {
    return date.toLocaleDateString('en-GB', { month: 'short', year: 'numeric' });
}