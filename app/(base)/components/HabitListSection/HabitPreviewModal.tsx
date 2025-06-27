"use client";

import Image from "next/image";
import styles from "./HabitPreviewModal.module.scss";
import { AnonHabit } from "@/hooks/useAnonHabits";
import useModalStore from "@/stores/modalStore";
import ModalWrapper from "@/app/components/ModalWrapper";
import { X } from "lucide-react";

type HabitPreviewModalProps = {
    habit: AnonHabit;
};

export default function HabitPreviewModal({ habit }: HabitPreviewModalProps) {
    const { closeModal } = useModalStore();
    const { imageUrl, userNickname, isActive, habitName, description } = habit;

    return (
        <ModalWrapper isOpen={true} onClose={closeModal}>
            <div className={styles.wrapper}>
                <div className={styles.closeButton} onClick={closeModal}>
                    <X size={25} />
                </div>
                <div className={styles.profile}>
                    <div className={styles.image}>
                        <Image
                            src={imageUrl ?? "/images/Profile.svg"}
                            alt={userNickname}
                            fill
                        />
                    </div>
                    <p className={styles.nickname}>
                        {isActive ? userNickname : "탈퇴한 회원"}
                    </p>
                </div>
                <div className={styles.habitInfo}>
                    <p className={styles.title}>{habitName}</p>
                    <p className={styles.description}>{description}</p>
                </div>
            </div>
        </ModalWrapper>
    );
}
