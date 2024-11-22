'use client'
import { scrollToTarget } from "@/utils/utils";
export default function ButtonPrimary({ children, targetSection }) {
    return (
        <button className="btn btn-primary" onClick={() => scrollToTarget(targetSection)}>
            {children}
        </button>
    );
}