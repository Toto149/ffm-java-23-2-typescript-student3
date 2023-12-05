
import './App.css'
import './Student.ts'
import './Grade.ts'

function gradesToString(grades: Grade[]):string{
  let gradesString: string = "";
  for(let i:number = 0; i<grades.length; i++){
    gradesString += grades[i];
    if(i<grades.length-1){
      gradesString +=",";
    }
  }
  return gradesString;
}
function printStudentNameAndGrades(student :Student) : string {
  let nameAgeGrades : string = "";
  nameAgeGrades = student.firstName + " " + student.lastName + " " + "(" + student.age + ")\n";
    nameAgeGrades  += "=".repeat(nameAgeGrades.length)+ "\n" + "Grades: ";
  nameAgeGrades += gradesToString(student.grades);

  return nameAgeGrades;
}

function printStudentNameSubjectsAndGrades2(student :StudentRefactor) : string {
  let nameAgeGrades : string = "";
  nameAgeGrades = student.firstName + " " + student.lastName + " " + "(" + student.age + ")\n";
  nameAgeGrades  += "=".repeat(nameAgeGrades.length)+ "\n" + "Noten: \n";
  for(let i:number=0; i<student.subjects.length;i++){
    nameAgeGrades += student.subjects[i].nameOfSubject +": " + gradesToString(student.subjects[i].gradesOfSubject) + "\n";
  }

  return nameAgeGrades;
}



function averageGrade(student: Student):number {
  const mapGrades: Map<Grade,number> = new Map();
  mapGrades.set("A",1);
  mapGrades.set(1,1);
  mapGrades.set("B",2);
  mapGrades.set(2,2);
  mapGrades.set("C",3);
  mapGrades.set(3,3);
  mapGrades.set("D",4);
  mapGrades.set(4,4);
  mapGrades.set(5,5);
  mapGrades.set("F",6);
  mapGrades.set(6,6);
  const grades1 = student.grades
      .filter((grade: Grade):boolean => grade!=="*");
  return grades1
      .map((grade: Grade):number => mapGrades.get(grade))
      .reduce((x:number,y:number):number => x+y)/grades1.length;
}
function convertGermanGradeToAmericanGrade(grade:Grade):Grade{
  const germanToAmericanGrade:Map<Grade,Grade> = new Map();
  germanToAmericanGrade.set(1,"A");
  germanToAmericanGrade.set(2,"B");
  germanToAmericanGrade.set(3,"C");
  germanToAmericanGrade.set(4,"D");
  germanToAmericanGrade.set(5,"F");
  germanToAmericanGrade.set(6,"F");

  return germanToAmericanGrade.get(grade);
}
function germanGradesToAmericanGrades(grades: Grade[]):Grade[]{
  return grades.map((grade : Grade):Grade => convertGermanGradeToAmericanGrade(grade));
}
function convertingStudentGrades(student:Student):void{
  student.grades = germanGradesToAmericanGrades(student.grades);
}
function App() {
  const grades1: Grade[] = [1,4,3,1,3,2,1,2];
  const grades2: Grade[] = ["A","*",1];
  const grades3: Grade[] = ["A","*",1,3,2,4,5];
  const student1: Student = {
    firstName: "Anton",
    lastName: "Meier",
    age : 16,
    grades: grades1
  }
  const student2: Student = {
    firstName: "Berta",
    lastName: "Müller",
    age: 17,
    grades:grades2
  }

  const student3: Student = {
    firstName: "Cäsar",
    lastName: "Schmidt",
    age: 17,
    grades: grades3
  }

  const student4: StudentRefactor = {
    firstName: "Florian",
    lastName: "Weber",
    age:14,
    subjects: [{
      nameOfSubject: "Sport",
      gradesOfSubject:["A",1,"*"]
    },
      {
        nameOfSubject: "Kunst",
        gradesOfSubject: [3,2,4,5]
      }
      ,{
      nameOfSubject: "Mathe",
        gradesOfSubject:[1,2,"A"]
      }]
  }

  const students: Student[] = [student1,student2,student3];
  students.forEach((student: Student): void => console.log(printStudentNameAndGrades(student)));
  convertingStudentGrades(student1);
  students.forEach((student: Student):void => console.log(averageGrade(student)));
  console.log(printStudentNameSubjectsAndGrades2(student4));
  const output1: string = printStudentNameAndGrades(student1);
  console.log(output1)
  return (
    <>
      <pre>
        {output1}
      </pre>
    </>
  )
}

export default App
