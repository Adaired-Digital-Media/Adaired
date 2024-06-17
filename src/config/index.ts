export const NAV_ITEMS = [
  {
    label: "Home",
    value: "home" as const,
    href: "/",
  },
  {
    label: "About",
    value: "about" as const,
    href: "/about",
  },
  {
    label: "Services",
    value: "services" as const,
    href: "#",
    subItems: [
      {
        name: "Web Designing & Development",
        href: "/services/web-designing-and-development",
        subItems: [
          {
            name: "WordPress Development",
            href: "/services/wordpress-development",
          },
          {
            name: "Custom web development",
            href: "/services/custom-web-development",
          },
          {
            name: "WooCommerce",
            href: "/services/woocommerce",
          },
          {
            name: "Shopify Development",
            href: "/services/shopify-development",
          },
          {
            name: "PHP Development",
            href: "/services/php-development",
          },
          {
            name: "Laravel Development",
            href: "/services/laravel-development",
          },
        ],
      },
      {
        name: "Search Engine Optimization (SEO)",
        href: "/services/search-engine-optimization",
        subItems: [
          {
            name: "Technical SEO Analysis",
            href: "/services/technical-seo-analysis",
          },
          {
            name: "Online Reputation Management",
            href: "/services/online-reputation-management",
          },
          {
            name: "Competitor Backlink Outreach",
            href: "/services/competitor-backlink-outreach",
          },
          {
            name: "Guest Post Outreach",
            href: "/services/guest-post-outreach",
          },
          {
            name: "On-Page and Off-Page Optimization",
            href: "/services/on-page-and-off-page-optimization",
          },
          {
            name: "Local SEO (GBP)",
            href: "/services/local-seo",
          },
        ],
      },

      {
        name: "Paid Media & Advertising (PPC)",
        href: "/services/paid-media-and-advertising",
        subItems: [
          {
            name: "AdWords Audit",
            href: "/services/paid-media-and-advertising",
          },
          {
            name: "Keyword Research",
            href: "/services/paid-media-and-advertising",
          },
          {
            name: "Campaign Optimization",
            href: "/services/paid-media-and-advertising",
          },
          {
            name: "PPC Bid Management",
            href: "/services/paid-media-and-advertising",
          },
          {
            name: "Customized Ad Extensions",
            href: "/services/paid-media-and-advertising",
          },
          {
            name: "Creative Display Ads",
            href: "/services/paid-media-and-advertising",
          },
          {
            name: "Local Targeting Strategies",
            href: "/services/paid-media-and-advertising",
          },
          {
            name: "Conversion Tracking",
            href: "/services/paid-media-and-advertising",
          },
        ],
      },
      {
        name: "Compelling Content Marketing",
        href: "/services/compelling-content-marketing",
        subItems: [
          {
            name: "Content Audit",
            href: "/services/compelling-content-marketing",
          },
          {
            name: "Blogs & Articles",
            href: "/services/compelling-content-marketing",
          },
          {
            name: "Social Media Posts",
            href: "/services/compelling-content-marketing",
          },
          {
            name: "Infographics",
            href: "/services/compelling-content-marketing",
          },
          {
            name: "Email Marketing Draft",
            href: "/services/compelling-content-marketing",
          },
          {
            name: "Website Copies",
            href: "/services/compelling-content-marketing",
          },
          {
            name: "Guest Posting",
            href: "/services/compelling-content-marketing",
          },
          {
            name: "Google Business Profile Posts",
            href: "/services/compelling-content-marketing",
          },
        ],
      },
      {
        name: "Digital Creative & Logo Design",
        href: "/services/digital-creative-and-logo-design",
        subItems: [
          {
            name: "Website Graphics",
            href: "/services/digital-creative-and-logo-design",
          },
          {
            name: "Website Logo",
            href: "/services/digital-creative-and-logo-design",
          },
          {
            name: "Digital Broucher",
            href: "/services/digital-creative-and-logo-design",
          },
          {
            name: "Email Marketing Graphics",
            href: "/services/digital-creative-and-logo-design",
          },
          {
            name: "Business card, Letterhead etc.",
            href: "/services/digital-creative-and-logo-design",
          },
          {
            name: "Poster, Banner, Flyer and Signage",
            href: "/services/digital-creative-and-logo-design",
          },
          {
            name: "Social Media Graphics",
            href: "/services/digital-creative-and-logo-design",
          },
        ],
      },
      {
        name: "Strategic Social Media Management",
        href: "/services/strategic-social-media-management",
        subItems: [
          {
            name: "Social Media Optimization",
            href: "/services/social-media-optimization",
          },
          {
            name: "Social Media Marketing",
            href: "/services/social-media-marketing",
          },
        ],
      },
    ],
  },
  {
    label: "Resources",
    value: "resources" as const,
    href: "#",
    childrens: [
      {
        name: "Career",
        href: "https://career.adaired.com/jobs/Careers",
      },
      {
        name: "Case Studies",
        href: "/case-studies",
      },
      {
        name: "Blog",
        href: "/blog",
      },
    ],
  },
  {
    label: "Contact",
    value: "contact" as const,
    href: "/contact",
  },
];
