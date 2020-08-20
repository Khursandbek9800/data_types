let str = " you can be what you want be if you try hard how bad you want";

let target = "you";

let pos = 0;
while (true) {
    let foundPos = str.indexOf(target, pos);
    if (foundPos == -1) break;
    alert(`Found at ${foundPos}`);
    pos = foundPos + 1;
}

