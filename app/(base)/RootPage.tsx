"use client";

import { useRouter, useSearchParams } from "next/navigation";
import Loading from "../components/Loading";
import { useAnonHabits } from "@/hooks/useAnonHabits";
import styles from "./page.module.scss";
import Intro from "./components/Intro";
import BottomSection from "./components/BottomSection";
import HabitStatus from "./components/HabitStatusSection/HabitStatus";

export default function RootPage() {
    const searchParams = useSearchParams();
    const router = useRouter();

    const { countInfo, habits, isLoading: isHabitLoading } = useAnonHabits(-1);

    return (
        <div className={styles.page}>
            <section className={styles.section}>
                <Intro />
            </section>
            <section className={styles.section}>
                <HabitStatus />
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
