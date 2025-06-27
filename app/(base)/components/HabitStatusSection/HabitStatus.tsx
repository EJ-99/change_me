"use client";

import styles from "./HabitStatus.module.scss";
import SectionHeader from "../SectionHeader";
import { useAnonHabits } from "@/hooks/useAnonHabits";
import { useCategories } from "@/hooks/useCategories";
import { useState } from "react";
import CategoryFilter from "../CategoryFilter";
import StatusGraphBar from "./StatusGraphBar";
import StatusSummary from "./StatusSummary";

export default function HabitStatus() {
    const { categories } = useCategories(true);
    const [selectedId, setSelectedId] = useState(-1);
    const { countInfo } = useAnonHabits(selectedId);

    return (
        <div className={styles.wrapper}>
            <SectionHeader
                title="사람들은 어떤 루틴을 실천하고 있을까요?"
                description="카테고리를 선택해 전체 회원의 진행 현황을
                    확인해보세요."
            />
            <CategoryFilter
                selected={selectedId}
                categories={categories}
                onChange={(id: number) => setSelectedId(id)}
            />
            <StatusGraphBar
                ongoing={countInfo.ongoingCount}
                success={countInfo.successCount}
                failed={countInfo.failureCount}
            />
            <StatusSummary
                ongoing={countInfo.ongoingCount}
                success={countInfo.successCount}
                failed={countInfo.failureCount}
            />
        </div>
    );
}
