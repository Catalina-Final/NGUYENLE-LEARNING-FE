import React from "react";
import { Card, Button } from "react-bootstrap";
import Moment from "react-moment";
import api from "../redux/api";

const BlogCard = ({ blog }) => {
  const handleClickLike = () => {
    api.get(`/blogs/favorite/${blog._id}`);
  };

  const handleClick = () => {
    api.get(`/blogs/${blog._id}`);
  };

  return (
    // <Card className="card" onClick={() => handleClick(blog._id)}>
    //   <Card.Img
    //     variant="top"
    //     src={
    //       blog?.images?.length
    //         ? blog.images[0]
    //         : "https://via.placeholder.com/160x100"
    //     }
    //   />
    //   <Card.Body>
    //     <Card.Title>{blog.title}</Card.Title>
    //     <Card.Text>
    //       {blog.content.length <= 99
    //         ? blog.content
    //         : blog.content.slice(0, 99) + "..."}
    //     </Card.Text>
    //   </Card.Body>
    //   <Card.Footer>
    //     <small className="text-muted">
    //       <span className="text-muted">
    //         @{blog?.author?.name} wrote{" "}
    //         <Moment fromNow>{blog.createdAt}</Moment>
    //       </span>
    //     </small>
    //     <Button variant="primary" onClick={() => handleClickLike()}>
    //       Like
    //     </Button>
    //   </Card.Footer>
    // </Card>
    <li className="list-group-item" width="100%">
      <div className="card-idiom">
        <img
          src={
            blog?.images?.length
              ? blog.images[0]
              : "https://via.placeholder.com/160x100"
          }
          className="align-self-start mr-3"
          alt="..."
          width={100}
          height={100}
        />
        <div className="media-body d-flex flex-column align-items-start justify-content-around mt-2">
          <h5 className="mt-0 d-flex align-items-start">{blog.title}</h5>
          <span>
            <p>
              {blog.content.length <= 99
                ? blog.content
                : blog.content.slice(0, 99) + "..."}
            </p>
            <div className="content-footer d-flex align-items-start"></div>
          </span>
          <div className="d-flex align-items-start style-login mr-2">
            <span className="mr-2">
              Last update: <Moment fromNow>{blog.createdAt}</Moment>
            </span>
            <span className="mr-2">@{blog?.author?.name} wrote </span>
          </div>
          <Button variant="primary" onClick={() => handleClickLike()}>
            Like
          </Button>
        </div>
      </div>
    </li>
  );
};

export default BlogCard;
