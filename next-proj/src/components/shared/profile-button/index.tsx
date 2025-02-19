"use client";

import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function ProfileButton() {
  const { data: session } = useSession();
  return (
    <>
      {!session ? (
        <div>
            <Button>
                <Link href="/auth/signup">Sign up </Link>
            </Button>
        <span>        </span>
            <Button>
                <Link href="/auth/signin">Sign in </Link>
            </Button>
        </div>
      ) : (
        <div className="flex items-center gap-2">
            <Button variant="destructive" onClick={() => signOut()}>
            Sign Out
          </Button>
          {session?.user?.image && (
            <Image
              src={session.user.image}
              alt={session.user.name || "user"}
              width={32}
              height={32}
              className="rounded-full"
            />
          )}
        </div>
      )}
    </>
  );
}