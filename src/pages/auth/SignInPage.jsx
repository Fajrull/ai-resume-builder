import { SignIn } from "@clerk/clerk-react";
import React from "react";

function SignInPage() {
  return (
    <div>
      <div className="flex justify-center my-20">
        <SignIn />
      </div>
    </div>
  );
}

export default SignInPage;
