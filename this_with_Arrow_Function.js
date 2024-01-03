const student = {
    name: "Shubham",
    marks: 95,
    prop: this, // global scope
    getName: function(){
        console.log(this);
        return this.name
    },
    getMarks:() => {
        console.log(this); // parent's Scope->window
        return this.marks;
    },
    getInfo1: function(){
        setTimeout(() => {
            console.log(this)
        },2000);
    },
    getInfo2: function(){
            setTimeout(function () {
                console.log(this)
            },2000);
        },
    };