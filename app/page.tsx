import { redirect } from 'next/navigation';

// Forcing dynamic rendering solves the issue
// export const dynamic = 'force-dynamic';

export default function Home() {
  const action = async (formData: FormData) => {
    'use server';

    redirect('/not-found');
  };

  return (
    <form action={action}>
      <input name="name" type="text" />
      <button type="submit">Submit</button>
    </form>
  );
}
