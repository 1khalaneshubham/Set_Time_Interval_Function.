const student = {
   name : "Shubham",
   age: 20,
   eng:60,
   math:99,
   Phy: 98,
   getAvg(){
      let avg = (this.eng + this.math + this.phy)/3;
      console.log(`${this.name} got avg marks = ${avg}`);
   }
}