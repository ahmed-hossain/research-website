// app/blog/[slug]/page.tsx
import { getPostData, getAllPostSlugs } from '@/lib/posts';
import { notFound } from 'next/navigation';

// This function generates the static pages for each blog post at build time.
export async function generateStaticParams() {
  const paths = getAllPostSlugs();
  return paths;
}

export default async function Post({ params }: { params: { slug: string } }) {
  try {
    const postData = await getPostData(params.slug);
    
    return (
      <article style={{ maxWidth: '768px', margin: '2rem auto', padding: '0 1rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{postData.frontmatter.title}</h1>
        <div style={{ color: '#5f6368', marginBottom: '2rem' }}>
          Published on {postData.frontmatter.date}
        </div>
        <div className="prose">
            {postData.content}
        </div>
      </article>
    );
  } catch (error) {
    // If a post is not found, return the 404 page
    notFound();
  }
}