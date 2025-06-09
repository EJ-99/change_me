"use client";
import React from "react";
import TestRecordList from "./components/TestRecordList";

export default function RecordPage() {
    // const searchParams = useSearchParams();
    // const currentPage: number = Number(searchParams.get("page")) || 1;
    // const mine: boolean = searchParams.get("mine") === "true" ? true : false;
    // const router = useRouter();
    // // 토큰 가져오기
    // const token = useAuthStore.getState().token;

    // const {
    //     habits,
    //     totalCount,
    //     totalPages,
    //     isLoading,
    //     } = useHabit(currentPage);
    return (
        <>
            {/* <CategorySelector /> */}
            {/* <StatusFilter /> */}
            {/* <HabitList /> */}
            <TestRecordList />
        </>
    );
}
