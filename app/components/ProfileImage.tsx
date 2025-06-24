import Image from "next/image";
import styles from "./ProfileImage.module.scss";

type ProfileImageProps = {
    imgUrl: string;
    alt: string;
    width: number;
    height: number;
};

export default function ProfileImage({
    imgUrl,
    alt,
    width,
    height,
}: ProfileImageProps) {
    return (
        <div className={styles.wrapper} style={{ width, height }}>
            <Image src={imgUrl} alt={alt} width={width} height={height} />
        </div>
    );
}
