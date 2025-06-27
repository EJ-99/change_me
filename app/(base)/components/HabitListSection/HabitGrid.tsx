"use client";

import { AnonHabit as Habit } from "@/hooks/useAnonHabits";
import styles from "./HabitGrid.module.scss";
import Image from "next/image";
import { Trophy } from "lucide-react";

type HabitGridProps = {
    habits: Habit[];
    onClickHabit: (habit: Habit) => void;
};

export default function HabitGrid({ habits, onClickHabit }: HabitGridProps) {
    return habits.length === 0 ? (
        <div className={styles.empty}>
            <Trophy size={48} strokeWidth={1.5} />
            <p>
                아직 달성한 루틴이 없어요! <br />
                <span>첫 번째 루틴의 주인공</span>이 되어보세요.
            </p>
        </div>
    ) : (
        <div className={styles.grid}>
            {habits.map((habit) => (
                <button
                    key={habit.id}
                    className={styles.profileItem}
                    onClick={() => onClickHabit(habit)}
                >
                    <Image
                        src={habit.imageUrl ?? "/images/Profile.svg"}
                        alt={habit.userNickname}
                        fill
                        className={styles.image}
                    />
                </button>
            ))}
        </div>
    );
}
