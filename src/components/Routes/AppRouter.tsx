import { GamePanel } from "../PlayGround/GamePanel"
import { Route, Routes } from "react-router-dom"

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<GamePanel />} />
    </Routes>
  )
}
