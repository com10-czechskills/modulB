'use client'
import { scrollToTarget } from "@/utils/utils";
export default function ButtonPrimaryOutline({ children, targetSection }) {
    return (
        <button className="btn btn-primary-outline" onClick={() => scrollToTarget(targetSection)}>
            {children}
        </button>
    );
}