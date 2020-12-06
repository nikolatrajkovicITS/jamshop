const dummyData = [
  {
    name: "Basic Dummy X",
    slug: "basic-dummy-x",
    price: 49.99,
    excerpt: "Something that you trully need, but haven’t know about it yet",
    imageUrl: "images/products/dummy.svg",
    description:
      "Something that you trully need, but haven’t know about it yet. Multiple winner of Community Awarads.",
    tag: "starter",
  },
  {
    name: "Basic Dummy",
    slug: "basic-dummy",
    price: 29.99,
    excerpt: "Something that you trully need, but haven’t know about it yet",
    imageUrl: "images/products/dummy.svg",
    description:
      "Something that you trully need, but haven’t know about it yet. Multiple winner of Community Awarads.",
    tag: "starter",
  },
  {
    name: "Dummy Club",
    slug: "dummy-club",
    price: 79.99,
    excerpt: "Something that you trully need, but haven’t know about it yet",
    imageUrl: "images/products/dummy.svg",
    description:
      "Something that you trully need, but haven’t know about it yet. Multiple winner of Community Awarads.",
    tag: "classic",
  },
  {
    name: "Dummy X Pro",
    slug: "dummy-x-pro",
    price: 149.99,
    excerpt: "Something that you trully need, but haven’t know about it yet",
    imageUrl: "images/products/dummy.svg",
    description:
      "Something that you trully need, but haven’t know about it yet. Multiple winner of Community Awarads.",
    tag: "master",
  },
  {
    name: "Great Dummy",
    slug: "great-dummy",
    price: 104.99,
    excerpt: "Something that you trully need, but haven’t know about it yet",
    imageUrl: "images/products/dummy.svg",
    description:
      "Something that you trully need, but haven’t know about it yet. Multiple winner of Community Awarads.",
    tag: "popular",
  },

  {
    name: "Wooden Dummy Pro",
    slug: "wooden-dummy-pro",
    price: 124.99,
    excerpt: "Something that you trully need, but haven’t know about it yet",
    imageUrl: "images/products/dummy.svg",
    description:
      "Something that you trully need, but haven’t know about it yet. Multiple winner of Community Awarads.",
    tag: "master",
  },

  {
    name: "Wooden Dummy",
    slug: "wooden-dummy",
    price: 104.99,
    excerpt: "Something that you trully need, but haven’t know about it yet",
    imageUrl: "images/products/dummy.svg",
    description:
      "Something that you trully need, but haven’t know about it yet. Multiple winner of Community Awarads.",
    tag: "popular",
  },
]

module.exports = {
  siteMetadata: {
    title: "BEJAMAS | GATSBY SHOP",
    description: "",
    author: "@bejamasio",
    data: dummyData,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-theme-ui",
    "gatsby-plugin-sass",

    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "./src/images/icon.png", // This path is relative to the root of the site.
      },
    },
  ],
}
