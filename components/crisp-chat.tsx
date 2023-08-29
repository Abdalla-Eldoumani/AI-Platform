"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("a36bd2bf-fafa-4e94-bbc6-23efd7e4a300");
    }, []);

    return null;
};