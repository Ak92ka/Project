import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'otp00ckj', 
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true
});

export default client;
