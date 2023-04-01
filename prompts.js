export const getStylePrompt = (grade) => {
  if (grade === "Primero de Primaria") {
    return "Escribe una historia corta utilizando palabras sencillas y oraciones cortas. Incluye un personaje, un lugar y una acción.";
  } else if (grade === "Segundo de Primaria") {
    return "Escribe una historia que tenga al menos dos personajes, una situación problemática y una solución. Utiliza oraciones simples y vocabulario adecuado para tu nivel.";
  } else if (grade === "Tercero de Primaria") {
    return "Crea una historia utilizando descripciones detalladas de los personajes y el entorno. Incluye un conflicto y su resolución, y asegúrate de utilizar oraciones más complejas.";
  } else if (grade === "Cuarto de Primaria") {
    return "Redacta un informe breve sobre un tema de interés personal o un tema que estés estudiando en la escuela. Asegúrate de incluir hechos e información relevante.";
  } else if (grade === "Quinto de Primaria") {
    return "Escribe un texto argumentativo sobre un tema de actualidad o relevante para ti. Asegúrate de presentar una postura clara, argumentos sólidos y ejemplos para respaldar tu opinión.";
  } else if (grade === "Sexto de Primaria") {
    return "Redacta un ensayo que compare y contraste dos temas relacionados. Asegúrate de incluir una introducción, desarrollo de argumentos y una conclusión sólida.";
  }
};



export const promptCreateNewSection = (pageName, currentSections) => {
  let currentSectionsNames = currentSections.map((section) => section.header);
  return `Here are the sections names created for the page ${pageName}:\n${currentSectionsNames}. Return a new section with a description. Result is in a json format like this: \{"header": "Event A ", "description": "This event happens/describe ..."}\}`;
};
export const promptSections = (pageName, style) => {
  return `Can you return the 3 sections related to this subject: '${pageName}'
  ${getStylePrompt(
    style
  )}.In a json format like this, in the order of appearance in the page: [\{{"header": "Event A ", "description": "This event happens/describe ..."}}, ...]`;
};

export const promptContinue = (pageName, currentSection, style) => {
  return `This is the section named "${
    currentSection.header
  }" for the page ${pageName}:\n${
    currentSection.description
  }.\n.Continue the section with 1 more paragraph ${getStylePrompt(style)}:\n`;
};
