import sanityClient from '@sanity/client'

export const projectId = 'k8yt7ia8';
export const dataset = 'production';

export default sanityClient({
  projectId: 'k8yt7ia8',
  dataset: 'production',
  useCdn: false /* Keep false will in dev */
})