"use client";

//react
import React, { CSSProperties } from "react";
//components
import Image from "next/image";
//styles
import styles from "./CustomButton.module.css";

interface CustomButtonProps {
  text: string;
  onClick: () => void;
  useNextButton?: boolean;
  usePrevButton?: boolean;
  style?: CSSProperties;
}

export default function CustomButton({
  text,
  onClick,
  useNextButton,
  usePrevButton,
  style,
}: CustomButtonProps) {
  return (
    <button className={styles.customButton} onClick={onClick} style={style}>
      {usePrevButton && (
        <Image
          src="/assets/icons/arrow-circle-left.svg"
          alt="Next"
          className={styles.prevIcon}
          width={20}
          height={20}
        />
      )}
      {text}
      {useNextButton && (
        <Image
          src="/assets/icons/arrow-circle-right.svg"
          alt="Next"
          className={styles.nextIcon}
          width={20}
          height={20}
        />
      )}
    </button>
  );
}
