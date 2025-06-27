// lib/posts.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { compileMDX } from 'next-mdx-remote/rsc';

// Import your custom components so they can be used in MDX
import MyCustomComponent from '@/components/MyCustomComponent';

const postsDirectory = path.join(process.cwd(), 'content/posts');

// This function gets all posts and sorts them by date for the blog index page.
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

// This function gets all possible slugs (filenames) for static generation.
export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory);
  // Returns an array that looks like:
  // [ { params: { slug: 'first-post' } }, ... ]
  return fileNames.map((fileName) => {
    return {
      slug: fileName.replace(/\.mdx$/, ''),
    };
  });
}

// This function gets the content for a single post.
export async function getPostData(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { content, data } = matter(fileContents);

  const { content: mdxContent } = await compileMDX({
    source: content,
    // Pass in the components you want to use
    components: {
      MyCustomComponent,
      // You can add other components here, e.g., <Callout />
    },
    options: {
      parseFrontmatter: false,
    },
  });

  return {
    slug,
    frontmatter: data,
    content: mdxContent,
  };
}
