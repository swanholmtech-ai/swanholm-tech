/**
 * Extracts the value from a FormData or string input and validates as email.
 * @param value - string from input or FormData.get()
 * @returns string if valid email, otherwise false
 */
export function getValidEmail(
  value: FormDataEntryValue | null
): string | false {
  if (!value) return false;

  const email = value.toString().trim();

  // Basic email regex pattern
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!emailPattern.test(email)) return false;

  return email;
}
