export function translateEnum(
  map: Record<string, string>,
  value?: string | null
): string {
  if (!value) return '-';
  return map[value] ?? value;
}
