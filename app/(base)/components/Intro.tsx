import React from "react";
import { ClipboardList, ListTodo, MessageSquareText } from "lucide-react";
import styles from "./Intro.module.scss";
import { useAuthStore } from "@/stores/authStore";
import { useRouter } from "next/navigation";

export default function Intro() {
    const user = useAuthStore((state) => state.user);
    const router = useRouter();
    const handleClick = () => {
        if (user) {
            router.push("/member/daily-routine");
        } else {
            router.push("/login");
        }
    };
    return (
        <div className={styles.wrapper}>
            <div className={styles.titleSection}>
                <h1 className={styles.title}>꾸준함이 자라나는 공간</h1>
                <p className={styles.description}>
                    <span>Change Me</span>에서
                    <br /> 내일을 위한 루틴을 만들어보세요.
                </p>
                <button className={styles.button} onClick={handleClick}>
                    시작하기
                </button>
            </div>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <ListTodo size={20} />
                    <h3 className={styles.title}>오늘의 루틴</h3>
                    <p className={styles.description}>
                        매일 해야 할 일을 한눈에 확인하고 체크해보세요.
                    </p>
                </li>
                <li className={styles.item}>
                    <MessageSquareText size={20} />
                    <h3 className={styles.title}>데일리 메시지</h3>
                    <p className={styles.description}>
                        다른 사람들과 응원의 메시지를 주고받아보세요.
                    </p>
                </li>
                <li className={styles.item}>
                    <ClipboardList size={20} />
                    <h3 className={styles.title}>기록 보기</h3>
                    <p className={styles.description}>
                        쌓아온 루틴들을 돌아보며 성취감을 느껴보세요.
                    </p>
                </li>
            </ul>
        </div>
    );
}
