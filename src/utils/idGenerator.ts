export function generateCustomerId(): string {
  const prefix = "CUST-";
  // Generate a random string using base-36 (0-9 and a-z),
  // then take a substring to get 6 characters and convert to uppercase.
  const randomAlphanumeric = Math.random()
    .toString(36)
    .substring(2, 8)
    .toUpperCase();
  return `${prefix}${randomAlphanumeric}`;
}
