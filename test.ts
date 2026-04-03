import { getCollection } from 'astro:content';
const entries = await getCollection('library');
console.log(entries);
