"use client";

import { useRouter, useSearchParams } from "next/navigation";
import Loading from "../components/Loading";
import { useCategories } from "@/hooks/useCategories";
import { useAnonHabits } from "@/hooks/useAnonHabits";
import styles from "./page.module.scss";
import Intro from "./components/Intro";
import TopSection from "./components/TopSection";
import BottomSection from "./components/BottomSection";
import CategoryFilter from "./components/CategoryFilter";

export default function RootPage() {
    const searchParams = useSearchParams();
    const router = useRouter();

    let categoryId: number | "all" = "all";
    const categoryIdParam = Number(searchParams.get("categoryId"));
    if (categoryIdParam !== null && !isNaN(categoryIdParam)) {
        categoryId = categoryIdParam;
    }

    const { categories, isLoading: isCategoryLoading } = useCategories(true);
    const {
        countInfo,
        habits,
        isLoading: isHabitLoading,
    } = useAnonHabits(categoryId);

    const selectedCategory =
        categories.find((category) => category.id === categoryId)?.name ||
        "전체";

    const handleCategoryChange = (id: number | "all") => {
        router.push(`?categoryId=${id}`);
    };

    return (
        <div className={styles.page}>
            <section className={styles.section}>
                <Intro />
            </section>
            <section className={styles.section}>
                {isHabitLoading && isCategoryLoading ? (
                    <Loading />
                ) : (
                    <>
                        <CategoryFilter
                            selected={categoryId}
                            categories={categories}
                            onChange={handleCategoryChange}
                        />
                        <TopSection
                            countInfo={countInfo}
                            category={selectedCategory}
                        />
                    </>
                )}
            </section>
            <section className={styles.section}>
                {isHabitLoading ? (
                    <Loading />
                ) : (
                    <BottomSection habits={habits} />
                )}
            </section>
        </div>
    );
}
