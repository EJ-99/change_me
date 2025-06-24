"use client";

import { useAuthStore } from "@/stores/authStore";
import HeaderIcon from "./HeaderIcon";
import Link from "next/link";
import styles from "./Header.module.scss";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import ProfileDropdown from "./ProfileDropdown";
import ProfileImage from "./ProfileImage";

const iconLinks = [
    {
        to: "/member/daily-routine",
        imgPath: "/images/LogoDailyRoutine.svg",
        title: "오늘의 루틴",
    },
    {
        to: "/member/record",
        imgPath: "/images/LogoRecord.svg",
        title: "기록 보기",
    },
];

export default function Header() {
    const router = useRouter();
    const isLoggedIn = !!useAuthStore((state) => state.token);
    const user = useAuthStore((state) => state.user);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const profileRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent | TouchEvent) => {
            if (
                profileRef.current &&
                !profileRef.current.contains(e.target as Node)
            ) {
                setIsProfileOpen(false);
            }
        };

        addEventListener("mousedown", handleClickOutside);
        addEventListener("touchstart", handleClickOutside);

        return () => {
            removeEventListener("mousedown", handleClickOutside);
            removeEventListener("touchstart", handleClickOutside);
        };
    }, []);

    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <Link href="/" className={`${styles.logo}`}>
                    <Image
                        src={"/images/LogoChangeMe.svg"}
                        alt="Change Me"
                        width={50}
                        height={50}
                    />
                    <h1>Change Me</h1>
                </Link>
                {isLoggedIn ? (
                    <div className={styles.links}>
                        <nav className={styles.nav}>
                            {iconLinks?.map((link, idx) => (
                                <HeaderIcon
                                    key={idx}
                                    to={link.to}
                                    imgPath={link.imgPath}
                                    title={link.title}
                                />
                            ))}
                        </nav>
                        <div ref={profileRef}>
                            <button
                                onClick={() =>
                                    setIsProfileOpen((prev) => !prev)
                                }
                            >
                                <ProfileImage
                                    imgUrl={
                                        user?.imageUrl || "/images/Profile.svg"
                                    }
                                    alt="프로필"
                                    width={40}
                                    height={40}
                                />
                            </button>
                            {isProfileOpen && (
                                <ProfileDropdown
                                    onClose={() => setIsProfileOpen(false)}
                                />
                            )}
                        </div>
                    </div>
                ) : (
                    <button
                        className={styles.login}
                        onClick={() => router.push("/login")}
                    >
                        로그인
                    </button>
                )}{" "}
            </div>
        </header>
    );
}
