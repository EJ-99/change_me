"use client";

import Image from "next/image";
import styles from "./Loading.module.scss";

export default function Loading() {
    return (
        <div className={styles.container}>
            <Image
                src="/images/Loading.svg"
                alt="로딩 중 이미지"
                width={150}
                height={150}
                className={styles.image}
                priority
            />
            <p className={styles.text}>Loading</p>
        </div>
    );
}
