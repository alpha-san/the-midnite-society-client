import React, { Component } from 'react';

class Blog extends Component {
    state = {posts: []};

    componentDidMount() {
        fetch('/api/blog')
            .then(res => res.json())
            .then(posts => this.setState({posts}));

        console.log(this.state.posts);
    }

    render() {
        return (
            <div>
                <h1>Blog</h1>
                <div>
                {
                    this.state.posts.map(post => (
                    <div key={post.id}>
                        <h3>{post.title}</h3>
                        <h4>Posted by: {post.author}</h4>
                        <p>{post.date}</p>

                        <div>
                            {post.content}
                        </div>
                        <hr />
                    </div>
                    ))
                }
                </div>
            </div>
        );
    }
}

/*const Blog = () => {
    const posts = [];

    fetch('/api/blog')
        .then(res => res.json())
        .then(posts => {posts = this.posts});

    return (
    <div>
        <h1>Blog</h1>
        <div>
            {
            posts.map(post => (
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <h4>Posted by: {post.author}</h4>
                    <p>{post.date}</p>

                    <div>
                        {post.content}
                    </div>
                <hr />
                </div>
            ))
            }
        </div>
    </div>
    );
};*/

export default Blog;