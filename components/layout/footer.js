import classes from "./footer.module.css";
function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.footer__bottom}>
        <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
