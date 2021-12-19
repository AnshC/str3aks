/** @jsxImportSource theme-ui */
import styles from "../styles/Components.module.css";
import { H2 } from "./Headings";
import { FaFire } from "react-icons/fa";
import { handleSignUp } from "../functions/auth";
import { useState } from "react";
import Loading from "./Loading";

export default function AuthForm(props) {

  const [userPassword, setUserPassword] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [loading, setLoading] = useState(false);

  function formSubmit(e) {
    e.preventDefault();
    if (props.fn === "signin") {
      console.log("sign in");
    } else if (props.fn === "signup") {
      console.log("sign up");
      setLoading(true);
      handleSignUp(userEmail, userPassword).then((data) => {
        setLoading(false);
        if (data !== null) {
          setLoading(false);
        }
      });
    }
  }
  if (loading === true) {
    return (<Loading />);
  } else {
    return (
      <div>
        <form className={styles.form} sx={{ backgroundColor: "bgTransparent" }}>
          <H2 SX={{ color: "primary" }}>{props.head}</H2>
          <p className={styles.desc}>{props.description}</p>
          <p>{props.alt}</p>
          <div className={styles.values}>
            <label htmlFor="email">Email</label>
            <input
              sx={{ backgroundColor: "bgTransparent", color: "text" }}
              type="text"
              id="email"
              placeholder="example@mail.com"
              onInput={(e) => {
                setUserEmail(e.target.value);
              }}
            />
            <label htmlFor="password">Password</label>
            <input
              sx={{ backgroundColor: "bgTransparent", color: "text" }}
              type="password"
              id="password"
              placeholder="Something secret."
              onInput={(e) => {
                setUserPassword(e.target.value);
              }}
            />
          </div>
          <button
            onClick={(e) => {
              formSubmit(e);
            }}
          >
            <FaFire className={styles.icon} />
            {props.button}
          </button>
        </form>
      </div>
    );
  }
}
