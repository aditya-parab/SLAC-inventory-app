
import Image from '@material-ui/icons/CloudUpload'


const React = require('react')

class ImageUpload extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      file: null
    }
      this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    })
    }


    render() {
      
      return (
          
     
          <div>
          
          <input id='contained-button-file' type="file" title=" "  accept='image' style={{ display:"" }} onChange={this.handleChange} />
          <label htmlFor="contained-button-file">
            <Image style={{color:"#D9D9D9", scale:"2.5",   display: this.state.file ? "none" : "" }}>      
            </Image>

          </label>
              <img  src={this.state.file} />
                
      </div>
    );
  } 
}
export default ImageUpload;
