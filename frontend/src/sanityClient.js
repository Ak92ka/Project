import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'otp00ckj',
  dataset: 'production',
  useCdn: true, // `false` if you want to ensure fresh data
  apiVersion: '2023-10-10', // Use a recent date for the API version
});

export default client;
