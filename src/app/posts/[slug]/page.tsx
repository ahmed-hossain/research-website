// src/app/posts/[slug]/page.tsx

import { getPostData, getAllPostSlugs } from '@/lib/posts';
import { notFound } from 'next/navigation';

// 1) Return Array<{ slug: string }> for static export
export async function generateStaticParams(): Promise<Array<{ slug: string }>> {
  return getAllPostSlugs().map(({ params }) => params);
}

export default async function Post({
  params,
}: {
  // 2) Explicitly type params as a Promise of your slug object
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  try {
    const postData = await getPostData(slug);

    return (
      <article style={{ maxWidth: '768px', margin: '2rem auto', padding: '0 1rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>
          {postData.frontmatter.title}
        </h1>
        <div style={{ color: '#5f6368', marginBottom: '2rem' }}>
          Published on {postData.frontmatter.date}
        </div>
        <div className="prose">{postData.content}</div>
      </article>
    );
  } catch (error) {
    console.error(error);
    notFound();
  }
}
