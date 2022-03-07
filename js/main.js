function mapping(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

let mouseX, mouseY;
let currentPos = 0;
let boxA,boxB

window.onload = () => {


  window.onmousemove = (e) => {
    mouseX = e.screenX;
    mouseY = e.screenY;

    // gsap.to('#bg',{x:mouseX-window.innerWidth/2,y:mouseY-window.innerHeight/2})
  };




  const rainMaker = new RainMaker("rainMaker1");
  const left = document.querySelector("#Left");
  const right = document.querySelector("#Right");
  const gate = document.querySelector("#gate");
  
  const video1 = document.querySelector("#video1");
  
  const plant1 = document.querySelector('#plant1')
  const plant2 = document.querySelector('#plant2')
  const plant3 = document.querySelector('#plant3')
  const plant4 = document.querySelector('#plant4')
  const plant5 = document.querySelector('#plant5')
  const plant6 = document.querySelector('#plant6')
  const plant7 = document.querySelector('#plant7')
  const plant8 = document.querySelector('#plant8')
  
  const plants = document.querySelectorAll('.plant')

  const egg = document.querySelector('#eggAni')
  const fen = document.querySelector('#fenAni')
  const intro = document.querySelector('#intro')
  const topTip = document.querySelector('#topTip')



  intro.onclick=()=>{
    intro.classList.add('hide')
    topTip.style.display = 'block'
  }

  plants.forEach(plant=>{

    gsap.set(plant,{rotate:Math.random()*60-30})
  })

  // init controller 创建了插件的控制器
  // 把场景申明,加入控制器
  var controller = new ScrollMagic.Controller();


  document.querySelectorAll('.rb').forEach(ele=>{
    ele.addEventListener('click',e=>{
        e.target.remove()
    })})


  // create a scene
  const sceneA = new ScrollMagic.Scene({
    triggerElement: "#section1",
    tweenChanges: true,
    duration: window.innerHeight * 4,
    offset: window.innerHeight / 2,
  })
    .setPin("#section1") // pins the element for the the scene's duration
    .addIndicators({ name: "X" })
    .addTo(controller); // assign the scene to the controller

  sceneA.on("progress", (e) => {
    const p = e.progress;

    if(p<0.2){
      gsap.to(topTip,{opacity:1})
    }else{
      gsap.to(topTip,{opacity:0})
    }
    
    gsap.to(left, { x: mapping(p, 0, 0.3, 0, 1) * -400, duration: 1 });
    gsap.to(right, { x: mapping(p, 0, 0.3, 0, 1) * 400, duration: 1 });
    gsap.to("#dream", { y: p * -600, duration: 1 });
    gsap.to(".font0", { y: p * -1000, duration: 0.5 });
    gsap.to(".font0-1", {x: mapping(p, 0, 0.3, 0, 1) * -400, duration: 1});
    gsap.to(".font0-2", { x: mapping(p, 0, 0.3, 0, 1) * -400, duration: 1 });
    gsap.to(".font0-3", { x: mapping(p, 0, 0.3, 0, 1) * -400, duration: 1 });
    gsap.to(".font0-4", { x: mapping(p, 0, 0.3, 0, 1) * -400, duration: 1 });
    gsap.to(".font0-5", { x: mapping(p, 0, 0.3, 0, 1) * -400, duration: 1 });
    gsap.to(".font0-6", {x: mapping(p, 0, 0.3, 0, 1) * -400, duration: 1 });
    gsap.to(".font0-7", {x: mapping(p, 0, 0.3, 0, 1) * -400, duration: 1 });
    gsap.to(".font0-8", { x: p * -1500,y: p * -3000,z: 150 + p * -1500, duration: 0.5 });
    gsap.to(".font1", { z: -2000 + p * 2000, y:p * 350, duration: 1 });  
    gsap.to(gate, { z: -2000 + p * 3500, duration: 1 });
    gsap.to('video',{scale:1.2+2*p,})
    // document.querySelector('#id').style.transform = translate()
    // gsap.to('#id',{y:100*p})
    let clipR = 0;
    if (p > 0.5) {
      clipR = [p - 0.5] * 1300;
      gsap.to("#bg", { y: 200 - p * 300, z: [p - 0.5] * 500, duration: 1 });
    } else {
      pokerMaker.update(e.scrollDirection);
      pokerMaker2.update(e.scrollDirection);
      clipR = 0;
    }
     //gsap.to('#bg',{clipPath:`circle(${clipR}px at center)`})
  });





  const sceneB = new ScrollMagic.Scene({
    triggerElement: "#section2",
    tweenChanges: true,
    duration: window.innerHeight *4,
    offset: window.innerHeight / 2,
  })
    .setPin("#section2") // pins the element for the the scene's duration
    .addIndicators({ name: "X" })
    .addTo(controller); // assign the scene to the controller

  sceneB.on("progress", (e) => {
    //每次滚动都会执行

    const p = e.progress;
    // const allEgg = document.querySelectorAll(".ele-rain");
    // const eggCount = allEgg.length;
    // const index = Math.floor(p / [1 / eggCount]);

    // if (e.scrollDirection === "REVERSE") {
    //   allEgg[index].src = "./pic/3.1.png";
    // } else {
    //   allEgg[index].src = "./pic/3.2.png";
    // }


        // if (e.scrollDirection === "REVERSE") {
    //   allEgg[index].src = "./pic/egg.png";
    // } else {
    //   allEgg[index].src = "./pic/egg2.png";
    // }

    const index = Math.floor(mapping(p,0,1,1,21))
    

    egg.src = `./pic/egg${index}.png`



    rainMaker.update(e.scrollDirection)



    // gsap.to(".font2", { x: mapping(p, 0, 0.3, 0, 1) * -400, duration: 10 });
    // gsap.to(".font2-1", { x: mapping(p, 0, 0.3, 0, 1) * 400, duration: 10 });
    // gsap.to(".font2-2", {  x:25*p+"vw",  y:105*p+"vh", duration: 1  });
    gsap.to(".font2-3", {  x:-10*p+"vw",  y:230*p+"vh", duration: 1  });
  });





  
  const sceneC = new ScrollMagic.Scene({
    triggerElement: "#section3",
    tweenChanges: true,
    duration: window.innerHeight * 6,
    offset: window.innerHeight / 2,
  })
    .setPin("#section3") // pins the element for the the scene's duration
    .addIndicators({ name: "X" })
    .addTo(controller); // assign the scene to the controller

  sceneC.on("progress", (e) => {
    const p = e.progress;

    plants.forEach((plant,i)=>{

      gsap.to(plant,{y:-p*200-340,delay:i/15})
      
    })
    gsap.to(".font3",{y: p * -350, duration: 1})

  });


  const sceneD = new ScrollMagic.Scene({
    triggerElement: "#section4",
    tweenChanges: true,
    duration: window.innerHeight * 8,
    offset: window.innerHeight / 2,
  })
    .setPin("#section4") // pins the element for the the scene's duration
    .addIndicators({ name: "X" })
    .addTo(controller); // assign the scene to the controller
    gsap.to("#bus",{x:4000,repeat:Infinity,duration:8})
    gsap.to("#bus2",{x:5000,repeat:Infinity,duration:4,yoyo:true})

  sceneD.on("progress", (e) => {
    const p = e.progress;
    gsap.to('#bgBox',{x:p*2000-900})
    // gsap.to('#intro',{x:p*1000})
    
    // if(p > 0.8){
    //     window.scroll({
    //         top: 0,
    //         // left: 100,
    //         behavior: 'smooth'
    //       });
    // }
    
  });


  lottie.loadAnimation({
    container:document.getElementById('animation'), // the dom element that will contain the animation
    renderer: 'canvas',
    loop: true,
    autoplay: true,
    path: './anis/ren/people1.json' // the path to the animation json
  });

  lottie.loadAnimation({
    container:document.getElementById('caranimation'), // the dom element that will contain the animation
    renderer: 'canvas',
    loop: true,
    autoplay: true,
    path: './anis/diaoche/diaoche.json' // the path to the animation json
  });
  






  const sceneE = new ScrollMagic.Scene({
    triggerElement: "#section5",
    tweenChanges: true,
    duration: window.innerHeight * 4,
    offset: window.innerHeight / 2,
  })
    .setPin("#section5") // pins the element for the the scene's duration
    // .addIndicators({ name: "X" })
    .addTo(controller); // assign the scene to the controller

  sceneE.on("progress", (e) => {
    const p = e.progress;

    const index = Math.floor(mapping(p,0,1,1,8))
    // fen.src = `./pic/fen${index}.png`
    eyeAni.goToAndStop(mapping(p,0,1,0,108),true)
    // gsap.to("#eyebox", {  y: -10*p+"vh", duration: 1  });

});


const eyeAni = lottie.loadAnimation({
  container:document.getElementById('eyeanimation'), // the dom element that will contain the animation
  renderer: 'canvas',
  loop: true,
  autoplay: false,
  path: './anis/yanlei3/yanlei.json' // the path to the animation json
});

console.log(eyeAni);





// const sceneF = new ScrollMagic.Scene({
//   triggerElement: "#section6",
//   tweenChanges: true,
//   duration: window.innerHeight * 2,
//   offset: window.innerHeight / 2,
// })
//   .setPin("#section6") // pins the element for the the scene's duration
//   .addIndicators({ name: "X" })
//   .addTo(controller); // assign the scene to the controller

// sceneE.on("progress", (e) => {
//   const p = e.progress;

 

// });



// lottie.loadAnimation({
//   container:document.getElementById('tearanimation'), // the dom element that will contain the animation
//   renderer: 'canvas',
//   loop: true,
//   autoplay: true,
//   path: './anis/action6/action6.json' // the path to the animation json
// });




const sceneG = new ScrollMagic.Scene({
  triggerElement: "#section7",
  tweenChanges: true,
  duration: window.innerHeight * 6,
  offset: window.innerHeight / 2,
})
  .setPin("#section7") // pins the element for the the scene's duration
  // .addIndicators({ name: "X" })
  .addTo(controller); // assign the scene to the controller

sceneE.on("progress", (e) => {
  const p = e.progress;
  if(p>0.7){
    gsap.to('#endDesc',{y:-350*mapping(p,0.7,1,0,1)})
  }
 

});

  //扑克牌目前位移

  

  const pokerMaker = new PokerMaker("pokerMaker");
  const pokerMaker2 = new PokerMaker("pokerMaker2");
  
  // 定义扑克发射器, 入参是html元素的id (会把这个元素变成扑克发射器)

  


};//end

// let ele1
// function setup(){
//   const canvas = createCanvas(1000,1000)
//   canvas.parent('#section7')
//   canvas.id('renderCanvas')
//   ele1 = loadImage('./pic/plant6.png')
  

// }

// function draw(){
//   clear()
//   if(boxA) image(ele1,boxA.position.x-50,boxA.position.y-50)
// }


class RainMaker {
  constructor(id) {
    this.box = document.querySelector(`#${id}`);
    this.box.style.width = `350px`;
    this.box.style.height = `350px`;
    console.log(this.box);
    this.pokers = [];
  }
  send() {
    //生成img元素,置入数组(方便计算总量)
    let poker = document.createElement("img");
    this.pokers.push(poker);

    //随机使用一张图片,并且添加poke类(样式)
    const pokeFile = ["plant"];
    const file = pokeFile[Math.floor(Math.random() * pokeFile.length)];
    poker.src = `./pic/${file}.png`;
    poker.alt='heh'
    poker.classList.add("poke");


    //放在发射器这个容器里面
    this.box.appendChild(poker);

    // 随机排列, 注意 ` 这个符号!不要删掉了
    // rotate3D,前面三个参数是x,y,z轴分别的分量(0~1,如果是0则不旋转,1就完全旋转), 第四个参数是旋转的度数
    const z = Math.abs(Math.cos(window.scrollY) * 2500);
    poker.style.left = Math.random() * 100 -50 + 'vw';
    poker.style.top = -200 + 'px'
    
    gsap.to(poker,{
      x:Math.random()*5+'vw',
      y:120+'vh',
      z:z,
      rotateX:Math.random() * 180 - 90,
      rotateY:Math.random() * 180 - 90,
      rotateZ:Math.random() * 180 - 90,
      scale:Math.random()*0.8
    })

    

    

    // poker.style.transform = `
    //       translate3d(
    //           ${Math.random()*5}vw,
    //           ${Math.abs(Math.cos(window.scrollY) * 120)}vh,
    //           ${z}px) 
    //       rotate3d(
    //           ${0},
    //           ${Math.random()},
    //           ${Math.random()},
    //           ${Math.random() * 180 - 90}deg)
    //       scale(
    //           ${Math.random()}
    //       )
    //       `
          
      poker.style.filter = `brightness(${Math.max(0.2,Math.random())})`

    // poker.style.filter = `blur(${Math.abs(z)/300}px)`

    // 简单排列
    // currentPos += 10
    // poker.style.transform = `translateX(${currentPos}px)`
  }
  back() {
    currentPos = 0;
    this.pokers.forEach((card, i) => {
      setTimeout(() => {
        card.style.transform = ``;
        card.style.transitionDelay = `${Math.random() * 0.5}s`;
        card.style.filter = `blur(0px)`;
      }, 300);
    });
  }
  update(direction = "FORWARD") {
    //如果下移使用send方法,反之用back
    direction === "FORWARD" ? this.send() : this.back();

    //卡片超过20就会把最前面的一个元素不透明度过渡成0
    if (this.pokers.length > 20) {
      const ele = this.pokers.shift();
      ele.style.opacity = 0;

      //等待1s后删除
      setTimeout(() => {
        ele.remove();
      }, 1000);
    }
  }
}

class PokerMaker {
  constructor(id) {
    this.box = document.querySelector(`#${id}`);
    this.box.style.width = `350px`;
    this.box.style.height = `350px`;
    console.log(this.box);
    this.pokers = [];
  }
  send() {
    //生成img元素,置入数组(方便计算总量)
    let poker = document.createElement("img");
    this.pokers.push(poker);
    if(window.scrollY > 1000){
    //随机使用一张图片,并且添加poke类(样式)
    const pokeFile = ["food", "paper", "plastic", "hazardous"];
    const file = pokeFile[Math.floor(Math.random() * pokeFile.length)];
    poker.src = `./pic/${file}.png`;
    poker.classList.add("poke");

    //放在发射器这个容器里面
    this.box.appendChild(poker);

    // 随机排列, 注意 ` 这个符号!不要删掉了
    // rotate3D,前面三个参数是x,y,z轴分别的分量(0~1,如果是0则不旋转,1就完全旋转), 第四个参数是旋转的度数
    const z = Math.abs(Math.cos(window.scrollY) * 2500);
   
      poker.style.transform = `
          translate3d(
              ${Math.random() * 50 - 15}vw,
              ${-Math.abs(Math.cos(window.scrollY) * 80)}vh,
              ${z}px) 
          rotate3d(
              ${Math.random()},
              ${Math.random()},
              ${Math.random()},
              ${Math.random() * 180 - 90}deg)
          `;
     }
    

    // poker.style.filter = `blur(${Math.abs(z)/300}px)`

    // 简单排列
    // currentPos += 10
    // poker.style.transform = `translateX(${currentPos}px)`
  }
  back() {
    currentPos = 0;
    this.pokers.forEach((card, i) => {
      setTimeout(() => {
        card.style.transform = ``;
        card.style.transitionDelay = `${Math.random() * 0.5}s`;
        card.style.filter = `blur(0px)`;
      }, 300);
    });
  }
  update(direction = "FORWARD") {
    //如果下移使用send方法,反之用back
    direction === "FORWARD" ? this.send() : this.back();

    //卡片超过20就会把最前面的一个元素不透明度过渡成0
    if (this.pokers.length > 160) {
      const ele = this.pokers.shift();
      ele.style.opacity = 0;

      //等待1s后删除
      setTimeout(() => {
        ele.remove();
      }, 1000);
    }
  }
}





  

