import React from "react";
import { Link } from '@reach/router'
import { DocContent } from "./DocContent";
import './Doc.scss'

const Documentation = () => {
  return (
    <div className="doc">
      <div className="doc-page ">
        <div className="doc-header ">
          <div className="title"> API Documentation | Help Center</div>
        </div>
        <div className="doc-content-card ">
          <div className="doc-grid">
            {DocContent.map((docItem, index) => {
              return (
                <div key={index} className="doc-grid-item">
                  <div className="doc-summary">
                    <h4>{docItem.title}</h4>
                    <p>{docItem.summary}</p>
                  </div>
                  <div className="doc-btn">
                    <Link to={`${docItem.id}`} className=" m-auto">
                      Read more
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
