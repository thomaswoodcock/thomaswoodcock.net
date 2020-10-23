import styles from "./Footer.module.css";

const Footer = () => (
  <footer className={styles.root}>
    <div className={styles.container}>
      <p>
        <small>
          &copy; <a href="https://github.com/thomaswoodcock">Thomas Woodcock</a>{" "}
          2020
        </small>
      </p>
    </div>
  </footer>
);

export default Footer;
