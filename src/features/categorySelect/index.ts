import { Entry, namespace } from './entry';

export { Entry, namespace };
export async function loadEntry(): Promise<Entry> {
  const feature = await import(/* webpackChunkName: "categorySelect" */ './entry');
  return feature.entry;
}
