const teachers = ["Nathan", "Ed", "Fabio", "Phil", "Carlo", "Lewis", "Luca"]; // NON MODIFICARE QUESTA VARIABILE
const teachers2 = [];

// 0. Per ogni insegnante stampa in console la frase:
// [Nome insengante] è l'insegnante in posizione [i]
for (let i = 0; i < teachers.length; i++) {
    const currentTeacher = teachers[i];
    console.log(`${currentTeacher} è l'insegnante in posizione ${i}`);
}

// 1. Utilizzando un indice sull'array teachers, cambia il valore della
// variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array
const fourthTeacher = teachers[3];
console.log("fourthTeacher: ", fourthTeacher);

// 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'
const newTeacher = "Patrick";
teachers.splice(4, 1, newTeacher);
console.log(teachers);
// oppure si può fare teachers[4] = "Patrick";

// 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto
const lastTeacher = teachers.pop();
console.log("lastTeacher: ", lastTeacher);


// 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto
const firstTeacher = teachers.shift();
console.log("firstTeacher", firstTeacher);

// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers
const newTeacher2 = "Vanessa";
teachers.push(newTeacher2);
console.log(teachers);

// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers
const newTeacher3 = "Sarah";
teachers.unshift(newTeacher3);
console.log(teachers);

// 7. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
const searchedTeacher = "Fabio";
const isFabioPresent = teachers.includes(searchedTeacher);
console.log("isFabioPresent:", isFabioPresent);

// 8. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// e salvalo nella variabile lewisIndex
const searchedTeacher2 = "Lewis";
const lewisIndex = teachers.indexOf(searchedTeacher2);
console.log("lewisIndex:", lewisIndex);


// 9. Unisci tutti gli insegnanti nell'array teachers in una stringa
// separata da virgole e salvala nella variabile teachersString
const teachersString = teachers.join(",");
console.log("teachersString:", teachersString);


// 10. Verifica se l'array teachers è vuoto
// e salva il risultato nella variabile isTeachersEmpty
const isTeachersEmpty = teachers.length === 0;
console.log("isTeachersEmpty:", isTeachersEmpty);
const isTeachers2Empty = teachers2.length === 0;
console.log("isTeachers2Empty:", isTeachers2Empty);
//alternativa = !teachers.length

