import { useState } from 'react'

const React = require('react')

class ImageUpload extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      file: null
    }
      this.handleChange = this.handleChange.bind(this)
      this.someWords = this.someWords.bind(this)
  }
  handleChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    })
    }


    
    someWords(){
    if (this.state.file) {
        return <h3 style={{color:"white", marginRight:"10px"}}>This is the image you uploaded.</h3>
    }
}

    render() {
      
      return (
          
      
          <div>
              
        <input type="file" style={{display: this.state.file ? "none" : ""}} onChange={this.handleChange}/>

      
              <img style={{ maxWidth: "250px" }} src={this.state.file} />
                {this.someWords()}
      </div>
    );
  } 
}


// const ImageUpload = () => {
//         state = {
//             file:null
//     }
//     handleChange = handleChange.bind(this)
//     return ( 

//       <div>
//         <input type="file" onChange={this.handleChange}/>
//         <img src={this.state.file}/>
//       </div>



//      );
// }
 
export default ImageUpload;
