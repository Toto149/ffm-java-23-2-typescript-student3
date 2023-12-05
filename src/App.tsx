
import './App.css'
import './Student.ts'
import './Grade.ts'


function printStudentNameAndGrades(student :Student) : string {
  let nameAgeGrades : string = "";
  nameAgeGrades = student.firstName + " " + student.lastName + " " + "(" + student.age + ")\n"
      + "=".repeat(30)+ "\n" + "Grades: ";
  for(let i:number = 0; i<student.grades.length; i++){
    nameAgeGrades += student.grades[i];
    if(i<student.grades.length-1){
      nameAgeGrades +=",";
    }
  }

  return nameAgeGrades;
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
  const students: Student[] = [student1,student2,student3];
  students.forEach((student: Student): void => console.log(printStudentNameAndGrades(student)));
  convertingStudentGrades(student1);
  let output1:string = printStudentNameAndGrades(student1);
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
