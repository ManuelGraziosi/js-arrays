const teachers = ["Nathan", "Ed", "Fabio", "Phil", "Carlo", "Lewis", "Luca"]; // NON MODIFICARE QUESTA VARIABILE
const teachersMan = ["Nathan", "Ed", "Fabio", "Phil", "Carlo", "Lewis", "Luca"];
// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers (provate a trovare i metodi e poi provate ad implementare la soluzione con il ciclo for)
const reversedTeachers = teachers.toReversed();
console.log("reversedTeachers (by toReversed)", reversedTeachers);

// alternativa manuale
const reversedTeachers2 = [];
for (let i = teachers.length - 1; i >= 0; i--) {
    const currentTeacher = teachers[i];
    reversedTeachers2.push(currentTeacher);
}
console.log("reversedTeachers2 (by manual for)", reversedTeachers2);

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = [];
for (let i = 0; i < teachers.length; i++) {
    const currentTeacher = teachers[i];
    if (currentTeacher.length >= 5) {
        longNames.push(currentTeacher);
    }
}

console.log("longNames:", longNames);


// 3. Rimuovi 'Ed' dall'array teachers (fatelo con un metodo e poi provate a farlo anche con il ciclo for)
const delTeacher = "Ed";

// metodo1: tramite metodi
const indexDelteacher = teachers.indexOf(delTeacher);
teachers.splice(indexDelteacher, 1);
console.log("teachers:", teachers);

// metodo2: manuale tramite for
for (let i = 0; i < teachersMan.length; i++) {
    const curTeacher = teachersMan[i];
    if (curTeacher === delTeacher) {
        teachersMan.splice(i, 1);
    }
}
console.log("teachersMan:", teachersMan);