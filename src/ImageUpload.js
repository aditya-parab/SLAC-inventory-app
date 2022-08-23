import { useState } from 'react'
import Image from '@material-ui/icons/Image'
import { IconButton,Button } from '@material-ui/core'

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
          
          <input id='contained-button-file' type="file" title=" "  accept='image' style={{ display:"" }} onChange={this.handleChange} />
          <label htmlFor="contained-button-file">
            <Image style={{color:"#90030B", scale:"2.5", border:"solid", borderColor:"#90030B", background:"white",  display: this.state.file ? "none" : "" }}>
              
            </Image>

          </label>
    

    

          
        

      
              <img style={{ paddingLeft:"55px", maxWidth: "200px" }} src={this.state.file} />
                
      </div>
    );
  } 
}
export default ImageUpload;
