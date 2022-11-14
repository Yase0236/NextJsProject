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
          </ul>
        </nav>
      </header>

      <main>{children}</main>
      <footer>Footer content</footer>
    </>
  );
}

export default Layout;
