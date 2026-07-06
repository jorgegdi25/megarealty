import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './src/sanity/schemas';
import { sanityConfig } from './src/sanity/config';

export default defineConfig({
  name: 'mega-realty',
  title: 'Mega Realty International',
  projectId: sanityConfig.projectId,
  dataset: sanityConfig.dataset,
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
  basePath: '/studio',
});
