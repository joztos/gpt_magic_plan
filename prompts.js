export const getLessonPlanPrompt = (grade) => {
  if (grade === "Primero de Primaria") {
    return "Planea una lección adecuada para estudiantes de primero de primaria. Asegúrate de utilizar instrucciones sencillas, actividades de reconocimiento y ejemplos prácticos.";
  } else if (grade === "Segundo de Primaria") {
    return "Diseña una lección para estudiantes de segundo de primaria. Incluye ejemplos y actividades prácticas para reforzar el aprendizaje y utiliza un lenguaje y conceptos apropiados para su nivel.";
  } else if (grade === "Tercero de Primaria") {
    return "Crea una lección dirigida a estudiantes de tercero de primaria. Asegúrate de incluir descripciones detalladas, actividades de observación y registro, y utilizar un lenguaje adecuado a su nivel.";
  } else if (grade === "Cuarto de Primaria") {
    return "Elabora una lección para estudiantes de cuarto de primaria. Incluye ejemplos, actividades prácticas y asegúrate de adaptar el lenguaje y los conceptos a su nivel de comprensión.";
  } else if (grade === "Quinto de Primaria") {
    return "Desarrolla una lección para estudiantes de quinto de primaria. Asegúrate de presentar ideas claras, argumentos sólidos y ejemplos para respaldar el tema de la lección.";
  } else if (grade === "Sexto de Primaria") {
    return "Crea una lección para estudiantes de sexto de primaria. Asegúrate de incluir una introducción, desarrollo de argumentos y actividades prácticas para reforzar el aprendizaje.";
  }
};

export const promptCreateNewSection = (lessonName, currentSections) => {
  let currentSectionsNames = currentSections.map((section) => section.header);
  return `Estos son los nombres de las secciones creadas para la lección ${lessonName}:\n${currentSectionsNames}. Devuelve una nueva sección con una descripción. El resultado está en un formato JSON como este: {"header": "Actividad A", "description": "Esta actividad implica..."}\}`;
};

export const promptSections = (lessonName, grade) => {
  return `Genera las secciones de la planeacion de clase relacionadas con este tema: '${lessonName}'
  ${getLessonPlanPrompt(
    grade
  )}? En un formato JSON como este, en el orden de aparición en la página: [{"header": "Actividad A", "description": "Esta actividad implica..."}, ...]`;
};

export const promptContinue = (lessonName, currentSection, grade) => {
  return `Esta es la sección llamada "${
    currentSection.header
  }" para la seccion ${lessonName}:\n${
    currentSection.description
  }.\n.Continúa la sección con 1 párrafo adicional ${getLessonPlanPrompt(grade)}:\n`;
};
