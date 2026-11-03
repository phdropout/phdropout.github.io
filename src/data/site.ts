export const SITE_NAME = 'Ph.D. Dropout';

export const SITE_DESCRIPTION = 'Mathematics derivations presented step by step, with just enough context to stay clear. The reasoning that makes the results inevitable.';

export interface Article {
  /** Must match the file name of the article's page. */
  id: string;
  title: string;
  href: string;
  /** One line, shown on the section page and under the article heading. */
  summary: string;
  /** Shown under the page's link in search results; about 150 characters. */
  description: string;
}

export interface Section {
  label: string;
  href: string;
  /** Shown under the page's link in search results; about 150 characters. */
  description: string;
  /** In reading order: this drives the previous/next links between articles. */
  articles: Article[];
}

/**
 * Everything the site's navigation is built from. To publish an article, add
 * its page to src/pages and an entry here. A new section also needs its own
 * index page, as in src/pages/topics/index.astro, and appears in the header.
 */
export const sections = {
  topics: {
    label: 'Topics',
    href: '/topics/',
    description: 'Mathematics explained from first principles, with step-by-step derivations and just enough context to stay clear.',
    articles: [
      {
        id: 'trigonometry',
        title: 'Trigonometry',
        href: '/topics/trigonometry/',
        summary: 'Defining Sine, Cosine, and Tangent.',
        description: 'Sine, cosine, tangent, and their reciprocals defined from a right triangle, with the Pythagorean identities derived step by step.',
      },
    ],
  },
} satisfies Record<string, Section>;

export type SectionId = keyof typeof sections;

/** What the header can highlight: a section, or a standalone page in its menu. */
export type ActiveNav = SectionId | 'about';
