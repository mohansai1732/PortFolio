const summary = document.getElementById("summary");

let typed = false;

window.addEventListener("load", () => {
    if (!typed) {
        typeEffect(summary, summary.dataset.text);
        typed = true;
    }
});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


// async function typeEffect(element, text, speed = 30) {
    //     element.innerHTML = "";
    
    //     for (let i = 0; i < text.length; i++) {
        //         element.innerHTML += text.charAt(i);
        //         // i++;
        //         await sleep(speed);
        //     }
        // }
        
async function typeEffect(element, text, speed = 30) {    
    element.innerHTML = "";
    let i = 0;  
    for(item of text) {
        element.innerHTML += item;
        await new Promise(resolve => setTimeout(resolve, speed));
    }
}

// const section = document.querySelector(".slide");
// const clone = section.cloneNode(true);
// section.parentNode.appendChild(clone);

const slide = document.querySelector(".slide");
slide.innerHTML += slide.innerHTML;


// function typeEffect(element, text, speed = 30) {
//     element.innerHTML = "";
//     let i = 0;

//     typing();
//     function typing() {
//         if (i < text.length) {
//             element.innerHTML += text.charAt(i);
            // i++;
//             setTimeout(typing, speed);
//             // await sleep(speed);
//         }
//     }

// }





// // Apply observer
// document.querySelectorAll(".section").forEach(sec => {
//     observer.observe(sec);
// });

// const skills = ["C++","JavaScript","Java","Python","HTML","CSS","React","Node.js","Django","Spring Boot","Agile","Problem Solving","Team Collaboration","Git","MySQL","Communication","Time Management","Adaptability","MongoDB","Critical Thinking","Leadership","Creativity","Docker"];

// const rings = [
//   { r: 80,  count: 6, reverse: false },
//   { r: 145, count: 8, reverse: false },
//   { r: 185, count: 9, reverse: true  },
// ];

// const orbit = document.getElementById("orbit");
// const cx = 190, cy = 190;
// let idx = 0;

// rings.forEach(ring => {
//   const ringEl = document.createElement("div");
//   ringEl.className = "orbit-ring" + (ring.reverse ? " reverse" : "");
//   const d = ring.r * 2;
//   ringEl.style.cssText = `width:${d}px;height:${d}px;top:${cy-ring.r}px;left:${cx-ring.r}px;`;
//   orbit.appendChild(ringEl);

//   for (let i = 0; i < ring.count && idx < skills.length; i++, idx++) {
//     const angle = (i / ring.count) * 2 * Math.PI - Math.PI / 2;
//     const x = cx + ring.r * Math.cos(angle);
//     const y = cy + ring.r * Math.sin(angle);

//     const wrapper = document.createElement("div");
//     wrapper.style.cssText = `position:absolute;top:${y}px;left:${x}px;`;
//     wrapper.className = ring.reverse ? "counter-label-rev" : "counter-label";

//     const label = document.createElement("span");
//     label.className = "label";
//     label.textContent = skills[idx];

//     wrapper.appendChild(label);
//     ringEl.appendChild(wrapper);
//   }
// });