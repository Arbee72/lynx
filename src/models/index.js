// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { LinkType, Links, Keywords, KeywordsLinks } = initSchema(schema);

export {
  LinkType,
  Links,
  Keywords,
  KeywordsLinks
};