import { useEffect, useState } from 'react';
import './App.css';
import Button from './components/Button';

function App() {
  const students = [
    {
      id: 1,
      name: 'fatih',
      age: 15,
      color: 'bg-blue-500',
      active: true,
    },
    {
      id: 2,
      name: 'panda',
      age: 20,
      color: 'bg-red-500',
      active: true,
    },
  ];

  const studentActive = students.filter((student) => {
    return student.active;
  });

  // const showAlert = (message) => {
  //   alert(message);
  // };

  //merubah sesuatu berdasarkan keadaan tertentu di function

  //function dan dependencies

  const [timer, setTimer] = useState(10);

  useEffect(() => {
    setTimeout(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
  }, [timer]);

  const [idStudent, setIdStudent] = useState(1);
  const [activeStudent, setActiveStudent] = useState({});

  useEffect(() => {
    setActiveStudent(students[idStudent]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idStudent]);

  return (
    <>
      {studentActive.map((student, index) => (
        <Button key={student.id} onClick={() => setIdStudent(index)}>
          {student.name} - {student.age}
        </Button>
      ))}
      <h2>Id : {idStudent}</h2>
      <h1>{activeStudent.name}</h1>
    </>
  );
}

export default App;
