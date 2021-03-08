import styled from "@emotion/styled"

export const StatsCard = styled.div`
  margin-top: 2rem;
  background-color #f1f2f6;
  padding: 1rem ${(props) => (props.width < 800 ? "0" : "1.7rem")};
  padding-bottom: 2rem;
  width:100%;
  min-height: 10rem;
  border-radius: 8px;
`

export const StatsTitle = styled.div`
  text-transform: capitalize;
  margin-top: 0.5rem;
  font-size: 16px;
  color: #2f3542;
  font-family: "Exo", sans-serif;
  font-weight: 600;
`

export const ProgressBar = styled.div`
  width: ${(props) => props.width}%;
  background: linear-gradient(to right, #eccc68, #ff4757);
`
