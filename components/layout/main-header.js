import classes from "./main-header.module.css";
import Link from "next/link";
function MainHeader() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">NextEvents</Link>
      </div>
      <nav className={classes.navigation}>
        <Link href="/events">Browse All Events</Link>
      </nav>
    </header>
  );
}

export default MainHeader;
