// import Anchor from "./Anchor";

/* eslint-disable */
function Layout({ children }) {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="/dogs/henry">Henry</a>
            </li>
            <li>
              <a href="/dogs/random-dog">Random Dogs</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>{children}</main>
      <footer>Footer content</footer>
    </>
  );
}

export default Layout;
