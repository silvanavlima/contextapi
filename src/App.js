// import React, { useContext } from 'react';
import './App.css';
// import { UserProvider } from './components/UserContext';


//a ideia da context api é nao precisar ficar passando props pra baixo.
/* Em uma aplicação típica do React, os dados são passados de cima para baixo
(de pai para filho) via props.Mas isso pode dar um pouco de trabalho em certos tipos de props(como preferências locais ou tema de UI),
 que são utilizadas por muitos componentes dentro da aplicação.Contexto(context) fornece a forma de compartilhar dados como esses,
  entre todos componentes da mesma árvore de componentes, sem precisar passar explicitamente props entre cada nível. */

/*   Quando Usar Contexto
  Contexto (context) é indicado para compartilhar dados que podem ser considerados “globais” para a árvore de componentes do React.
   Usuário autenticado ou o idioma preferido, são alguns casos comuns. */
// theme object
import React from "react";
import ThemeContext from './components/Theme';
import Home from './components/Home';

const themes = {
  red: "#ff0000",
  green: "#00ff00",
  blue: 'blue'
};
// provide context to components
const App = () => {
  return (
    <ThemeContext.Provider value={themes}>
      <Home />
    </ThemeContext.Provider>
  );
};



export default App;