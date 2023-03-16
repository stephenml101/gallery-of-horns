import React from 'react';
import Hornedbeast from './Hornedbeast';
import './Main.css'


class Main extends React.Component {
  render() {
    return (
      <main>

        {this.props.data.map((hb, index) => {
          return <Hornedbeast
            image_url={hb.image_url}
            title={hb.title}
            description={hb.description}
            key={index} 
            handleOpenModal={this.props.handleOpenModal}
            />
        })}

      </main>
    )
  }
}

export default Main;


