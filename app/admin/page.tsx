import { Suspense } from "react";
import AdminPage from "./AdminPage";
import Loading from "../components/Loading";

export default function page() {
    return (
        <Suspense fallback={<Loading />}>
            <AdminPage />
        </Suspense>
    );
}
