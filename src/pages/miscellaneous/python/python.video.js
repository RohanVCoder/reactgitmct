import video from '../../../static/videos/python.mp4'

function Python({company_name}) {
    return (
           <center>
               <h1>Here is your video:</h1>
               <br/>
               <video className='img-fluid' width={500} src={video} controls autoplay nodownload></video>
               <br/>
               <br/>
           </center>
    );
  }
  
  export default Python;
  