if (!global._babelPolyfill)
	require('babel-polyfill');


import { GraphQLSchema } from 'graphql';
import QueryType from './types/query';
// import MutationType from './types/mutation';

export default new GraphQLSchema({
  query: QueryType,
  // mutation: MutationType,
});
