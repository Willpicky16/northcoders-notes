# Requests

## PUT Request


##Northcoders News Sprint Lecture
Putting together react-redux, react-router and react all together to make a nice project

``` JavaScript
export function voteArticle (id, vote) {
  return function (dispatch) {
    dispatch(voteArticleRequest());
    axios
      .put(`${ROOT}/articles/${id}?vote=${vote}`)
      .then((res) => {
        dispatch(voteArticleSuccess(res.data));
      })
      .catch((error) => {
        dispatch(voteArticleSuccess(error.message));
      })
  }
}

export function voteArticleRequest () {
  return {
    type: types.VOTE_ARTICLE_REQUEST
  };
}
export function voteArticleSuccess (data) {
  return {
    type: types.VOTE_ARTICLE_SUCCESS,
    data
  };
}
export function voteArticleError (error) {
  return {
    type: types.VOTE_ARTICLE_ERROR,
    error
  };
}

// VoteButton.js
onClick={props.handleClick.bind(null, 'up')}
onClick={props.handleClick.bind(null, 'down')}

// ArticleList.js
voteArticle: (id, vote) => {

}
```

``` JavaScript
function normaliseData (data) {
  return data.reduce(function (acc, item) {
    acc[item._id] = item;
    return acc;
  }, {});
}
}
```
