        // https://www.youtube.com/watch?v=hBiGFpBle7E 
        // https://r105.threejsfundamentals.org/threejs/lessons/threejs-load-gltf.html
        
        
        
        
        //scena
        const canvas = document.querySelector('#c');
         var scene = new THREE.Scene();
         scene.background= new THREE.Color(0,0,0);
         scene.fog = new THREE.Fog(0x202533, -1, 100);
         var clock = new THREE.Clock();
         //camera
         var camera = new THREE.PerspectiveCamera( 45, window.innerWidth/window.innerHeight, 0.01, 30000 );
         camera.position.set(0,20,60);
         camera.lookAt(new THREE.Vector3(0,1,0));
         var renderer = new THREE.WebGLRenderer({antialias: true}); 
         //render
         renderer.setSize(window.innerWidth,window.innerHeight);
         renderer.shadowMap.enabled = true;
         window.addEventListener( 'resize', function(){ onWindowResize(); }, false );
            
        document.body.appendChild(renderer.domElement);

        import {GLTFLoader} from "../GLTFLoader.js"; 
         

        var  control = new THREE.OrbitControls(camera, renderer.domElement);
         const loader = new GLTFLoader();
         const world = new CANNON.World({
            gravity :new CANNON.Vec3(0,-10,0)
  
          });
         
        
        function initfis(){
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

         
         
         
            initfis();
            world.debugRenderer.update();
        renderer.render(scene,camera);
      
        //callcar();
      }
         animate();

         function onWindowResize(){
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize( window.innerWidth, window.innerHeight );

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