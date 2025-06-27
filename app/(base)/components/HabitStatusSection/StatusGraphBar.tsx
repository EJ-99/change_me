import styles from "./StatusGraphBar.module.scss";

const toPercent = (total: number, value: number) =>
    total === 0 ? 0 : Math.round((value / total) * 100);

type StatusGraphBarProps = {
    ongoing: number;
    success: number;
    failed: number;
};

export default function StatusGraphBar({
    ongoing,
    success,
    failed,
}: StatusGraphBarProps) {
    const total = ongoing + success + failed;
    const ongoingPercent = toPercent(total, ongoing);
    const successPercent = toPercent(total, success);
    const failedPercent =
        total === 0 ? 0 : 100 - (ongoingPercent + successPercent);

    return (
        <div
            className={`${styles.graphBar} ${total === 0 ? styles.empty : ""}`}
        >
            <div
                className={styles.ongoing}
                style={{ width: `${ongoingPercent}%` }}
            />
            <div
                className={styles.success}
                style={{ width: `${successPercent}%` }}
            />
            <div
                className={styles.failed}
                style={{
                    width: `${failedPercent}%`,
                }}
            />
        </div>
    );
}
