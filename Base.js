class Base {
    constructor(x,y,w,h){
        let options = {
            isStatic: true
        };

        this.body = Bodies.rectangle(x,y,w,h, options);
        this.w = w;
        this.h = h;
        this.color = color;
        World.add(World, this.body);
    }

    show() {
        let pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        Fill("#8d6e63");
        rect(0, 0, this.w, this.h);
        pop();
    }
}