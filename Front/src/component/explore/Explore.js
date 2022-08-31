import React, { useState, useEffect } from "react";
import { backLink } from "../../constant/constant";

import "./Explore.scss";

export const shortStr = (adr) => {
  if (adr.length > 21) {
    const short = adr.substring(0, 9) + "...." + adr.slice(-10);
    return short;
  }
  return adr;
};

const Explore = () => {
  const [dataSet, setData] = useState(undefined);

  const clickLink = async (link) => {
    await fetch(`${backLink}/website/view`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: link.ID_LINK,
      }),
    }).then(async (res) => {
      console.log(res);
      window.location.href = link.LINK;
    });
  };

  const loadData = async () => {
    const tmp = await fetch(`${backLink}/website`).then(async (res) =>
      res.json()
    );
    if (tmp.websites) setData(tmp.websites);
  };
  useEffect(() => {
    if (!dataSet) loadData();
  });

  return (
    <div>
      <div className="title">Website Explorer</div>
      <div className="container_explore">
        <div>
          <table style={{ width: "100%" }}>
            <tr className="table_bg">
              <td className="td_title ">Title</td>
              <td className="td_title ">Link</td>
              <td className="td_title ">Like</td>
              <td className="td_title ">View</td>
            </tr>
          </table>
          <div className="separator_bold"></div>
          {dataSet &&
            dataSet.map((item, index) => {
              return (
                <>
                  <table style={{ width: "100%" }}>
                    <tr
                      className={
                        index % 2 === 0
                          ? "table_data_pair_bg"
                          : "table_data_unpair_bg"
                      }
                    >
                      <td className="td_data">
                        <div>{shortStr(item.NAME)}</div>
                      </td>
                      <td className="td_data">
                        <div
                          onClick={() => {
                            clickLink(item);
                          }}
                        >
                          {shortStr(item.LINK)}
                        </div>
                      </td>
                      <td className="td_data">
                        <div>{item.NB_LIKE}</div>
                      </td>
                      <td className="td_data">
                        <div>{item.NB_VIEW}</div>
                      </td>
                    </tr>
                  </table>
                  <div className="separator" />
                </>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Explore;
