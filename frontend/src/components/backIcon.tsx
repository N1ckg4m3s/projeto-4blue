import React from "react"

interface componentProps {
    onClick?: (page: string | number) => void
}

export const BackIcon: React.FC<componentProps> = ({ onClick }) => {

    return (<svg
        onClick={() => onClick?.(-1)}
        width="26"
        height="26"
        viewBox="0 0 24 24"
        style={{ cursor: "pointer" }}
    >
        <path
            d="M15 18l-6-6 6-6"
            fill="none"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>)
}
