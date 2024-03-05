let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-butn");

let display_X = true;

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("button was clicked");
        if (display_X) {
            box.innerText = "X";
            display_X = false;
        } else {
            box.innerText = "O";
            display_X = true;
        }
        box.disabled = true;
        checkwinner();
    });
});

const checkwinner = () => {
    for (let patterns of winPatterns) {
        let post1val = boxes[patterns[0]].innerText;
        let post2val = boxes[patterns[1]].innerText;
        let post3val = boxes[patterns[2]].innerText;

        if (post1val != "" || post2val != "" || post3val != "") {
            if (post1val === post2val && post2val === post3val) {
                console.log("the Winner is ", post1val);
            }
        }
    }
};
