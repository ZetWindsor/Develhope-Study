import React, { useContext, useState } from "react";
import { LanguageContext } from "./LanguageContext";

export function HelloWorld() {
  const language = useContext(LanguageContext);
  const [inputText, setInputText] = useState('');

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <div>
      <input type="text" placeholder="Inserisci testo"  value={inputText}  onChange={handleChange} 
      />
      <h2>{language === 'en' ? `Hello, ${inputText || 'World'}` : `Ciao, ${inputText || 'Mondo'}`}</h2>
      <h2>ciao ricordati che se vuoi mettere più cose devi metterle in un div</h2>
      <h1>e che devi fare <i>"NPM RUN DEV"</i></h1>
    </div>
  );
}
