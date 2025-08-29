
export const dynamic = "force-dynamic"; // Prevent static generation

"use client"; // Required to use Clerk hooks like useUser

import { useUser } from "@clerk/nextjs";

export default function NotFound() {
  const { isSignedIn } = useUser();

  return (
    <div>
      <h1>404 - Page Not Found</h1>
      {isSignedIn ? (
        <p>You're signed in.</p>
      ) : (
        <p>You are not signed in.</p>
      )}
    </div>
  );
}
