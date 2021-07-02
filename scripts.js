const lebox = document.querySelector('#theBox');
const gridInp = document.querySelector('#gridC');

const sty = document.querySelector('style');



let gridcount = 70;

const resBtn = document.querySelector('#resBtn');
resBtn.addEventListener('click', () => {
    lebox.innerHTML = '';
    gridcount = gridInp.value;
    sty.innerHTML = `
    #thebox {
        grid-template-columns: repeat(${gridcount}, 0.5fr);
        grid-template-rows: repeat(${gridcount}, 0.5fr);
    }
`;
    generateGrid();
})




let colorR = 'aquamarine';
//The color update

//there are color sets
let colorN = 0;
let sunset = ['#01084f', '#391954', '#631e50', '#a73c5a', '#ff7954'];
let death = ['#040036', '#e636e1', '#fff442', '#4cd9ea', '#4ffd3c'];
let rossette = ['#d8a7b1', '#b6e2d3', '#fae8e0', '#ef7c8e']
//let dawn

let ette = rossette;
//pick one

console.log(ette[1]);

function colorchange(ette) {
    setTimeout(() => {
        console.log("Switching from " + colorR + "to ");
        colorR = ette[colorN];
        console.log(colorR);
        colorN += 1;
        //color pallette length is more flexible now
        if (colorN == ette.length) colorN =0;
        colorchange(ette);
}, 300);
}

colorchange(ette);


//colors change over time




//generate the grid

function generateGrid() {
    for (let i = 0; i < gridcount; i++) {
        let cols = document.createElement('div');
        cols.style.backgroundColor = 'white';

        cols.addEventListener('mouseenter', function l() {
            this.style.backgroundColor = colorR;
        })

        lebox.appendChild(cols);

        for (let j = 0; j < gridcount; j++) {
            let rows = document.createElement('div');
            cols.style.backgroundColor = 'white';

            rows.addEventListener('mouseenter', function l() {
                this.style.backgroundColor = colorR;
            })

            lebox.appendChild(rows);
        }
    }
}

generateGrid();




