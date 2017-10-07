import { PureComponent } from 'react';

class ImagePicker extends PureComponent {
  constructor(props){
    super(props);
    this.dom = {};
  }

  openFile = (file) => {
    const input = this.dom.input;

    const reader = new FileReader();
    reader.onload = () => (this.dom.output.src = reader.result);
    reader.readAsDataURL(input.files[0]);
  };

  render = () => {
    return (
      <div>
        <input type='file' accept='image/*'
          ref={(el)=>(this.dom.input = el)}
          onChange={this.openFile}/>
        <img ref={(el)=>(this.dom.output = el)}/>
      </div>
    )
  }
}

export default ImagePicker;
