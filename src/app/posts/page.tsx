// app/blog/page.tsx
import Link from 'next/link';
import { getSortedPostsData } from '@/lib/posts';

export default function BlogIndexPage() {
  const allPostsData = getSortedPostsData();

  return (
    <section style={{ maxWidth: '768px', margin: '2rem auto', padding: '0 1rem' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Blog</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {allPostsData.map(({ id, date, title, excerpt }) => (
          <li key={id} style={{ marginBottom: '2rem' }}>
            <Link href={`/posts/${id}`} style={{ textDecoration: 'none' }}>
              <h2 style={{ fontSize: '1.5rem', color: '#1a73e8', margin: '0 0 0.5rem 0' }}>{title}</h2>
            </Link>
            <small style={{ color: '#5f6368' }}>{date}</small>
            <p style={{ color: '#3c4043', marginTop: '0.5rem' }}>{excerpt}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
