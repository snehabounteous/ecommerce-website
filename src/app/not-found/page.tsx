"use client";

import { useUser } from "@clerk/nextjs";

export default function NotFound() {
  const { isSignedIn } = useUser();

  return (
    <div>
      <h1>404 - Page Not Found</h1>
      {isSignedIn ? <p>Welcome back!</p> : <p>Please sign in.</p>}
    </div>
  );
}