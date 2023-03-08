// Respuestas correctas
const answers = ["present perfect", "present perfect", "past simple", "past continuous", 
"present simple","present simple","past simple","past simple","present simple"
,"present perfect","present perfect"
    ];

// Función para verificar las respuestas
function checkAnswers() {
  // Obtener los valores de las respuestas del usuario
  const userAnswers = [
    document.getElementById("exercise1").value.toLowerCase(),
    document.getElementById("exercise2").value.toLowerCase(),
    document.getElementById("exercise3").value.toLowerCase(),
    document.getElementById("exercise4").value.toLowerCase(),
    document.getElementById("exercise5").value.toLowerCase(),
    document.getElementById("exercise6").value.toLowerCase(),
    document.getElementById("exercise7").value.toLowerCase(),
    document.getElementById("exercise8").value.toLowerCase(),
    document.getElementById("exercise9").value.toLowerCase(),
    document.getElementById("exercise10").value.toLowerCase(),
    document.getElementById("exercise11").value.toLowerCase(),
    
  ];
  
  // Verificar las respuestas
  let correct = true;
  for (let i = 0; i < userAnswers.length; i++) {
    if (userAnswers[i] !== answers[i]) {
      correct = false;
      document.getElementById("exercise" + (i+1)).style.color = "red";
    } else {
      document.getElementById("exercise" + (i+1)).style.color = "green";
    }
  }
  
  // Mostrar mensaje de resultado
  if (correct) {
    document.getElementById("result").innerHTML = "¡Todas las respuestas son correctas! Felicidades.";
    document.getElementById("result").style.color = "green";
    generateCode();
  } else {
    document.getElementById("result").innerHTML = "Algunas respuestas son incorrectas. Por favor, inténtalo de nuevo.";
    document.getElementById("result").style.color = "red";
  }
}

// Función para mezclar los ejercicios al cargar la página
function shuffle() {
  const exercises = document.getElementById("exercises");
  for (let i = exercises.children.length; i >= 0; i--) {
    exercises.appendChild(exercises.children[Math.random() * i | 0]);
  }
}

// Función para generar un código al responder correctamente todos los ejercicios
function generateCode() {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let code = "";
  for (let i = 0; i < 8; i++) {
    code += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  const codeDiv = document.createElement("div");
  codeDiv.innerHTML = "¡Felicidades! Tu código es: <strong>" + code + "</strong>";
  document.body.appendChild(codeDiv);
}
