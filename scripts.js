const lebox = document.querySelector('#theBox');
const gridInp = document.querySelector('#gridC');

const sty = document.querySelector('style');



let gridcount = 70;

const resBtn = document.querySelector('#resBtn');
resBtn.addEventListener('click', () => {
    lebox.innerHTML = '';
    //to make sure it doesn't grow too big
    if (gridInp.value < 70) gridcount = gridInp.value;
    sty.innerHTML = `
    #thebox {
        grid-template-columns: repeat(${gridcount}, 0.5fr);
        grid-template-rows: repeat(${gridcount}, 0.5fr);
    }
`;
    generateGrid();
})

let clrID = 1;


//User ability to specify colors
const cInpBtn = document.querySelector('#colorBTN');
const cInp = document.querySelector('#colorIN');

cInpBtn.addEventListener('click', () => {
    clrID = cInp.value;
    console.log(clrID);
    console.log(ette);

    switch (+clrID) {
        case 1:
            ette = rossette;
            break;
        case 2:
            ette = sunset;
            break;
        case 3:
            ette = death;
            break;
        default:
            ette = rossette;
            colorchange(ette);
            break;
    }

    
})

//default color
let colorR = 'aquamarine';

//The color update

//there are color sets
let colorN = 0;
let sunset = ['#01084f', '#391954', '#631e50', '#a73c5a', '#ff7954'];
let death = ['#040036', '#e636e1', '#fff442', '#4cd9ea', '#4ffd3c'];
let rossette = ['#d8a7b1', '#b6e2d3', '#fae8e0', '#ef7c8e']
//let dawn

let ette = sunset;

function colorchange() {
    setTimeout(() => {
        console.log(`The ${ette} instance is running`)
        //console.log("Switching from " + colorR + "to ");
        colorR = ette[colorN];
        //console.log(colorR);
        colorN += 1;
        //color pallette length is more flexible now
        if (colorN == ette.length) colorN = 0;
        colorchange(ette);
    }, 300);
}

colorchange();




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




