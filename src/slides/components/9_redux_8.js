import React from 'react';
let Highlight = require('react-highlight');

let code = `
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'

export function requestPosts(subreddit) {
  return {
    type: REQUEST_POSTS,
    subreddit
  };
}

export function receivePosts(subreddit, json) {
  return {
    type: RECEIVE_POSTS,
    subreddit,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  };
}
`;

let code2 = `
{
  selectedSubreddit: 'frontend',
  postsBySubreddit: {
    frontend: {
      isFetching: true,
      didInvalidate: false,
      items: []
    },
    reactjs: {
      isFetching: false,
      didInvalidate: false,
      lastUpdated: 1439478405547,
      items: [
        {
          id: 42,
          title: 'Confusion about Flux and Relay'
        },
        {
          id: 500,
          title: 'Creating a Simple Application Using React JS and Flux Architecture'
        }
      ]
    }
  }
}
`;

export default { content: (
    <div className='split-slide'>
        <h2 className='slide-title'>What about async?</h2>
        <div className='split-content'>
            <Highlight innerHtml={true} className='javascript'>
                {code}
            </Highlight>
            <Highlight innerHtml={true} className='javascript'>
                {code2}
            </Highlight>
        </div>
    </div>
) }