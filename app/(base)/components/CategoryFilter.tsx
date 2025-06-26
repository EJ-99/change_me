"use client";

import { Category } from "@/hooks/useCategories";
import React from "react";
import styles from "./CategoryFilter.module.scss";

type CategoryFilterProps = {
    selected: number | "all";
    categories: Category[];
    onChange: (id: number | "all") => void;
};

export default function CategoryFilter({
    selected,
    categories,
    onChange,
}: CategoryFilterProps) {
    categories = [{ id: "all", name: "전체" }, ...categories];
    return (
        <ul className={styles.filter}>
            {categories.map((category) => (
                <li
                    key={category.id}
                    className={`${selected === category.id && styles.selected} ${styles.item}`}
                    onClick={() => onChange(category.id)}
                >
                    {category.name}
                </li>
            ))}
        </ul>
    );
}
