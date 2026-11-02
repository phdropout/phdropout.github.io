export const SITE_NAME = 'Ph.D. Dropout';

export interface Topic {
  /** Anchor id of this topic's entry on its subject page. */
  id: string;
  title: string;
  href: string;
  /** One line, shown on the subject page and under the article heading. */
  summary: string;
  /** Browser tab title, if it should differ from the title. */
  tabTitle?: string;
}

export interface Subject {
  label: string;
  href: string;
  /** In reading order: this drives the previous/next links between articles. */
  topics: Topic[];
}

/**
 * Everything the site's navigation is built from. To publish an article, add
 * its page to src/pages and an entry here.
 */
export const subjects = {
  physics: {
    label: 'Physics',
    href: '/physics.html',
    topics: [
      {
        id: 'mechanics',
        title: 'Motion in One Dimension',
        tabTitle: 'Motion in One Dimension (Algebra Based)',
        href: '/physics-MOD-alg.html',
        summary: 'Distance, displacement, speed, velocity, and acceleration.',
      },
    ],
  },
  maths: {
    label: 'Maths',
    href: '/maths.html',
    topics: [
      {
        id: 'trigonometry',
        title: 'Trigonometry',
        href: '/maths-trig.html',
        summary: 'Defining Sine, Cosine, and Tangent.',
      },
      {
        id: 'vectors',
        title: 'Vectors',
        href: '/maths-vectors.html',
        summary: 'Definitions, operations, dot & cross products, projections, and identities',
      },
    ],
  },
} satisfies Record<string, Subject>;

export type SubjectId = keyof typeof subjects;
