import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();

  const { data: post, isLoading } = useQuery({
    queryKey: ["post", slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .eq("slug", slug!)
        .single();
      if (error) throw error;
      return data;
    },
    enabled: !!slug,
  });

  if (isLoading) {
    return (
      <Layout>
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-4 max-w-3xl animate-pulse space-y-6">
            <div className="h-8 bg-muted rounded w-1/4" />
            <div className="h-10 bg-muted rounded w-3/4" />
            <div className="h-64 bg-muted rounded-2xl" />
            <div className="space-y-3">
              <div className="h-4 bg-muted rounded" />
              <div className="h-4 bg-muted rounded w-5/6" />
              <div className="h-4 bg-muted rounded w-4/6" />
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  if (!post) {
    return (
      <Layout>
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold mb-4">Статья не найдена</h1>
            <Button variant="outline" asChild>
              <Link to="/blog">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Назад к статьям
              </Link>
            </Button>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Button variant="ghost" asChild className="mb-8">
              <Link to="/blog">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Все статьи
              </Link>
            </Button>

            <div className="flex items-center gap-3 mb-4">
              {post.category && (
                <Badge variant="secondary">{post.category}</Badge>
              )}
              <span className="text-sm text-muted-foreground flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date(post.published_at).toLocaleDateString("ru-RU", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-8">{post.title}</h1>

            {post.image_url && (
              <img
                src={post.image_url}
                alt={post.title}
                className="w-full rounded-2xl mb-8 object-cover max-h-[400px]"
              />
            )}

            <div
              className="prose prose-lg max-w-none prose-headings:font-montserrat prose-a:text-[hsl(var(--purple-deep))]"
              dangerouslySetInnerHTML={{ __html: post.content || "" }}
            />
          </motion.div>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
