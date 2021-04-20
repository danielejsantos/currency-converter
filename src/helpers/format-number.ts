export function transformRawNumber(value: string) {
  return value.replace(/\D/g, "");
}
