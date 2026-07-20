import { Navbar } from "@/components/Navbar";
import BlogsComponent from "@/components/blogs";

const BlogsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-[72px]">
        <BlogsComponent />
      </main>
    </div>
  );
};

export default BlogsPage;
