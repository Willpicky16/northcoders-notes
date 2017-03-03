# React Refactoring

``` JavaScript
tweets = this.state

renderTweets: function () {
    return this.state.tweets.map(function (tweet, i) {
      return (

      )
    })
  }
const Tweet = function (props) {
  return (
    <div className="tweet-feed">
      <Well>
        <div>
          <Col xs={6} md={2}>
            <img src={this.state.tweets.avatar_url} alt="avatar" className="avatar"></img>
          </Col>
          <span><b>{this.state.tweets.username} </b></span><span><a href={'https://twitter.com/' + this.state.tweets.handle}>@{this.state.tweets.handle} </a></span><Badge><Moment format="DD/MM/YYYY">{this.state.tweets.created_at}</Moment></Badge>
          <p>{this.state.tweets.text}</p>
          <span className="pull-right"><i className="fa fa-fw fa-retweet pull-right"></i>{this.state.tweets.favorite_count} </span>
          <span className="pull-right"><i className="fa fa-fw fa-heart pull-right"></i>{this.state.tweets.retweet_count}</span>
        </div>
      </Well>
    </div>
  )
}
```
