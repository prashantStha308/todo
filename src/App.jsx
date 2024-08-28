import './App.css';
import Tile from './components/team/TeamTile.jsx';
import ClockTile from './components/buttons/clockTile/Clock.jsx';
import Calander from './components/buttons/calanderButton/Calander.jsx';
import AddButton from './components/buttons/addTextButton/AddTextButton.jsx';
import Create from './components/buttons/createButton/Create.jsx';


const Header = 
<header>
  <h1 className="title"> ToDo <span className="yellowText">List</span> </h1>
</header>

const TeamTitle = <h4 className="sectionTitle"> Add team members </h4>
const TimeTitle = <h4 className="sectionTitle"> Time & Date </h4>

const TodoTitle =
<form className="todoTitleForm">
  <label htmlFor="todoTitle" className='taskLable'> Task Title  </label>
  <input type="text" id='todoTitle' className='userInput' />
</form>

const TodoDetails =
<form className="todoDetailForm">
  <label htmlFor="todoDetail" className='taskLable'> Task Details </label>
  <textarea name="todoDetail" id='todoDetail' className='userInput' rows={3}></textarea>
</form>

const TodoInputs =
<section className="todoInputs">
  {TodoTitle}
  {TodoDetails}
</section>

const TimeAndDate =
<section className="timeAndDate">
  {TimeTitle}
  <div style={{display: "flex", gap: "10px"}}>
    <ClockTile />
    <Calander />
  </div>
</section>

const team =
<section className="team">
  {TeamTitle}
  <Tile />
</section>

const footerButton =
<section className="footerButtons">
  <AddButton />
  <Create />
</section>

const createTaskPage = 
<section className="TodoApp">
  {Header}
  {TodoInputs}
  {team}
  {TimeAndDate}
  {footerButton}
</section>


function App(){
  return(
    <main className="mainScreen">
      {createTaskPage}
    </main>
  );
}

export default App;