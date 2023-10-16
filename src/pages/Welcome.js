import React from "react";
import style from "../style/welcome.module.css";
import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div className={style.WelcomeContainer}>
      <h1>Welcome!</h1>
      <div className={style.welcomeInfo}>
        <p>
          we're working hard to get clubhouse ready for everyone! While we wrap
          up the finishing touches, we're adding people gradually to make sure
          nothing breaks.
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <p>Paul, Rohan & and the clubhouse team</p>
      </div>
      <div className={style.actionBtn}>
        <Link
          exact
          to="/invite"
          className="primaryBtn d-flex align-items-center mb-3 text-decoration-none"
        >
            Get your username {" "}
            <img src="" alt="" />
        </Link>
        <Link className="text-decoration-none">Have an invite text? Sign in</Link>
      </div>
    </div>
  );
}
