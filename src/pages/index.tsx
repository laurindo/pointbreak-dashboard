export default function Home() {}

export async function getServerSideProps(context) {
  return {
    redirect: { destination: '/auth/signin' },
  };
}
