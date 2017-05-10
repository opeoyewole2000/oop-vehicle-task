class Car{
    
    
    constructor(nameOfCar,model,typeOfCar){
      
      this.numOfDoors = 4;
      this.numOfWheels = 4;
      this.isSaloon = true;
      this.speed = "0 km/h";
      
      if(nameOfCar === "Porshe" || nameOfCar === "Koenigsegg")
      {
        this.numOfDoors = 2;
        
      }
      if(typeOfCar === "trailer")
      {
        this.numOfWheels = 8
        this.isSaloon = false;
        
      }
      
      if(typeOfCar === undefined)
      {
        this.typeOfCar = "saloon"
        
      }
       if(model === undefined)
      {
        this.model = "GM"
        
      }
       if(nameOfCar === undefined)
      {
        this.nameOfCar = "General"
        
      }
      else
      {
      this.typeOfCar = typeOfCar;
      this.model=model;
      this.nameOfCar = nameOfCar;
      
      }
      
      
      
    }
    
  
    
   drive(pressPedal){
     if(this.typeOfCar === "trailer")
     {
       this.speed = pressPedal * 11;
        this.speed = this.speed + " km/h";
     }
     else{
       
       this.speed  = pressPedal * 50;
       this.speed = this.speed + " km/h";
     }
    
    }
   
    
  }


  let car1 = new Car('Koenigsegg', 'Agera R');
  let lorry = new Car("l","t","trailer");
  console.log(typeof(car1));
  car1.numOfDoors;
  //lorry.numOfWheels;
 lorry.typeOfCar;

 car1.speed;
 lorry.speed;
 lorry.drive(7);
 lorry.speed;
 car1.drive(5);
 car1.speed;
 
 
 
 exports.Car = Car;
 