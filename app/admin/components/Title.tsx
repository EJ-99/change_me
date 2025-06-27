"use client";

import useModalStore from "@/stores/modalStore";
import React from "react";
import styles from "./Title.module.scss";
import { Plus } from "lucide-react";

type TitleProps = {
    createCategory: (name: string) => void;
};

export default function Title({ createCategory }: TitleProps) {
    const { openModal } = useModalStore();
    const handleCreateClick = () => {
        openModal("category", {
            type: "create",
            onConfirm: (input: string) => createCategory(input),
        });
    };

    return (
        <div className={styles.title}>
            <h2>카테고리 관리</h2>
            <button className={styles.addBtn} onClick={handleCreateClick}>
                <Plus size={18} strokeWidth={3} />
                <span>새로운 카테고리 추가</span>
            </button>
        </div>
    );
}
