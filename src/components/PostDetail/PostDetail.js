import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comment from "../Comment/Comment";

const PostDetail = () => {
  const { postId } = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [postId]);

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, [postId]);
  return (
    <div>
      <h3>This is {postId} </h3>
      <p>User posted: {post.postId} </p>
      <p>title: {post.title} </p>
      <p>post body: {post.body} </p>
      <p>Number of comments: {comments.length}</p>
      {
          comments.map((comment) =><Comment comment={comment}></Comment>)
      }
    </div>
  );
};

export default PostDetail;
