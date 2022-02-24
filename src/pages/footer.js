import Rohan from '../static/Rohan Vashisht.webp'

function Footer() {
    let Company_name = "MyCodingTeacher";

    document.onclick = hideMenu;
        document.oncontextmenu = rightClick;
  
        function hideMenu() {
            document.getElementById(
                "contextMenu").style.display = "none"
        }
  
        function rightClick(e) {
            e.preventDefault();
  
            if (document.getElementById(
                "contextMenu").style.display == "block")
                hideMenu();
            else {
                var menu = document
                    .getElementById("contextMenu")
                      
                menu.style.display = 'block';
                menu.style.left = e.pageX + "px";
                menu.style.top = e.pageY + "px";
            }
        }
        
    return (
        <>
        <br/>
        <footer>
            <center>
                <h1>Thanks for choosing My Coding Teacher!!!</h1>
                <img class="img-fluid footer-img" src={Rohan}/>
                <h2>Website Made By: Rohan Vashisht</h2>
                <h4>&copy;MyCodingTeacher</h4>
            </center>
        </footer>

    <div id="contextMenu" class="context-menu" style={{display:"none"}}>
        <ul>
            <li><a href="#">Refresh</a></li>
            <li><a href="#">Full Screen</a></li>
        </ul>
    </div>
        </>
    );
  }
  
  export default Footer;
  