import { Fragment } from "react";
import Link from "next/link";

function NewsPage() {
  return (
    <Fragment>
      <h1>The News page</h1>
      <ul>
        <li>
          <Link href="/news/super">NextJS is a great framework</Link>
        </li>
        <li>something else</li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
