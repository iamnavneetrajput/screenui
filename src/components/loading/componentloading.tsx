import React from "react";

type ComponentLoadingProps = {
    size?: number | string; 
    color?: string;
    thickness?: number;
    text?: string;
    center?: boolean;
    className?: string;
    ariaLabel?: string;
};

export default function ComponentLoading({
    size = 40,
    color = "#2563eb",
    thickness = 4,
    text,
    center = false,
    className,
    ariaLabel = "Loading",
}: ComponentLoadingProps) {
    const numericSize =
        typeof size === "number" ? `${size}px` : (size as string);

    const containerStyle: React.CSSProperties = {
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        ...(center
            ? {
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: "100%",
                }
            : {}),
    };

    const srOnly: React.CSSProperties = {
        border: 0,
        clip: "rect(0 0 0 0)",
        height: 1,
        margin: -1,
        overflow: "hidden",
        padding: 0,
        position: "absolute",
        width: 1,
        whiteSpace: "nowrap",
    };

    // SVG uses viewBox 0 0 50 50; strokeDasharray creates the "spinner" look
    return (
        <div
            role="status"
            aria-live="polite"
            aria-label={ariaLabel}
            className={className}
            style={containerStyle}
        >
            <svg
                width={numericSize}
                height={numericSize}
                viewBox="0 0 50 50"
                aria-hidden="true"
                style={{ display: "block", flex: "0 0 auto" }}
            >
                <circle
                    cx="25"
                    cy="25"
                    r="20"
                    fill="none"
                    stroke={color}
                    strokeWidth={thickness}
                    strokeLinecap="round"
                    strokeDasharray="31.4 31.4"
                    transform="rotate(-90 25 25)"
                >
                    <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from="0 25 25"
                        to="360 25 25"
                        dur="0.9s"
                        repeatCount="indefinite"
                    />
                </circle>
            </svg>

            {text ? (
                <span style={{ fontSize: "0.9rem", color: "inherit" }}>{text}</span>
            ) : (
                <span style={srOnly}>{ariaLabel}</span>
            )}
        </div>
    );
}