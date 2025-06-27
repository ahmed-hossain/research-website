// app/components/MyCustomComponent.tsx
export default function MyCustomComponent() {
  return (
    <div
      style={{
        padding: '1rem',
        backgroundColor: '#eef4ed',
        borderLeft: '4px solid #4caf50',
        borderRadius: '4px',
        margin: '1.5rem 0',
      }}
    >
      <p style={{ margin: 0, fontStyle: 'italic', color: '#333' }}>
        👋 This is a custom React component rendered from within a Markdown file!
      </p>
    </div>
  );
}
