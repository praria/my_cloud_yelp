// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Todo, Restaurant } = initSchema(schema);

export {
  Todo,
  Restaurant
};