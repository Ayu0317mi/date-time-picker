'use client';

export default function Home() {
  return (
    <main>
      <h1>Send Email</h1>
      <button
        style={{
          backgroundColor: '#007BFF',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
        onClick={async () => {
          await fetch('/api/emails', {
        method: 'POST',
        body: JSON.stringify({
          email: "n0217ayumi@gmail.com",
          firstname: "Ayumi",
        }),
          });
        }}
      >
        Send Email
      </button>
    </main>
  );
}
