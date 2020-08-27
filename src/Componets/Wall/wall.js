import React from 'react';
import './style.css'; //need to import styles too
import Brick from '../Brick/brick.js' //can skip .js part

//class based component coz need to store some data(no of brick, based on which bricks will be displayed)
//data is stored in 'state'
class Wall extends React.Component{

    constructor(props){
        super (props);
        this.state = {
            bricks: [1]
        }

    }

    addMoreBricks = () => {

        const newBricks = [...this.state.bricks]//... is spread op to copy all data from
        newBricks.push(newBricks.length + 1)

        //To update state can't be updated directly if done view won't reflect it
        this.setState({
            bricks: newBricks
        })
    }

    removeBricks = () => {

        const newBricks = [...this.state.bricks]//... is spread op to copy all data from
        newBricks.pop()

        //To update state can't be updated directly if done view won't reflect it
        this.setState({
            bricks: newBricks
        })
    }

    //@override render function
    render = () => {
        return (
            //Some html
            //name='B1' iskey value pair passed to Brick component(can be anything)
            //onClick only passing reference not calling
            <div className='wall-container'>
                {
                    this.state.bricks.map((brick)=>{
                       return <Brick key={brick} name={brick}/> 
                    }
                    )
                }
                <button onClick={this.addMoreBricks} className='btn-a btn'>+</button>
                <button onClick={this.removeBricks} className='btn-r btn'>-</button>
            </div>
        )
    }

}

export default Wall; //To use it in another files