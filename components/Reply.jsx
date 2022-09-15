import React from "react";
import { useState } from "react";

export default function Reply(props) {
  const [like, setLike] = useState(false);
  return (
    <div>
      {
        // Map through the replies
        props.reply.map((reply, i) => (
          <div className="d-flex gap-2 my-2 ps-5" key={i}>
            <img
              src={reply.userImagePath}
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
                {reply.username}
              </span>
              <br />
              <span style={{ color: "#E4E6EB" }}>{reply.replyText}</span>
              {reply.likeNum != 0 && (
                <div className="d-flex align-items-center gap-1">
                  <img src="/like.svg" width={20}></img>
                  <span style={{ color: "#B0B3B8" }}>{reply.likeNum} คน</span>
                </div>
              )}
            </div>
          </div>
        ))
      }
    </div>
  );
}
