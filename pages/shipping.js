import { Store } from "@/utils/store";
import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";

function Shipping() {
  const router = useRouter();
  const { state } = useContext(Store);
  const { userInfo } = state;
  useEffect(() => {
    if (!userInfo) {
      router.push("/login?redirect=/shipping");
    }
  }, []);

  return <div>shipping</div>;
}

export default Shipping;
