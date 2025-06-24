import { useRouter } from "next/navigation";
import { useAuthStore } from "@/stores/authStore";
import styles from "./ProfileDropdown.module.scss";

type ProfileDropDownProps = {
    onClose: () => void;
};

export default function ProfileDropdown({ onClose }: ProfileDropDownProps) {
    const { logout, isAdmin } = useAuthStore();
    const router = useRouter();

    const handleLogout = () => {
        router.push("/");
        logout();
    };

    const handleClick = (to: string) => {
        router.push(to);
        onClose();
    };

    return (
        <div className={styles.wrapper}>
            {isAdmin() && (
                <button
                    onClick={() => handleClick("/admin")}
                    className={styles.button}
                >
                    카테고리 관리
                </button>
            )}
            <button
                onClick={() => handleClick("/member/profile")}
                className={styles.button}
            >
                프로필
            </button>
            <button onClick={handleLogout} className={styles.button}>
                로그아웃
            </button>
        </div>
    );
}
