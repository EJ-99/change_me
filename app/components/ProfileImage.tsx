import Image from "next/image";
import styles from "./ProfileImage.module.scss";

type ProfileImageProps = {
    imgUrl: string;
};

export default function ProfileImage({ imgUrl }: ProfileImageProps) {
    return (
        <div className={styles.wrapper}>
            <Image src={imgUrl} alt="프로필" fill />
        </div>
    );
}
