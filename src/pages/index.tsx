export async function getServerSideProps() {
  const data = JSON.stringify({ time: new Date() });
  return { props: { data } };
}

export default function Home({ data }: { data: string }) {
  const serverData = JSON.parse(data);
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <h1>tech-blog</h1>
      <h2>
        Welcome to{' '}
        <a href="https://nextjs.org">Next.js! The time is {serverData.time}</a>
      </h2>
    </main>
  );
}