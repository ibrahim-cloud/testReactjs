import React , { useState ,useEffect }  from 'react';


function Courses() {
  const [Allcourses, setCourses] = useState([]);
  const [course , setCourse] = useState({
    id:0,
    title:''
  })
  const SubmitCourse = ()=>{
    setCourse({
      title: course.title,
      id : course.id+1
      })
    console.log(course);
    setCourses([...Allcourses, course]);
  }
  const handleChange = (e)=>{
    setCourse({
    title: e.target.value,
    id:course.id
    })
  }

    useEffect(() => {
      console.log(Allcourses);
    localStorage.setItem('courses', JSON.stringify(Allcourses));
  }, [Allcourses]);
  return (
    <div className='container' >
<div>
<input
        type="text"
        value={course.title}
        onChange={handleChange}
        placeholder="Ajouter course"
      />
      </div>
      <button onClick={SubmitCourse}> Ajouter</button>

      <div className='list'>
      {/* <ul>
    <li >
    <div>TITLE 1jdjdjdjd</div>
    <div><button>remove</button></div>
    </li>
    </ul> */}
   
              <ul>
   {Allcourses.map(item =>
   <li key={item.title}>
   
   <div>{item.title}</div>
    <div><button  onClick={()=>{setCourses(Allcourses.filter((course) => course.id !== item.id))}}>remove</button></div>
   
      </li>
  )}
 </ul>
  </div>

































 
    </div>



  )
}












export default Courses;




























// import React , { useState ,useEffect }  from 'react';
// function Courses() {
//       const [Allcourses, setCourses] = useState([]);
//   const [course, setCourse] = useState(

//     {
//       title:'',
//       id:''
//     }
//   );
//   const handleSubmit =  async() =>{
// setCourses([...Allcourses, course]);
//   }
//   useEffect(() => {
//     localStorage.setItem('courses', JSON.stringify(Allcourses));
//   }, [Allcourses]);

//   return (
//     <div>
//        <form>
//       <input
//         type="text"
//         value={course.title}
//         onChange={(e) => setCourse(e.target.value)}
//         placeholder="Full name"
//         aria-label="fullname"
//       />
//       <input type="submit" value="Submit"></input>
//     </form>
//     {/* {Allcourses.map(item => (
//         <div key={item.id}>{{item}}</div>
//         ))} */}

//         <ul>
//   {Allcourses.map(item =>
//   <li key="{item}">{item} <button>delete{{}}</button>  </li>
//   )}
// </ul>
//         <button onClick={handleSubmit}>ajouter courses</button>
//     </div>
  
//   );
// }

// export default Courses;
