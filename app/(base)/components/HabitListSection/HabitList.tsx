"use client";

import React, { useState } from "react";
import { useAnonHabits, AnonHabit as Habit } from "@/hooks/useAnonHabits";
import { useCategories } from "@/hooks/useCategories";
import styles from "./HabitList.module.scss";
import SectionHeader from "../SectionHeader";
import CategoryFilter from "../CategoryFilter";
import HabitGrid from "./HabitGrid";
import Loading from "@/app/components/Loading";
import useModalStore from "@/stores/modalStore";

export default function HabitList() {
    const [selectedCategoryId, setSelectedCategoryId] = useState(-1);
    const { categories } = useCategories(true);
    const { habits, isLoading } = useAnonHabits(selectedCategoryId);
    const openModal = useModalStore((state) => state.openModal);

    return (
        <div className={styles.wrapper}>
            <SectionHeader
                title="꾸준함이 만들어낸 결과"
                description="회원들이 최근 달성한 다양한 루틴들을 확인해보세요."
            />
            <CategoryFilter
                selected={selectedCategoryId}
                categories={categories}
                onChange={(id: number) => setSelectedCategoryId(id)}
            />
            {isLoading ? (
                <Loading />
            ) : (
                <HabitGrid
                    habits={habits}
                    onClickHabit={(habit: Habit) =>
                        openModal("habitPreview", { habit })
                    }
                />
            )}
        </div>
    );
}
