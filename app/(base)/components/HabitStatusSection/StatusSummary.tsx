import { Loader, CheckCircle, XCircle } from "lucide-react";
import styles from "./StatusSummary.module.scss";

type StatusItemProps = {
    icon: React.ReactNode;
    value: number;
    label: string;
    color: string;
};

function StatusItem({ icon, value, label, color }: StatusItemProps) {
    return (
        <div className={styles.item}>
            <div
                className={styles.iconWrapper}
                style={{ backgroundColor: color }}
            >
                {icon}
            </div>
            <p className={styles.label}>{label}</p>
            <p className={styles.count}>{value}</p>
        </div>
    );
}

export default function StatusSummary({
    ongoing,
    success,
    failed,
}: {
    ongoing: number;
    success: number;
    failed: number;
}) {
    return (
        <div className={styles.summary}>
            <StatusItem
                icon={<Loader size={18} className="animate-spin" />}
                value={ongoing}
                label="진행 중"
                color="var(--color-main1)"
            />
            <StatusItem
                icon={<CheckCircle size={18} />}
                value={success}
                label="성공"
                color="var(--color-success)"
            />
            <StatusItem
                icon={<XCircle size={18} />}
                value={failed}
                label="실패"
                color="var(--color-lightRed)"
            />
        </div>
    );
}
