"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { signIn } from "next-auth/react";

const SignInPage = () => {
  return (
    <div>
      <Button
        variant={`outline`}
        onClick={() =>
          signIn("google", {
            redirect: true,
            redirectTo: "/",
          })
        }
      >
        Login with google
      </Button>
    </div>
  );
};

export default SignInPage;
