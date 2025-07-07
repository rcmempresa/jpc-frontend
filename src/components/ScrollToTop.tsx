import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Componente que rola a janela para o topo da página a cada mudança de rota.
 * Deve ser renderizado dentro do BrowserRouter.
 */
function ScrollToTop() {
  // Obtém o objeto de localização atual, que inclui o pathname (o caminho da URL).
  const { pathname } = useLocation();

  // Este efeito é executado sempre que o 'pathname' (rota) muda.
  useEffect(() => {
    // Rola a janela para o topo (posição X=0, Y=0).
    window.scrollTo(0, 0);
  }, [pathname]); // A dependência 'pathname' garante que o efeito é re-executado na mudança de rota.

  // Este componente não renderiza nada no DOM, apenas executa um efeito colateral.
  return null;
}

export default ScrollToTop;
