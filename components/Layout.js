// import Anchor from "./Anchor";

/* eslint-disable */
import Anchor from "./Anchor";

function Layout({ children, navData }) {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Anchor href="#">Home</Anchor>
            </li>
            {navData.map((entry) => {
              return (
                <li key={entry.slug}>
                  <Anchor href={"/dogs" + entry.slug}>{entry.title}</Anchor>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>

      <main>{children}</main>
      <footer>Footer content</footer>
    </>
  );
}

export default Layout;
