import BlogDetailsPageComp from "@/components/blog-details-page-comp/BlogDetailsPageComp";

export const metadata = {
  title: "Latest Blog | SinanTokmak",
  description: "It is a Portfolio Website",
};

const BlogDetailsPage = ({ params }) => {
  return <BlogDetailsPageComp params={params} />;
};

export default BlogDetailsPage;
