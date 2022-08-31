import React from "react";
import moment from "moment";
import { DocContent } from "./DocContent";
import "./Doc.scss";

const DocItem = ({ docItem }) => {
  const tmp = window.location.pathname.substring(
    window.location.pathname.lastIndexOf("/") + 1
  );
  const doc = DocContent.filter((item) => item.id === parseInt(tmp))[0];

  return (
    <div className="doc-item doc-page">
      <div className="template-content">
        <div className="template-content-header">
          <div className="title">{doc.title}</div>
        </div>
        <div className="template-content-body">
          <div className="doc-summary">
            <div className="summary">{doc.summary}</div>
            <div className="post-date">
              {moment(doc.date).format(" D MMMM yyyy")}
            </div>
          </div>
          <div className="container_doc" style={{padding: '5%'}}>
            <div
              className="doc-text"
              dangerouslySetInnerHTML={{ __html: doc.text }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocItem;
