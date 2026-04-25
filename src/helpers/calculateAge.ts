/**
 * Calculate age taking into account birthday (month + day).
 *
 * @param yearOfBirth - the birth year (e.g., 1992)
 * @param monthOfBirthIndex - the birth month (0 = January, so 1 = February)
 * @param dayOfBirth - the birth day of the month
 * @returns the correct age
 */
export function calculateAge(yearOfBirth: number, monthOfBirthIndex: number, dayOfBirth: number): number {
  const now = new Date();
  const birthDate = new Date(yearOfBirth, monthOfBirthIndex, dayOfBirth);

  const years = now.getFullYear() - birthDate.getFullYear();

  // check if birthday has already happened this year
  const hasHadBirthdayThisYear =
    now.getMonth() > birthDate.getMonth() ||
    (now.getMonth() === birthDate.getMonth() && now.getDate() >= birthDate.getDate());

  return hasHadBirthdayThisYear ? years : years - 1;
}
