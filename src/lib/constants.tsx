import { BoomBox, ChartNoAxesColumn, Chrome, Expand, Facebook, FileText, Globe, LeafyGreen, Linkedin, Mail, ShoppingCart, SquarePen, Twitter, Undo2, Youtube } from "lucide-react";

export const tabsListLabel = [
  {
    label: "All",
    type: "all"
  },
  {
    label: "Article and Blog",
    type: "article-blog"
  },
  {
    label: "Social Media",
    type: "social"
  },
  {
    label: "Writing",
    type: "writing"
  },
  {
    label: "Keyword Research",
    type: "research"
  },
  {
    label: "Ecommerce",
    type: "ecommerce"
  },
  {
    label: "Website",
    type: "website"
  }
] as const;

type TabsListLabelType = typeof tabsListLabel[number]['type'];

export type CategoryType = {
  title: string;
  description: string;
  color?: string | "white";
  icon?: React.ReactNode;
  type?: TabsListLabelType;
}

export const categoriesPopular: CategoryType[] = [
  {
    title: "Article and Blog",
    description: "Write your dream SEO article short time.",
    color: "#BAE5F5",
    icon: <FileText />,
  },
  {
    title: "Social Media",
    description: "Write compelling detailed product.",
    color: "#CCF0C0",
    icon: <BoomBox />,
  },
  {
    title: "Keyword Research",
    description: "Pick your excet keyword for rank anything.",
    color: "#E2D3FE",
    icon: <ChartNoAxesColumn />,
  }
]

export const categories: CategoryType[] = [
  {
    title: "Blog Idea",
    description: "Blog ideas generate more website traffic.",
    color: "242, 197, 44",
    icon: <SquarePen />,
    type: "article-blog",
  },
  {
    title: "Blog Intro",
    description: "Start write compelling introduction",
    color: "242, 197, 44",
    icon: <SquarePen />,
    type: "article-blog",
  },
  {
    title: "Article Generator",
    description: "Generate more copies with article AI",
    color: "242, 197, 44",
    icon: <SquarePen />,
    type: "article-blog",
  },
  {
    title: "Facebook Ads",
    description: "Facebooks ad copies that make your ads.",
    color: "66, 103, 178",
    icon: <Facebook />,
    type: "social",
  },
  {
    title: "Tweet Ideas",
    description: "Engage with your amazing followers",
    color: "29, 161, 242",
    icon: <Twitter />,
    type: "social",
  },
  {
    title: "LinkedIn Posts",
    description: "Engage your LinkedIn Targeted Audience",
    color: "1, 135, 232",
    icon: <Linkedin />,
    type: "social",
  },
  {
    title: "Youtube Descriptions",
    description: "YouTube description that help your videos",
    color: "255, 0, 0",
    icon: <Youtube />,
    type: "social",
  },
  {
    title: "Product Description",
    description: "Write compelling detailed product.",
    color: "242, 197, 44",
    icon: <LeafyGreen />,
    type: "writing",
  },
  {
    title: "Cold Emails",
    description: "Personalized email outreach to your target",
    icon: <Mail />,
    type: "writing",
  },
  {
    title: "Content Rephrase",
    description: "Rephrase your content in different voice.",
    color: "95, 24, 146",
    icon: <Undo2 />,
    type: "writing",
  },
  {
    title: "Sentence Expandar",
    description: "Expand short sentence into more descrive",
    color: "242, 197, 44",
    icon: <Expand />,
    type: "writing",
  },
  {
    title: "Keyword Research",
    description: "Pick your excet keyword for rank anything.",
    color: "242, 197, 44",
    icon: <ChartNoAxesColumn />,
    type: "research",
  },
  {
    title: "Amazon Product Descriptions",
    description: "Descriptions that will rank in first page",
    icon: <ShoppingCart />,
    type: "ecommerce",
  },
  {
    title: "Amazon Product Features",
    description: "Descriptions that will rank in first page",
    icon: <ShoppingCart />,
    type: "ecommerce",
  },
  {
    title: "Amazon Product Titels",
    description: "Powerful titels that rank on google",
    icon: <ShoppingCart />,
    type: "ecommerce",
  },
  {
    title: "Landing Page Headline",
    description: "A unique and memorable perfect headline",
    color: "194, 158, 35",
    icon: <Globe />,
    type: "website",
  },
  {
    title: "Landing Page",
    description: "Tailor high-converting landing page copies",
    color: "194, 158, 35",
    icon: <Globe />,
    type: "website",
  },
  {
    title: "SEO Meta Description",
    description: "Your website for maximum visibility",
    icon: <Chrome />,
    type: "website",
  },
]