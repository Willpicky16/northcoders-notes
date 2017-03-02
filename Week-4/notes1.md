# Intro to React


## Example 1 - Initial React App

``` JavaScript
var React = require('react');
var ReactDOM = require('react-dom');

function formatName(user) {
  return user.firstName + " " + user.lastName;
}

function getGreeting (user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, stranger!</h1>;
}

var user = {
  firstName: 'Will', lastName: 'Pickering'
};

var welcome =
<h1 className="welcome">
  Hello, {formatName(user)}!
</h1>;

ReactDOM.render(
  getGreeting(user),
  document.getElementById('root')
);

```

## Example 2 - React Component

``` JavaScript
var Counter = React.createClass({
  render: function () {
    return (
      <div className="counter">
        Coffees drank today
        {": "}
        <span className="counter-value">1</span>
        <button>+</button>
        <button>-</button>
      </div>
    )
  }
})

var element = (
  <div>
    <h1>My Counter App</h1>
    <ul id="counter-list">
      <Counter/>
    </ul>
  </div>
)
```

``` JavaScript
var React = require('react');
var ReactDOM = require('react-dom');

var Counter = React.createClass({
  render: function () {
    return (
      <div className="counter">
        {this.props.title}
        {": "}
        <span className="counter-value">1</span>
        <button>+</button>
        <button>-</button>
      </div>
    )
  }
});

var App = React.createClass({
  render: function () {
    return (
      <div>
        <h1>My Counter App</h1>
        <ul id="counter-list">
          <li>
            <Counter title = "Coffees drank today"/>
          </li>
          <li>
            <Counter title = "Distance cycled"/>
          </li>
          <li>
            <Counter title = "Questions"/>
          </li>
        </ul>
      </div>
    )
  }
})

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```

`Props` - Readonly and doesn't get changed

`State` - Data that changes

## Example 3 - The use of `STATE`

``` JavaScript
var React = require('react');
var ReactDOM = require('react-dom');

var Counter = React.createClass({
  getInitialState: function () {
    return {
      value: 0
    }
  },
  render: function () {
    return (
      <div className="counter">
        {this.props.title}
        {": "}
        <span className="counter-value">{this.state.value} </span>
        <button onClick={this.handleIncrement}>+</button>
        <button onClick={this.handleDecrement}>-</button>
      </div>
    )
  },
  handleIncrement: function () {
    this.setState({
      value: this.state.value + 1
    });
  },
  handleDecrement: function () {
    this.setState({
      value: this.state.value - 1
    });
  }
});

var App = React.createClass({
  render: function () {
    return (
      <div>
        <h1>My Counter App</h1>
        <ul id="counter-list">
          <li>
            <Counter title = "Coffees drank today"/>
          </li>
          <li>
            <Counter title = "Distance cycled"/>
          </li>
          <li>
            <Counter title = "Questions"/>
          </li>
        </ul>
      </div>
    )
  }
})

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

```

## Example 4 - Has a data section that makes the app much smarter

``` JavaScript
var React = require('react');
var ReactDOM = require('react-dom');

var Counter = React.createClass({
  getInitialState: function () {
    return {
      value: 0
    }
  },
  render: function () {
    return (
      <div className="counter">
        {this.props.title}
        {": "}
        <span className="counter-value">{this.state.value} </span>
        <button onClick={this.handleIncrement}>+</button>
        <button onClick={this.handleDecrement}>-</button>
      </div>
    )
  },
  handleIncrement: function () {
    this.setState({
      value: this.state.value + 1
    });
  },
  handleDecrement: function () {
    this.setState({
      value: this.state.value - 1
    });
  }
});

var App = React.createClass({
  render: function () {
    return (
      <div>
        <h1>My Counter App</h1>
        <ul id="counter-list">
          {this.props.data.map(function (title) {
            return (
              <li>
                <Counter title={title}/>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
})

var data = ["Coffees drank today", "Distance cycled", "Questions", "Bugs Fixed"];

ReactDOM.render(
  <App data={data}/>,
  document.getElementById('root')
);
```



``` JavaScript
var React = require('react');
var ReactDOM = require('react-dom');

var commentBox = require('.components/commentBox');

var CommentBox = React.createClass({
  getInitialState: function () {
    return {
      comments: [
        {author: 'Will', text: 'Test test'},
        {author: 'Will test', text: 'Test test test'},
        {author: 'Will P', text: 'Test jdjdjdjdjdj'},
      ]
    }
  },
  render: function () {
    return (
      <div className="comment-box">
        <h1>Comment Box</h1>
        <CommentList comments = {this.state.comments}/>
        <CommentForm addComment={this.addComment}/>
      </div>
    );
  },
  addComment: function (newComment) {
    {/**const newComments = this.state.comments.slice();
    newComments.push(newComment)**/}
    this.setState({
      comments: this.state.comments.concat([newComment])
    });
  }
});

var CommentList = React.createClass({
  render: function () {
    return (
      <div className="comment-list">
        <h2>Comment List</h2>
        {this.renderComments()}
      </div>
    );
  },
  renderComments: function () {
    return this.props.comments.map(function (comment, i) {
      return (<Comment key={i} author={comment.author} text={comment.text}/>)
    })
  }
});

var CommentForm = React.createClass({
  getInitialState: function () {
    return {
      author: '',
      text: ''
    }
  },
  render: function () {
    return (
      <div className="comment-form">
        <h2>What are you thinking?</h2>
        <form onSubmit={this.handleSubmit}>
          <p><label>Name:</label></p>
          <input type="text" value={this.state.author} onChange={this.handleAuthorChange}></input>
          <p><label>Comment:</label></p>
          <textarea value={this.state.text} onChange={this.handleTextChange}></textarea>
          <button type="submit">Post Comment</button>
        </form>
      </div>
    );
  },
  handleSubmit: function (event) {
    event.preventDefault();
    if (this.state.author.length === 0 || this.state.text.length === 0) return

    var newComment = {
      author: this.state.author,
      text: this.state.text
    };
    this.props.addComment(newComment);

    this.setState({
      author: '', text: ''
    })
  },
  handleAuthorChange: function (event) {
    this.setState({
      author: event.target.value
    })
  },
  handleTextChange: function (event) {
    this.setState({
      text: event.target.value
    })
  }
});

var Comment = React.createClass({
  render: function () {
    return (
      <div className="comment">
        <p><b>{this.props.author}:</b>
        {" "}
        {this.props.text}</p>
      </div>
    );
  }
});

ReactDOM.render(
  <CommentBox />,
  document.getElementById('root')
);

```

``` JavaScript
    // Example 1
    const newComments = this.state.comments.slice();
    newComments.push(newComment)
    this.setState({
      comments: newComments
    });

    // Example 2
    this.setState({
      comments: this.state.comments.concat([newComment])
    });

```
