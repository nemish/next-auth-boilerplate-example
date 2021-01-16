import Head from "next/head";
import { useSession, signIn, signOut } from "next-auth/client";

export default function Home() {
  const [session, loading] = useSession();
  return (
    <div>
      <Head>
        <title>Mylists | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Home</h1>
      {loading && <p>Loading...</p>}
      {session && (
        <div>
          <p>Username: {session.user.name}</p>
          <div>
            <button onClick={() => signOut()}>Logout</button>
          </div>
        </div>
      )}
      {!session && (
        <div>
          <p>You are not logged in</p>
          <div>
            <button onClick={() => signIn()}>Login</button>
          </div>
        </div>
      )}
    </div>
  );
}
