import styles from "./page.module.css";
import ClientKakaoMap from "@/component/map/ClientKakaoMap";

export default function Home() {
    return (
        <div className={styles.page}>
            <ClientKakaoMap />
        </div>
    );
}