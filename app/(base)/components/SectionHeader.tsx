import styles from "./SectionHeader.module.scss";

type SectionHeaderProps = {
    title: string;
    description: string;
};

export default function SectionHeader({
    title,
    description,
}: SectionHeaderProps) {
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>
        </div>
    );
}
