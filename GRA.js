
        const canvas = document.querySelector('#c');
         var scene = new THREE.Scene();
         scene.fog = new THREE.Fog(0x202533, -1, 100);
         
         var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.01, 30000 );
         var renderer = new THREE.WebGLRenderer({antialias: true}); 
         renderer.setSize(window.innerWidth,window.innerHeight);
         renderer.shadowMap.enabled = true;
         window.addEventListener( 'resize', function(){ onWindowResize(); }, false );
            
        document.body.appendChild(renderer.domElement);

        import {GLTFLoader} from "../lib/GLTFLoader.js"; 
         

        var  control = new THREE.OrbitControls(camera, renderer.domElement);
         const loader = new GLTFLoader();
         const world = new CANNON.World({
          gravity :new CANNON.Vec3(0,-10,0)

        });

        const TimeStep = 1 / 60
         var obj;
        /*loader.load("zycie.gltf",function(gltf){
            const obj = gltf.scene;
             scene.add(gltf.scene);    
             });*/

             const plane = new THREE.BoxGeometry(25, 0.1, 25);
            const material = new THREE.MeshBasicMaterial({ color : 0x1610ff});

var cube = new THREE.Mesh(plane,material);
scene.add(cube);

        scene.background = new THREE.Color(0x000000);
         var light = new THREE.HemisphereLight(0xffffff,0x000000,2);
        scene.add(light);
        camera.position.set(0,20,60);
        
       
        function animate(){
         requestAnimationFrame(animate);
         world.step(TimeStep)
            callcar();
        renderer.render(scene,camera); }
         animate();

         function onWindowResize(){
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize( window.innerWidth, window.innerHeight );

         }

          
         


         
       



         function callcar(){

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
    }



         
         function updatecamera(){
                    camera.lookAt()



         }