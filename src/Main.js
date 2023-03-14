import React from 'react';
import Hornedbeast from './Hornedbeast';

class Main extends React.Component {
  render(){
    return (
    <>
    <h2>Horned Beast Gallery</h2>

    <Hornedbeast title="Goat" imgUrl="https://images.unsplash.com/photo-1604076150017-48b528308aa3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Z29hdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" description="This is a goat on a roof"/>
    
    <Hornedbeast title="Rhino" imgUrl="https://images.unsplash.com/photo-1598894000396-bc30e0996899?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmhpbm98ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" description="This is a Rhino in the wild"/>
    </>
    )
  }
}

export default Main;


