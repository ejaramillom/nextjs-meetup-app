// our-domain.com/news

import { Fragment } from "react";
import Link from "next/link";

function NewsPage() {
  // using anchor tag 'a' to create a link is going to make a new request to the server
  return (
    <Fragment>
      <h1>The news page!</h1>
      <ul>
        <li>
          <Link href="/news/nextjs-is-great">Nextjs is great</Link>
        </li>
        <li>Another route</li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
