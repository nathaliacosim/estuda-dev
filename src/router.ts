import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Alunos from "./pages/Alunos.tsx";
import ProgramacaoBasica from "./pages/ProgramacaoBasica.tsx";
import Aula0 from "./pages/Aula0.tsx";

const router = createBrowserRouter([
  {
    path: "/alunos",
    Component: Alunos,
  },
  {
    path: "/programacao-basica",
    Component: ProgramacaoBasica,
  },
  {
    path: "/aula0",
    Component: Aula0,
  },
  {
    path: "*",
    Component: Home,
  },
]);

export default router;
