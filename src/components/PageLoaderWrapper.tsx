"use client";

import { useEffect, useState } from "react";
import Loader from "@/components/Loader";

const PageLoaderWrapper = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleDomContentLoaded = () => {
      setLoading(false);
    };

    if (
      document.readyState === "interactive" ||
      document.readyState === "complete"
    ) {
      // DOMContentLoaded allaqachon bo‘lgan
      setLoading(false);
    } else {
      // DOMContentLoaded bo‘lmagan bo‘lsa, tinglaymiz
      document.addEventListener("DOMContentLoaded", handleDomContentLoaded);
    }

    return () =>
      document.removeEventListener("DOMContentLoaded", handleDomContentLoaded);
  }, []);

  if (loading) return <Loader />;

  return <>{children}</>;
};

export default PageLoaderWrapper;
