import  express  from 'express';
//import { engine } from 'express-handlebars';

const app = express();

/*app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './templates');*/
 

 const students = [
    {
        id: 1,
        name: "ahmed",
        city: "shibeen",
    },
    {
        id: 2,
        name: "khaled",
        city: "tanta",
    },
    {
        id:3,
        name: "yasser",
        city: "menofia",
    },
    {
        id:4,
        name: "shahin",
        city: "alx",
    },
    {
        id:5,
        name: "mahmouud",
        city: "cairo",
    },
    
]; 
const studentsFunction = (request, response)=> {
    let output = '<ul>';

    for(let i=0; i<students.length; i++){
        const student = students[i];
        output += '<li>'+student.name+'</li>';
    }
    output += '</ul>'
    response.send(output);
    console.log("khaled");
    
};

app.get('/students',studentsFunction);
app.listen(3000);
