export const validateAutomata = (input) => {
    const estados = {
        q0: {9: "q1"},
        q1: {"-": "q2"},
        q2: {J: "q3"},
        q3: {F: "q4", G: "q10", H: "q10", I: "q10", J: "q10" , K: "q10", L: "q10" ,M: "q10" , N: "q10" , P: "q10" , O: "q10" ,Q: "q10" , 
             R: "q10" , S: "q10" , T: "q10" , U: "q10" , V: "q10", W: "q16"},
        q4: {"-": "q5"},
        q5: {0: "q6", 1: "q15", 2: "q15", 3: "q15", 4: "q15", 5: "q15", 6: "q15", 7: "q15", 8: "q15",9: "q15"},
        q6: {1: "q7"},
        q7: {K: "q8", L: "q9", M: "q9", N: "q9", O: "q9", P: "q9", Q: "q9", R: "q9", S: "q9", T: "q9", U: "q9", V: "q9", W: "q9", X: "q9", Y: "q9", Z: "q9"},
        q10: {"-": "q11"},
        q11: {0: "q12", 1: "q15", 2: "q15", 3: "q15", 4: "q15", 5: "q15", 6: "q15", 7: "q15", 8: "q15", 9: "q15"},
        q12: {1: "q13", 2: "q13", 3: "q13", 4: "q13", 5: "q13", 6: "q13", 7: "q13", 8: "q13", 9: "q13"},
        q13: {A: "q14", B: "q14", C: "q14", D: "q14", E: "q14", F: "q14", G: "q14", H: "q14", I: "q14", J: "q14", K: "q14",
              L: "q14", M: "q14", N: "q14", O: "q14", P: "q14", Q: "q14", R: "q14", S: "q14", T: "q14", U: "q14", V: "q14",
              W: "q14", X: "q14", Y: "q14", Z: "q14"},
        q15: {0: "q13", 1: "q13", 2: "q13", 3: "q13", 4: "q13", 5: "q13", 6: "q13", 7: "q13", 8: "q13", 9: "q13"},
        q16: {"-": "q17"},
        q17: {0: "q18", 1: "q21", 2: "q21", 3: "q21", 4: "q21", 5: "q21", 6: "q21", 7: "q21", 8: "q21", 9: "q22"},
        q18: {1: "q19", 2: "q19", 3: "q19", 4: "q19", 5: "q19", 6: "q19", 7: "q19", 8: "q19", 9: "q19"},
        q19: {A: "q20", B: "q20", C: "q20", D: "q20"},
        q21: {0: "q19", 1: "q19", 2: "q19", 3: "q19", 4: "q19", 5: "q19", 6: "q19", 7: "q19", 8: "q19", 9: "q19"},
        q22: {1: "q19", 2: "q19", 3: "q19", 4: "q19", 5: "q19", 6: "q19", 7: "q19", 8: "q19", 9: "q23"},
        q23: {E: "q24"},

        q8: {}, q9: {}, q14: {}, q20: {}, q24: {} 
    }

    let currentEstado = "q0";
    let history = ["q0"];
    const inputArray = input.split("");
    let response;

    for (let i = 0; i < inputArray.length; i++) {
        const char = inputArray[i];
        if (estados[currentEstado][char]) {
          currentEstado = estados[currentEstado][char];
          history.push(currentEstado);
          console.log(`the current state is ${currentEstado}, the transition is ${char} and the next state is ${estados[currentEstado][char]}`);
        } else {
          console.log("else statement");
          response = { success: false, message: "Automata no valido, su secuencia de estados hasta donde llego fue el siguiente: " + history.join(" -> ")};
          break;
        }
    }

    if (input.length !== 8 ) {
        return { success: false, message: "Automata no valido, su secuencia de estados hasta donde llego fue el siguiente: " + history.join(" -> ")};
      }

      if (currentEstado !== "q18" && currentEstado !== "q9" && currentEstado !== "q14" && currentEstado !== "q20" && currentEstado !== "q24") {
        return { success: false, message: "Automata no valido, su secuencia de estados hasta donde llego fue el siguiente: " + history.join(" -> ")};
      }
      return response || { success: true, message: "Automata valido, su secuencia de estados hasta donde llego fue el siguiente: " + history.join(" -> ")};
    
}