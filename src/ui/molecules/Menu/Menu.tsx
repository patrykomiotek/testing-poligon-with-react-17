import { Link } from "@atoms/Link";

import styles from './Menu.module.scss';

const Menu = () => {
  return (
    <nav className={styles.main}>
      <Link to="/">Home</Link>
      <Link to="/products-hook">Products (hook)</Link>
      <Link to="/products-query">Products (query)</Link>
      <Link to="/products-redux">Products (redux)</Link>
      <Link to="/loan">Loan</Link>
      <Link to="/registration">Registration</Link>
    </nav>
  );
}

export { Menu };
