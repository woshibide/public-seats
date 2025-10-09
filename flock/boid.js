// alignment
// cohesion
// separation

class Boid {
    constructor(x, y, pr = 20, maxForce = 0.4, maxSpeed = 3) {
        this.position = createVector(x, y);
        this.velocity = p5.Vector.random2D();
        this.velocity.mult(random(-3, 3));
        this.acceleration = createVector(0.0, 0.01);

        this.maxSpeed = maxSpeed;
        this.maxForce = maxForce; 
        this.pr = pr; // perception radius
    }

    edges() {
        if (this.position.x > width){
            this.position.x = 0;
        } else if (this.position.x < 0) {
            this.position.x = width;
        }

        if (this.position.y > height){
            this.position.y = 0;
        } else if (this.position.y < 0) {
            this.position.y = height;
        }
    }

    allignment(boids) {
        let steering = createVector();
        let total = 0; // number of neighbours within the flock

        for (let i = 0; i < boids.length; i++) {

            let distance = dist(this.position.x, this.position.y,
                            boids[i].position.x, boids[i].position.y
            );

            if (boids[i] != this && distance < this.pr){
                steering.add(boids[i].velocity);
                total += 1;
            }
        }
        
        if (total > 0){
                steering.div(total);
                steering.setMag(this.maxSpeed);
                steering.sub(this.velocity);
                steering.limit(this.maxForce);
            }

        return steering;
    }

    cohesion(boids){
        let steering = createVector();
        let total = 0;

        for (let i = 0; i < boids.length; i++) {

            let distance = dist(this.position.x, this.position.y,
                            boids[i].position.x, boids[i].position.y
            );

            if (boids[i] != this && distance < this.pr){
                steering.add(boids[i].position);
                total += 1;
            }
        }

        if (total > 0){
            steering.div(total);
            steering.sub(this.position);
            steering.setMag(this.maxSpeed);
            steering.sub(this.velocity);
            steering.limit(this.maxForce);
        }

        return steering;
    }

    separation(boids){
        let steering = createVector();
        let total = 0;

        for (let i = 0; i < boids.length; i++) {
            let distance = dist(this.position.x, this.position.y,
                                boids[i].position.x, boids[i].position.y
             )

             if (boids[i] != this && distance < this.pr){
                let neighbourVector = p5.Vector.sub(this.position, boids[i].position);
                // the further away from you the smaller the influence you have
                neighbourVector.div(distance * distance);
                steering.add(neighbourVector);
                total += 1;
             }
        }

        if (total > 0) {
            steering.div(total);
            steering.setMag(this.maxSpeed);
            steering.sub(this.velocity);
            steering.limit(this.maxForce);
        }

        return steering;

    }

    flock(boids) {
        let allignment = this.allignment(boids);
        let cohesion = this.cohesion(boids);
        let separation = this.separation(boids);

        // console.log(cohesion);

        this.acceleration.add(allignment);
        this.acceleration.add(cohesion);
        this.acceleration.add(separation);
    }

///////////

    update(){
        this.position.add(this.velocity);
        this.velocity.add(this.acceleration);
        this.edges();
        // this.allignment([]);
        
        this.acceleration.mult(0);
    }

    display() {
        // noStroke();
        // fill(255);
        push();
        stroke(250);
        strokeWeight(3);
        point(this.position.x, this.position.y, 10, 10);
        pop();
    }
}