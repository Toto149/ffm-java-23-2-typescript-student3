
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
  const student:Student = {
    firstName: "Anton",
    lastName: "Meier",
    age : 17,
    grades: grades1
  }
  convertingStudentGrades(student);
  let output:string = printStudentNameAndGrades(student);
  console.log(output)
  return (
    <>
      <pre>
        {output}
      </pre>
    </>
  )
}

export default App
