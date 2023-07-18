import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import remarkGfm from 'remark-gfm';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

export const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: `projects/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    private: {
      type: 'boolean',
      required: false,
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (project) => `${project._raw.flattenedPath}/`,
    },
    slugAsParams: {
      type: 'string',
      resolve: (project) =>
        project._raw.flattenedPath.split('/').slice(1).join('/'),
    },
  },
}));

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `writing/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    private: {
      type: 'boolean',
      required: false,
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (post) => `${post._raw.flattenedPath}/`,
    },
    slugAsParams: {
      type: 'string',
      resolve: (post) => post._raw.flattenedPath.split('/').slice(1).join('/'),
    },
  },
}));

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Project, Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: 'github-dark',
          onVisitLine(node: { children: string | any[] }) {
            if (node.children.length === 0) {
              node.children = [{ type: 'text', value: ' ' }];
            }
          },
          onVisitHighlightedLine(node: {
            properties: { className: string[] };
          }) {
            node.properties.className.push('line--highlighted');
          },
          onVisitHighlightedWord(node: {
            properties: { className: string[] };
          }) {
            node.properties.className = ['word--highlighted'];
          },
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['subheading-anchor'],
            ariaLabel: 'Link to section',
          },
        },
      ],
    ],
  },
});
