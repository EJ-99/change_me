import { useRouter } from "next/navigation";
import { useAuthStore } from "@/stores/authStore";
import styles from "./ProfileDropdown.module.scss";
import Image from "next/image";

type ProfileDropDownProps = {
    onClose: () => void;
    menus: {
        to: string;
        imgPath: string;
        title: string;
    }[];
};

export default function ProfileDropdown({
    onClose,
    menus,
}: ProfileDropDownProps) {
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
            <div className={styles.menus}>
                {menus.map((menu) => (
                    <button
                        className={styles.menu}
                        key={menu.title}
                        onClick={() => handleClick(menu.to)}
                    >
                        <Image
                            src={menu.imgPath}
                            alt={menu.title}
                            width={25}
                            height={25}
                        />
                        <span>{menu.title}</span>
                    </button>
                ))}
            </div>
            {isAdmin() && (
                <button
                    onClick={() => handleClick("/admin")}
                    className={styles.user}
                >
                    카테고리 관리
                </button>
            )}
            <button
                onClick={() => handleClick("/member/profile")}
                className={styles.user}
            >
                프로필
            </button>
            <button onClick={handleLogout} className={styles.user}>
                로그아웃
            </button>
        </div>
    );
}
