
import * as THREE from "https://cdn.skypack.dev/pin/three@v0.150.0-OzKE9j8uVtfQ1iuz7xon/mode=imports,min/optimized/three.js";
import {OrbitControls} from "https://cdn.skypack.dev/three@0.136.0/examples/jsm/controls/OrbitControls";

export const renderCanvas = () => {
    // console.clear();

    let holder = document.getElementById('heroCanvas');
    let canvasHeight = holder.offsetHeight;
    let canvasWidth = holder.offsetWidth;
    let scene = new THREE.Scene();
    // scene.background = new THREE.Color(0x160016);
    scene.background = new THREE.Color(0x151030);
    // scene.background = new THREE.Color(0x181237);
    let camera = new THREE.PerspectiveCamera(60, canvasWidth / canvasHeight, 1, 1000);
    camera.position.set(0, 2, 35);
    let renderer = new THREE.WebGLRenderer();
    renderer.setSize(canvasWidth, canvasHeight);
    holder.appendChild(renderer.domElement);
    window.addEventListener("resize", event => {
        camera.aspect = canvasWidth / canvasHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(canvasWidth, canvasHeight);
    })

    let controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enablePan = false;

    let gu = {
        time: {value: 0}
    }

    let sizes = [];
    let shift = [];
    let pushShift = () => {
    shift.push(
        Math.random() * Math.PI, 
        Math.random() * Math.PI * 2, 
        (Math.random() * 0.9 + 0.1) * Math.PI * 0.1,
        Math.random() * 0.9 + 0.1
    );
    }
    let pts = new Array(50000).fill().map(p => {
        sizes.push(Math.random() * 1.5 + 0.5);
        pushShift();
        return new THREE.Vector3().randomDirection().multiplyScalar(Math.random() * 0.5 + 9.5);
    })
    for(let i = 0; i < 100000; i++){
        let r = 10, R = 40;
        let rand = Math.pow(Math.random(), 1.5);
        let radius = Math.sqrt(R * R * rand + (1 - rand) * r * r);
        pts.push(new THREE.Vector3().setFromCylindricalCoords(radius, Math.random() * 2 * Math.PI, (Math.random() - 0.5) * 2 ));
        sizes.push(Math.random() * 1.5 + 0.5);
        pushShift();
    }

    let g = new THREE.BufferGeometry().setFromPoints(pts);
    g.setAttribute("sizes", new THREE.Float32BufferAttribute(sizes, 1));
    g.setAttribute("shift", new THREE.Float32BufferAttribute(shift, 4));
    let m = new THREE.PointsMaterial({
    size: 0.125,
    transparent: true,
    // depthTest: false,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    onBeforeCompile: shader => {
        shader.uniforms.time = gu.time;
        shader.vertexShader = `
        uniform float time;
        attribute float sizes;
        attribute vec4 shift;
        varying vec3 vColor;
        ${shader.vertexShader}
        `.replace(
        `gl_PointSize = size;`,
        `gl_PointSize = size * sizes;`
        ).replace(
        `#include <color_vertex>`,
        `#include <color_vertex>
            float d = length(abs(position) / vec3(40., 10., 40));
            d = clamp(d, 0., 1.);
            vColor = mix(vec3(227., 155., 0.), vec3(100., 50., 255.), d) / 255.;
        `
        ).replace(
        `#include <begin_vertex>`,
        `#include <begin_vertex>
            float t = time;
            float moveT = mod(shift.x + shift.z * t, PI2);
            float moveS = mod(shift.y + shift.z * t, PI2);
            transformed += vec3(cos(moveS) * sin(moveT), cos(moveT), sin(moveS) * sin(moveT)) * shift.w;
        `
        );
        //console.log(shader.vertexShader);
        shader.fragmentShader = `
        varying vec3 vColor;
        ${shader.fragmentShader}
        `.replace(
        `#include <clipping_planes_fragment>`,
        `#include <clipping_planes_fragment>
            float d = length(gl_PointCoord.xy - 0.5);
            //if (d > 0.5) discard;
        `
        ).replace(
        `vec4 diffuseColor = vec4( diffuse, opacity );`,
        `vec4 diffuseColor = vec4( vColor, smoothstep(0.5, 0.1, d)/* * 0.5 + 0.5*/ );`
        );
        //console.log(shader.fragmentShader);
    }
    });
    
    let p = new THREE.Points(g, m);
    p.rotation.order = "ZYX";
    p.rotation.z = 0.2;
    scene.add(p)

    const moonTexture = new THREE.TextureLoader().load('assets/img/canvas/earth.png');      // loading for map. 
    const normalTexture = new THREE.TextureLoader().load('assets/img/canvas/normal.jpg');      // loading another image for normalMap layer for 3d look.
    const finalMoonTexture = new THREE.MeshStandardMaterial({map: moonTexture, normalMap: normalTexture});
    const blackHoleTexture = new THREE.MeshStandardMaterial({color: 0x000000, normalMap: normalTexture});
    const moon = new THREE.Mesh(                                        // Same process of creating object with slight shortcut method.
        new THREE.SphereGeometry(10,32,32), blackHoleTexture        
    );
    moon.rotation.y = 90;
    scene.add(moon); 1

    const ambientLight = new THREE.AmbientLight(0xffffff);      // adds flood light to light up all objects equally.
    const pointLight = new THREE.PointLight(0xffffff);      // adds point light.
    pointLight.position.set(-18,3,18);                   // sets position of light source. (takes coords as args).
    scene.add(pointLight, ambientLight);               // add both lights to scene.

    // const lightHelper = new THREE.PointLightHelper(pointLight);      // Show positon of light source (helps to understand the scene).
    // const gridHelper = new THREE.GridHelper(200, 50);    // Add grid lines to the scene.
    // scene.add(lightHelper);

    let clock = new THREE.Clock();

    renderer.setAnimationLoop(() => {
        controls.update();
        let t = clock.getElapsedTime() * 0.5;
        gu.time.value = t * Math.PI;
        p.rotation.y = t * 0.05;
        // p.rotation.z = t * 0.05;
        moon.rotation.y += 0.002; 
        renderer.render(scene, camera);
    });

    // GUI starts.
    const gui = new dat.GUI();                                                                                      

    const world = {
        space: {
            distance: 10,
        },
        moon: {
            rotationSpeed: 0.008,
            move: 25,
            size: 1
        },
        torus: {
            move: 25,
            size: 1
        },
        state: {
            hole: true
        }
    }
    // gui.add(world.space, 'distance', 10, 60).onChange(() => camera.position.x = world.space.distance);
    // gui.add(world.moon, 'rotationSpeed', 0.001, 0.020);
    // gui.add(world.moon, 'move', 0, 50).onChange(() => moon.position.x = world.moon.move);
    gui.add(world.state, 'hole').onChange(() => {
        if (!world.state.hole) return moon.material = finalMoonTexture;
        moon.material = blackHoleTexture;
        console.log(moon.material);
    });    // No method for changing radius but we can scale it.

    // gui.add(world.torus, 'move', 0, 50).onChange(() => torus.position.x = world.torus.move);
    gui.add(world.torus, 'size', 0, 2).onChange(() => moon.scale.setScalar(world.torus.size));    // No method for changing radius but we can scale it.
    // GUI ends.

    // parameters = {
    //     a:false,
    //     b:false,
    //     c:false
    // }

    // var first = gui.addFolder("Plastic");
    // var pos1 = first.add(parameters,'a').name('Possitive Charge');
    // var neg1 = first.add(parameters,'b').name('Negative Charge');
    // var neu1 = first.add(parameters,'c').name('Neutral');

    // var second = gui.addFolder("Glass");
    // var pos2 = second.add(parameters,'a').name('Possitive Charge');
    // var neg2 = second.add(parameters,'b').name('Negative Charge');
    // var neu2 = second.add(parameters,'c').name('Neutral');

    // pos1.onChange(PCharge);
    // neg1.onChange(Ncharge);
    // neu1.onChange(NeCharge);
    // var show = gui.add(parameters,'a').name('Show Charge'); 
}

// renderCanvas();               // window.renderCanvas() not working with module type files
