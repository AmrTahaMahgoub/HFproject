
import React from "react"
import { ActivityIndicator } from "react-native"

export const Loader = ({ loading }: { loading?: boolean }) => {
    return (
        loading ? <ActivityIndicator color={"blue"} size="small" /> : null
    )
}