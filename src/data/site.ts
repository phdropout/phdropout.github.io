export const SITE_NAME = 'Ph.D. Dropout';

export const SITE_DESCRIPTION = 'Physics and mathematics derivations presented step by step, with just enough context to stay clear. The reasoning that makes the results inevitable.';

export interface Topic {
  /** Anchor id of this topic's entry on its subject page. */
  id: string;
  title: string;
  href: string;
  /** One line, shown on the subject page and under the article heading. */
  summary: string;
  /** Shown under the page's link in search results; about 150 characters. */
  description: string;
  /** Browser tab title, if it should differ from the title. */
  tabTitle?: string;
}

export interface Subject {
  label: string;
  href: string;
  /** Shown under the page's link in search results; about 150 characters. */
  description: string;
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
    description: 'Physics explained from first principles, with step-by-step derivations and just enough context to stay clear.',
    topics: [
      {
        id: 'mechanics',
        title: 'Motion in One Dimension',
        tabTitle: 'Motion in One Dimension (Algebra Based)',
        href: '/physics-MOD-alg.html',
        summary: 'Distance, displacement, speed, velocity, and acceleration.',
        description: 'Distance, displacement, speed, velocity, and acceleration in one dimension, explained step by step with worked examples.',
      },
    ],
  },
  maths: {
    label: 'Maths',
    href: '/maths.html',
    description: 'Mathematics explained from first principles, with step-by-step derivations and just enough context to stay clear.',
    topics: [
      {
        id: 'trigonometry',
        title: 'Trigonometry',
        href: '/maths-trig.html',
        summary: 'Defining Sine, Cosine, and Tangent.',
        description: 'Sine, cosine, tangent, and their reciprocals defined from a right triangle, with the Pythagorean identities derived step by step.',
      },
      {
        id: 'vectors',
        title: 'Vectors',
        href: '/maths-vectors.html',
        summary: 'Definitions, operations, dot & cross products, projections, and identities',
        description: 'Vectors from the definition up: operations, dot and cross products, norms, projections, and useful identities, with exercises.',
      },
    ],
  },
} satisfies Record<string, Subject>;

export type SubjectId = keyof typeof subjects;
