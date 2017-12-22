import { Entry } from './entry';

export async function loadEntry(): Promise<Entry> {
  const feature = await import(/* webpackChunkName: "categorySelect" */ './entry');
  return feature.entry;
}