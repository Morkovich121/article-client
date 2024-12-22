"use client";

import CustomButton from "@/modules/shared/components/CustomButton/CustomButton";
import { useRouter } from "next/navigation";

export default function NotFoundPage() {
  const router = useRouter();

  const onBackClick = () => {
    router.push("/");
  };

  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404</h1>
      <h2 className="not-found-subtitle">Oops! Page not found</h2>
      <p className="not-found-description">
        The page you are looking for does not exist or has been moved.
      </p>
      <CustomButton text="Go back home" onClick={onBackClick} usePrevButton />
    </div>
  );
}
