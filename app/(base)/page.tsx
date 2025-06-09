import { Suspense } from "react";
import Loading from "../components/Loading";
import RootPage from "./RootPage";

export default function page() {
    return (
        <Suspense fallback={<Loading />}>
            <RootPage />
        </Suspense>
    );
}
