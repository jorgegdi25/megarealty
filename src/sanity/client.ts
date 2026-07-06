import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import { sanityConfig } from './config';

export const client = createClient({
  ...sanityConfig,
  stega: { enabled: false },
});

const builder = imageUrlBuilder(client);

export function urlFor(source: Parameters<typeof builder.image>[0]) {
  return builder.image(source);
}
