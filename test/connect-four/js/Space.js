class Space {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.id = `space-${x}-${y}`;
        this.token = null;

        // rendering props
        this.diameter = 76;
        this.radius = this.diameter/2;
    }

    drawSVGSpace() {
        // 1. create a circle SVG el
        const svgSpace = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        // 2. add attributes to SVG el
        svgSpace.setAttributeNS(null, "id", this.id);
        svgSpace.setAttributeNS(null, "cx", (this.x * this.diameter) + this.radius);
        svgSpace.setAttributeNS(null, "cy", (this.y * this.diameter) + this.radius);
        svgSpace.setAttributeNS(null, "r", this.radius - 8);
        svgSpace.setAttributeNS(null, "fill", "black");
        svgSpace.setAttributeNS(null, "stroke", "none");
        // 3. append SVG el to container in HTML
        document.getElementById("mask").appendChild(svgSpace);
    }

    mark(token) {
        this.token = token;
    }
}

// function Space(x, y) {
//     this.x = x;
//     this.y = y;
//     this.id = `space-${x}-${y}`;
//     this.token = null;

//     // rendering props
//     this.diameter = 76;
//     this.radius = this.diameter/2;

//     this.drawSVGSpace = function() {
//         // 1. create a circle SVG el
//         const svgSpace = document.createElementNS("http://www.w3.org/2000/svg", "circle");
//         // 2. add attributes to SVG el
//         svgSpace.setAttributeNS(null, "id", this.id);
//         svgSpace.setAttributeNS(null, "cx", (this.x * this.diameter) + this.radius);
//         svgSpace.setAttributeNS(null, "cy", (this.y * this.diameter) + this.radius);
//         svgSpace.setAttributeNS(null, "r", this.radius - 8);
//         svgSpace.setAttributeNS(null, "fill", "black");
//         svgSpace.setAttributeNS(null, "stroke", "none");
//         // 3. append SVG el to container in HTML
//         document.getElementById("mask").appendChild(svgSpace);
//     }

//     this.mark = function(token) {
//         this.token = token;
//     }

//     this.owner = function() {
//         return this.token ? this.token.owner : null;
//     }
// }