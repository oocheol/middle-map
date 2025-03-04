'use client';

import { useKakaoLoader } from "react-kakao-maps-sdk";
import PaintMap from "@/component/map/PaintMap";
import SearchForm from "@/component/map/SearchForm";

export default function ClientKakaoMap() {
    const [ loading, error ] = useKakaoLoader({
        appkey: process.env.KAKAO_APP_KEY || "",
        libraries: ["services"]
    });

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return <>
        <SearchForm/>
        <PaintMap />
    </>;
}