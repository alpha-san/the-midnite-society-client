import React, { Component } from 'react';
import BlogAPI from '../BlogAPI';

const Blog = () => (
    <div>
        <h1>Blog</h1>
        <div>
            {
            BlogAPI.all().map(post => (
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

export default Blog;