import React from "react";
import moments from "moment";

const Notifications = props => {
  const { notifications } = props;
  return (
    <div className="section">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Notifications</span>
          <ul className="notifications">
            {notifications &&
              notifications.map(item => {
                return (
                  <li key={item.id}>
                    <span className="pink-text">{item.user} </span>
                    <span>{item.content} </span>
                    <span className="grey-text note-date">
                      {moments(item.time.toDate()).fromNow()}
                    </span>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
