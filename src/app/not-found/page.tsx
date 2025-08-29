"use client"; // ✅ Must be FIRST line in file

export const dynamic = "force-dynamic"; // Optional: prevent static generation

import { useUser } from "@clerk/nextjs";

export default function NotFound() {
  const { isSignedIn } = useUser();

  return (
    <div>
      <h1>404 - Page Not Found</h1>
      {isSignedIn ? (
        <p>You&apos;re signed in.</p>
      ) : (
        <p>You are not signed in.</p>
      )}
    </div>
  );
}
