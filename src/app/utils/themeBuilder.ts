export function getBgClass(color: string, shade: number = 600): string {
  const colorKey = color;
  return `bg-${colorKey}-${shade}`;
}