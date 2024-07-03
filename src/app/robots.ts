import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        disallow: [
          "/_next/",
          "/wp-admin",
          "/wp-login.php",
          "/wp-register.php",
          "/tag/*",
          "/author/*",
          "/category/*",
          "/?/*",
          "/page/*",
        ],
      },
      {
        userAgent: "ChatGPT-user",
        disallow: ["/"],  // This disallows everything for the ChatGPT-user agent
      },
    ],
    sitemap: "https://adaired.com/sitemap.xml",
  };
}
