"use client";

import React from "react";
import Header from "../components/Header";

const iconLinks = [
    {
        to: "/",
        imgPath: "/images/LogoOurHabits.svg",
        title: "모두의 습관",
    },
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

export default function BaseLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Header iconLinks={iconLinks} />
            <main>{children}</main>
        </>
    );
}
