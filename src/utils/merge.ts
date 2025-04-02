import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';

export default function mergeClassname(...inputs: classNames.ArgumentArray) {
  return twMerge(classNames(inputs));
}
