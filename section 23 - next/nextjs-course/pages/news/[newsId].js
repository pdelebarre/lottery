import { useRouter } from "next/router";

function DetailPage() {
  const router = useRouter();

  const val = router.query.newsId;

  return <h1>Detail Page for {val}</h1>;
}

export default DetailPage;
