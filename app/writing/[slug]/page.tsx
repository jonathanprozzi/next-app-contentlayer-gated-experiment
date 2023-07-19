import CheckBalance from '@/components/check-balance';
import { Mdx } from '@/components/mdx-components';
import { allPosts } from 'contentlayer/generated';
import { notFound } from 'next/navigation';

export const dynamicParams = true;

// export const generateStaticParams = async () =>
//   allPosts.map((post) => ({
//     slug: post._raw.flattenedPath.replace(/writing\/?/, ''),
//   }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post.slugAsParams === params.slug);

  if (!post) throw new Error(`Post not found for slug ${params.slug}`);
  return { title: post.title };
};

const PostLayout = ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  console.log('search params', searchParams);
  const post = allPosts.find((post) => post.slugAsParams === params.slug);
  if (!post) throw new Error(`Post not found for slug ${params.slug}`);

  if (searchParams.test === 'hi') {
    notFound();
  }

  // if (post.private === true) {
  //   notFound();
  // }

  return (
    <section className="max-auto max-w-xl py-8">
      <div className="mb-8">
        <CheckBalance />
        <h1 className="mt-2 scroll-m-20 text-4xl font-bold tracking-tight">
          {post.title}
        </h1>
      </div>
      <Mdx code={post.body.code} />
    </section>
  );
};

export default PostLayout;
