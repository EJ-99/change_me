"use client";

import styles from "./page.module.scss";
import Intro from "./components/Intro";
import HabitList from "./components/HabitListSection/HabitList";
import HabitStatus from "./components/HabitStatusSection/HabitStatus";

export default function RootPage() {
    return (
        <div className={styles.page}>
            <section className={styles.section}>
                <Intro />
            </section>
            <section className={styles.section}>
                <HabitStatus />
            </section>
            <section className={styles.section}>
                <HabitList />
            </section>
        </div>
    );
}
