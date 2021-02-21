import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div className="not-found">
      <h1>Oooops.....</h1>
      <h2>Page not found.</h2>
      <p>
        Go back to the{" "}
        <Link href="/">
          <a>homepage</a>
        </Link>
        .
      </p>
    </div>
  );
}
