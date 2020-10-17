//not to pollute window object. So used a iife
(function () {
    let randomContainer = document.querySelector(".random-container");
    let shuffleBtn = document.querySelector(".shuffle");
    let sortBtn = document.querySelector(".sort");
    let randomArry = [1, 3, 4, 5, 6, 7, 2, 9, 8];

    shuffleBtn.addEventListener('click', (e) => {
        shuffleArray(randomArry);
    });
    sortBtn.addEventListener('click', (e) => {
        randomArry.sort();
        clearRamdoms();
        genarateLayout(randomArry);
    });

    //shuffles the content of input array
    function shuffleArray(array) {
        for (let i = array.length - 1; i >= 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        clearRamdoms();
        genarateLayout(array);
    }

    //clears the contents of container
    function clearRamdoms() {
        let myNode = document.querySelector(".random-container");
        let fc = myNode.firstChild;
        while (fc) {
            myNode.removeChild(fc);
            fc = myNode.firstChild;
        }
    }

    //Appends the incoming array to the container -transforms to div 
    function genarateLayout(array) {
        let fragment = document.createDocumentFragment();
        array.forEach((val, i) => {
            let item = document.createElement('div');
            item.innerText = val;
            item.classList.add('item');
            item.classList.add(`item-${val}`);
            fragment.appendChild(item);
        });
        randomContainer.appendChild(fragment);
    }

    shuffleArray(randomArry);
})();
