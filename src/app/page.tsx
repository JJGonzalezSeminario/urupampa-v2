import { redirect } from 'next/navigation';

export default function RootPage() {
  // Redirige automáticamente al usuario a la versión en español
  redirect('/es');
}