import { createClient } from "next-sanity";

export const projectId = '1f7npvul';
export const dataset = 'production';
export const apiVersion = '2023-03-03';

export const client = createClient ({
  projectId: projectId,
  dataset: dataset,
  apiVersion: apiVersion, 
  useCdn: false,
});