"use client";
import { definePreview } from "next-sanity/preview";
import { projectId, dataset } from "./sanity.client"

function onPublicAccessOnly() {
throw new Error ("Tienes que logearte para acceder al preview");
}

if (!projectId || !dataset) {
  throw new Error ('Falta projectId or dataset. Comprueba sanity.json or .env.local');
}

export const usePreview = definePreview({
  projectId, 
  dataset, 
  onPublicAccessOnly, 
});