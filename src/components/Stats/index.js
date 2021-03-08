import React from "react"
import { useSelector } from "react-redux"
import { StatsCard, StatsTitle, ProgressBar } from "./styled"
import useWindowDimensions from "../../utils/windowDimensions"

export default function Stats() {
  const { width } = useWindowDimensions()
  const state = useSelector((state) => state)
  const convertToNameCase = (name = "") => {
    return name.split("-").join(" ")
  }

  return (
    <StatsCard width={width}>
      {state.detail.data.stats.map((item, i) => (
        <div key={i}>
          <StatsTitle>
            {convertToNameCase(item.stat.name)}: {item.base_stat}
          </StatsTitle>
          <div className="progress">
            <ProgressBar
              className="progress-bar"
              width={(item.base_stat * 100) / 200}
            />
          </div>
        </div>
      ))}
    </StatsCard>
  )
}
