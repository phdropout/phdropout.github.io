export const SITE_NAME = 'Ph.D. Dropout';

/** Top-level subjects. Adding one here adds it to the header nav. */
export const subjects = {
  physics: { label: 'Physics', href: '/physics.html' },
  maths: { label: 'Maths', href: '/maths.html' },
};

export type SubjectId = keyof typeof subjects;
