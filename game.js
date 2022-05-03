
import {GLTFLoader} from "../lib/GLTFLoader.js"; 
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.01, 1000 );
var renderer = new THREE.WebGLRenderer(); renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);







//========================loader
const loader = new GLTFLoader();
var obj;
loader.load("autko.gltf",function(gltf){
    obj = gltf.scene;
    scene.add(gltf.scene);
    });
//========================background color
scene.background = new THREE.Color(0xffffff);
//========================light
var light = new THREE.HemisphereLight(0xffffff,0x000000,2);
scene.add(light);
//========================camera


window.addEventListener( 'resize', function(){ onWindowResize(); }, false );
camera.position.set(0,20,60);




//========================animate
function animate(){
requestAnimationFrame(animate);
obj.rotation.y=3.1;


renderer.render(scene,camera); }
animate();
     
     
     
     
