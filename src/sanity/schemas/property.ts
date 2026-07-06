import { defineType, defineField } from 'sanity';

export const property = defineType({
  name: 'property',
  title: 'Property',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: 'propertyType',
      title: 'Property Type',
      type: 'string',
      options: {
        list: [
          { title: 'Single Family Residence', value: 'Single Family Residence' },
          { title: 'Condo', value: 'Condo' },
          { title: 'Townhouse', value: 'Townhouse' },
          { title: 'Villa', value: 'Villa' },
          { title: 'Land', value: 'Land' },
          { title: 'Commercial', value: 'Commercial' },
        ],
      },
    }),
    defineField({
      name: 'listingType',
      title: 'Listing Type',
      type: 'string',
      options: {
        list: [
          { title: 'For Sale', value: 'for-sale' },
          { title: 'For Rent', value: 'for-rent' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'string',
    }),
    defineField({
      name: 'city',
      title: 'City',
      type: 'string',
    }),
    defineField({
      name: 'state',
      title: 'State',
      type: 'string',
      initialValue: 'FL',
    }),
    defineField({
      name: 'zipCode',
      title: 'Zip Code',
      type: 'string',
    }),
    defineField({
      name: 'bedrooms',
      title: 'Bedrooms',
      type: 'number',
    }),
    defineField({
      name: 'bathrooms',
      title: 'Bathrooms',
      type: 'number',
    }),
    defineField({
      name: 'sqft',
      title: 'Square Feet',
      type: 'number',
    }),
    defineField({
      name: 'mlsNumber',
      title: 'MLS Number',
      type: 'string',
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'listingType',
      media: 'images.0',
    },
  },
});
