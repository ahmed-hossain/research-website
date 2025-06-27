// lib/posts.ts
// (identical to last version; getAllPostSlugs returns [{ params: { slug } }, …])

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { compileMDX } from 'next-mdx-remote/rsc';
import MyCustomComponent from '@/components/MyCustomComponent';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => ({
    params: {
      slug: fileName.replace(/\.mdx$/, ''),
    },
  }));
}

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.mdx$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      id,
      ...(matterResult.data as { title: string; date: string; excerpt: string }),
    };
  });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostData(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { content, data } = matter(fileContents);

  const { content: mdxContent } = await compileMDX({
    source: content,
    components: { MyCustomComponent },
    options: { parseFrontmatter: false },
  });

  return {
    slug,
    frontmatter: data,
    content: mdxContent,
  };
}
