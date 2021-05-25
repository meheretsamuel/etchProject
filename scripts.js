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




