const Engine = Matter.Engine;
 const World = Matter.World; 
 const Bodies = Matter.Bodies;
  var engine,world,object,ball,ball_options;
  var box1,box2,Ground2 ;
  function setup(){
     var canvas = createCanvas(400,400); 
    engine = Engine.create(); 
    world = engine.world;
     
     
      
     

box1 = new Box(300,50,20,20);
box2 = new Box(370,90,20,20);

Ground2 = new Ground(200,390,300,20)





    }
     function draw(){ background(0);
       Engine.update(engine);
        box1.display() ;
        box2.display();
        Ground2.display();
       }





