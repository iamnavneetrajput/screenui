'use client'
import React from "react"
import { Toggle } from "@/packages/Toggle"

export default function BasicToggle() {
    const [basicToggle, setBasicToggle] = React.useState(false)

    return (
        <Toggle
            size="md"
            checked={basicToggle}
            onChange={setBasicToggle}
            toggleClassName={basicToggle ? "bg-green-500" : "bg-zinc-300"}
            thumbClassName="bg-white shadow"
        />
    )
}