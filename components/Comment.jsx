import React from "react";
import { comments } from "../libs/comments";
import Reply from "./Reply";

export default function Comment(props) {
  const comment = comments;
  return (
    <div>
      {/* Entire Comment div */}
      <div>
        {comment.map((a, i) => {
          return (
            <div className="d-flex gap-2 my-2">
              <img
                src={`${a.userImagePath}`}
                width="48"
                height="48"
                className="rounded-circle"
                style={{ objectFit: "cover" }}
              />
              <div
                className="rounded rounded-3 p-2"
                style={{ backgroundColor: "#3A3B3C" }}
              >
                <span className="fw-semibold" style={{ color: "#E4E6EB" }}>
                  {a.username}
                </span>
                <br />
                <span style={{ color: "#E4E6EB" }}>{a.commentText}</span>
                <div
                  className="d-flex align-items-center gap-1"
                  style={{ display: a.likeNum > 0 ? "" : "none" }}
                >
                  <img src="/like.svg" width={20}></img>
                  <span style={{ color: "#B0B3B8" }}>999 คน</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/*render Reply here... */}
    </div>
  );
}
