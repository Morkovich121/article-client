"use client";

//next
import { useRouter } from "next/navigation";
//components
import CustomButton from "@/modules/shared/components/CustomButton/CustomButton";

export default function ArticleBackButton() {
  const router = useRouter();

  const onBackClick = () => {
    router.push("/");
  };

  return (
    <CustomButton
      text="Back"
      onClick={onBackClick}
      usePrevButton
      style={{ backgroundColor: "#084B83", width: "160px", marginTop: "15px" }}
    />
  );
}
