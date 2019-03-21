import _ from "lodash";
import printMe from './js/print';
import "./css/home.css";
// import myPng from "./image/01.jpg";
import { cube } from './js/math.js';
function component() {
  var element = document.createElement("div");
  var element2 = document.createElement("h1");
  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  element.innerHTML = _.join(["Hello", "webpack", "12ddfk"], " ");
  element2.innerHTML = "webpack演示项目";
  // var myIcon = new Image();
  // myIcon.src = myPng;
  element.appendChild(element2);
  setTimeout(function(){
    printMe();
  },2000);
  alert(cube(3));
  return element;

}

document.body.appendChild(component());
