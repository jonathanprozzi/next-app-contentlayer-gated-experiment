import { Mdx } from '@/components/mdx-components';
import { allPosts } from 'contentlayer/generated';

export const generateStaticParams = async () =>
  allPosts.map((post) => ({
    slug: post._raw.flattenedPath.replace(/writing\/?/, ''),
  }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post.slugAsParams === params.slug);

  if (!post) throw new Error(`Post not found for slug ${params.slug}`);
  return { title: post.title };
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post.slugAsParams === params.slug);
  if (!post) throw new Error(`Post not found for slug ${params.slug}`);

  return (
    <section className="max-auto max-w-xl py-8">
      <div className="mb-8">
        <h1 className="mt-2 scroll-m-20 text-4xl font-bold tracking-tight">
          {post.title}
        </h1>
      </div>
      <Mdx code={post.body.code} />
    </section>
  );
};

export default PostLayout;
