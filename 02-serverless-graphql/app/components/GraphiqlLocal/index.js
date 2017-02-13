import React from 'react';

import GraphiQL from 'graphiql';
import fetch from 'isomorphic-fetch';
import './graphiql.css';

function graphQLFetcher(graphQLParams) {
  return fetch(window.location.origin + '/graphql', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(graphQLParams),
  }).then(response => response.json());
}

class GraphiqlLocal extends React.Component {
	componentDidMount(){
		console.log('graphiql-local!');
	}

	render() {
		return <GraphiQL fetcher={graphQLFetcher} />;
	}
}

export default GraphiqlLocal;
