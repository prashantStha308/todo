import './TeamTile.css';
import Cross from '../buttons/crossButton/Cross.jsx';
import AddButton from '../buttons/addButton/AddButton.jsx';
import JohnPng from '../../assets/Ellipse 20.png';
import SelinaPng from '../../assets/Ellipse 22.png';

// dummy members
const members = [{
    id: '2srcf',
    imgSrc: JohnPng,
    name: "John Doe",
},{
    id: '7ryth',
    imgSrc: SelinaPng,
    name: "Selina Doe",
}];

// array of member tiles.
const Tile = members.map( member=>{
    return(
        <div className="teamMember">
            <img key={member.id} src={member.imgSrc} className="memberImg" alt='img' />
            <p className="memberName" key={member.id}> {member.name} </p>
            <Cross />
        </div>
    )
} );

export default function(){
    return(
        <section className="tileContainer">
            {Tile}
            <AddButton />
        </section>
    )
}