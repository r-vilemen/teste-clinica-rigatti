import React, { useEffect } from "react";
import SEO from "@/components/SEO";
import { HomePageTextsSEO } from "@/components/SEO/seoTexts";
import { useRouter } from "next/router";

export default function Home() {
  const seoText = HomePageTextsSEO;
  const router = useRouter();

  useEffect(() => {
    router.push("/login");
  }, [router]);

  return (
    <div>
      <SEO
        title={seoText.title}
        description={seoText.description}
        keywords={seoText.keywords}
        author={seoText.author}
        url={seoText.url}
        image={seoText.image}
      />
    </div>
  );
}
