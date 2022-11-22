import { useRouter } from "next/router";

// our-domain.com/news/something-important

function DetailPage() {
  const router = useRouter();

  const newsId = router.query.newsId;

  // here we could send a request to the backend API
  // to fetch the news item with newsId

  return <h1>The detail page!</h1>;
}

export default DetailPage;
