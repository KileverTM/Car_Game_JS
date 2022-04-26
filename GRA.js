        // https://www.youtube.com/watch?v=hBiGFpBle7E 
        // https://r105.threejsfundamentals.org/threejs/lessons/threejs-load-gltf.html
        // https://www.youtube.com/watch?v=JhgBwJn1bQw
        
        
        
        //scena
        const canvas = document.querySelector('#c');
         var scene = new THREE.Scene();
         scene.background= new THREE.Color(0,0,0);
         const amblight = new THREE.AmbientLight(0xffffff, 0.8);
         scene.add(amblight);
         const dirlight = new THREE.DirectionalLight(0xffffff , 0.9);
         dirlight.position.set(15,30,0)
         scene.add(dirlight);

         //generowanie fizyki swiata 
         const world = new CANNON.World();
         world.gravity.set(0,-10,0);
         world.broadphase = new CANNON.NaiveBroadphase();
        world.solver.iterations = 20;
        
         //camera
         var camera = new THREE.PerspectiveCamera( 45, window.innerWidth/window.innerHeight, 0.01, 30000 );
         camera.position.set(0,20,60);
         camera.lookAt(new THREE.Vector3(0,1,0));
         var renderer = new THREE.WebGLRenderer({antialias: false}); 
         //render
         renderer.setSize(window.innerWidth,window.innerHeight);
         renderer.shadowMap.enabled = true;
         window.addEventListener( 'resize', function(){ onWindowResize(); }, false );
            
        document.body.appendChild(renderer.domElement);

        import {GLTFLoader} from "../GLTFLoader.js"; 
         
//kontrola kamery myszką 
        var  control = new THREE.OrbitControls(camera, renderer.domElement);
         const loader = new GLTFLoader();
        
         //generowanie obiektów 
         function Gentalerza(){
               const geometry = new THREE.BoxGeometry(1,1,1);

               const color = new THREE.Color(0x151612);
               const material = new THREE.MeshLambertMaterial({color});
               const mesh = new THREE.Mesh(geometry, material);
               mesh.position.set(0,0,1);
               scene.add(mesh);

               const krzt = new CANNON.Box(
                  new CANNON.Vec3(0.5,0.5,0.5,));
                  let massa = 5;
                  const body = new CANNON.Body ({massa, krzt});
                  body.position.set(0,0,1)
                  world.addBody(body);
               

               loader.load("zycie.gltf",function(gltf){
                  const obj = gltf.scene;
                  scene.add(obj)});

               const geometry1 = new THREE.PlaneGeometry( 10, 10 );
               const material1 = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
               const plane = new THREE.Mesh( obj, material1 );
               scene.add( plane );






         }
        
 /*       function initfis(){
//Świat

         
           world.TimeStep = 1 / 60;
           world.damping = 0.01;

          
          world.broadphase = new CANNON.NaiveBroadphase();
          const groundShape = new CANNON.Plane();
        const groundMaterial = new CANNON.ContactMaterial();
		const groundBody = new CANNON.Body({ mass: 0, material: groundMaterial });
      
      groundBody.addShape(groundShape);
      world.add(groundBody);

      //kulka
      const Sphmaterial = new CANNON.Material();

      var sphereShape = new CANNON.Sphere({radius : 1 , material: Sphmaterial});
      var sphereBody = new CANNON.Body({mass: 5, shape: sphereShape});
      sphereBody.position.set(0,10,0);
      world.add(sphereBody);
      
      

        }
        */

        
         var obj;
        /*loader.load("zycie.gltf",function(gltf){
            const obj = gltf.scene;
             scene.add(gltf.scene);    
             });

             
             const box = new THREE.BoxGeometry(1, 1, 1);
             box.castShadow = true;
             
            const material = new THREE.MeshBasicMaterial({ color : 0x15ff16});
            const material1 = new THREE.MeshBasicMaterial({ color : 0xffff16});


var karton = new THREE.Mesh(box,material1);


karton.position.z=0;
karton.position.x=0;
karton.position.y=3;



        scene.background = new THREE.Color(0xffffff);
         var light = new THREE.HemisphereLight(0xffffff,0x000000,2);
        scene.add(light);
        camera.position.set(0,20,60);
        */
       
        function animate(){
         requestAnimationFrame(animate);
Gentalerza();
         
         
         
            //initfis();
            updphi();
        renderer.render(scene,camera);
      
        //callcar();
      }
         animate();

         function onWindowResize(){
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize( window.innerWidth, window.innerHeight );

         }

          function updphi() {

world.step(1/60);


          }
         


         
       



        /* function callcar(){

            const chassisShape = new CANNON.Box(new CANNON.Vec3(1, 0.5, 2));
         const chassisBody = new CANNON.Body({ mass: 150, });
         chassisBody.addShape(chassisShape);
         chassisBody.position.set(10, 15, 10);
         const vehicle = new CANNON.RaycastVehicle({
			chassisBody: chassisBody,
			indexRightAxis: 0,
			indexUpAxis: 1,
			indeForwardAxis: 2
		});

	

		

		const wheelBodies = [];
		vehicle.wheelInfos.forEach( function(wheel){
			const cylinderShape = new CANNON.Cylinder(wheel.radius, wheel.radius, wheel.radius / 2, 20);
			const wheelBody = new CANNON.Body({ mass: 1, material: wheelMaterial });
			const q = new CANNON.Quaternion();
			q.setFromAxisAngle(new CANNON.Vec3(0, 1, 0), Math.PI / 2);
			wheelBody.addShape(cylinderShape, new CANNON.Vec3(), q);
			wheelBodies.push(wheelBody);
			game.helper.addVisual(wheelBody, 'wheel');
		})


      vehicle.addToWorld(world);
    }*/



         
         function updatecamera(){
                    camera.lookAt()



         }