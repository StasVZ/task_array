'use strict';

const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов','Попов', 'Соколов'];
const failedStudents = ['Сидоров','Смирнов','Попов',]

const arrived = () => {
  const arrivedStudents = new Set(failedStudents);
  console.log(allStudents.filter(e => !arrivedStudents.has(e)));
}

arrived();


