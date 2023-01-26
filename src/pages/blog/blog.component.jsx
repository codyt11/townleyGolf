import React from "react";
import Container from 'react-bootstrap/Container';
import Blogs from '../../blogs';

import './blog.css';


const Blog = () => (
    <div className="blog">
        <Container className="blog-contain">
            <h1 className="title">My Golf Journey!</h1>
            <div className="blog-post">
                {Blogs.map((posts) => (
                    <div className="post" key={posts.title}>
                        <h3>{posts.title}</h3>
                        <span>{posts.content}</span>
                    </div>
                ))}
            </div>
        </Container>
    </div>
);

export default Blog;