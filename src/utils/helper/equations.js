import { GENDERS } from 'utils/constants';
import { differenceInCalendarDays } from 'date-fns';

export const pollockEquation = (person, skinfolds) => {
  const sum = Object.values(skinfolds).reduce((a, b) => a + b);
  const age = (
    differenceInCalendarDays(new Date(), person.birthdate.toDate()) / 365
  ).toFixed(1);

  if (person.gender === GENDERS.cisfemale || person.gender === GENDERS.transfemale) {
    return (1.097 - 0.00046971 * sum + 0.00000056 * sum ** 2 - 0.00012828 * age).toFixed(
      2
    );
  }
  return (1.112 - 0.00043499 * sum + 0.00000055 * sum ** 2 - 0.00028826 * age).toFixed(2);
};
