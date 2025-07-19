export function generateCustomerId(): string {
  const timePart = Date.now().toString().slice(-4); // last 4 digits of ms timestamp
  const randPart = Math.floor(Math.random() * 100)
    .toString()
    .padStart(2, "0"); // 00–99
  return `${timePart}${randPart}`; // 6-digit string
}
