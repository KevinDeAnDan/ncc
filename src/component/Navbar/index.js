import styles from "./Navbar.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Navbar() {
  return (
    <>
      <div className={cx("wapper")}>
        <div className={cx("nav", "nav__home")} >Home</div>
        <div className={cx("nav")}>Services</div>
        <div className={cx("nav")}>News</div>
        <div className={cx("nav")}>Blog</div>
        <div className={cx("nav")}>Contact</div>
      </div>
    </>
  );
}

export default Navbar;
