import  Child  from "./child";
function App(){
let name= "prasad" , name1="raj" , name2= "ravi";
let age = 20, age1= 25, age2= 30;
let image = <img src="http://www.pixelstalk.net/wp-content/uploads/2016/07/Download-Free-Pictures-3840x2160.jpg"  />;
let image1= <img src="https://tse3.mm.bing.net/th?id=OIP.bqimxDatdcHjcVCS0XT91wHaEo&pid=Api&P=0&h=180" />;
let image2= <img src="https://tse3.mm.bing.net/th?id=OIP.AFwI90qkgFDx30R57jTb_gHaE8&pid=Api&P=0&h=180" />;
let imageName = "Flower Image";
let imagename = "Leopad Image";
let imagename2= "fish Image";
return(
  <div>
    <Child na = {name} age={age} name1 = {name1}
     imageurl = {image} images = {imageName} 
     imgurl= {image1} img1 ={imagename}
     pic= {image2} pic2={imagename2}/>
  </div>
)
}
export default App;
