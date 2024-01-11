import { getServerSession } from "next-auth";

export default async function About() {
  try {
    const user = await getServerSession();
  } catch (e) {
    console.log(e);
  }
  return (
    <main>
      <h2>About</h2>
    </main>
  );
}
