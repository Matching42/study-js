
function set_anim(img){
    img.animate([
        { transform: 'scale(1.05)'}
    ], {
        duration: 100,
        direction : "alternate",
        iterations: 2,
        easing: 'ease-in'
    });
}

function change_imgs(imgsrc, tag, img, count) {
    for (var i = 0; i < 5; i++) {
        if (i <= count) {
            img[i].className = tag[count];
            img[i].src = imgsrc[count];
        }
        else {
            img[i].className = null;
            img[i].src = imgsrc[2];
        }
    }
}

function make_img(body, imgsrc, imgSize, i)
{
    var img = document.createElement("img");

    img.src = imgsrc;
    img.width = imgSize;
    img.height = imgSize;
    img.setAttribute("id", `${i}`);
    body.appendChild(img);

    return img;
}


function make_input(body)
{
    var input = document.createElement("input");

    input.setAttribute("type", "text");
    input.setAttribute("value", "0");
    input.classList.add("hidden");
    body.appendChild(input);

    return input;
}

starRate = (function () {
    const body = document.getElementById('rate');
    const imgsrc = []
    const img = []
    const tag = ['verybad', 'bad', 'soso', 'good', 'verygood']
    var current = -1;

    var input = make_input(body);
    for (var i = 0; i < 5; i++)
        imgsrc.push(`./img/i${i}.png`);

    for (var i = 0; i < 5; i++) {
        img.push(make_img(body, imgsrc[2], 30, i));

        img[i].addEventListener('click',
            (e) => {
                current = e.target.id;
                input.setAttribute("value", `${parseInt(e.target.id) + 1}`);
                for (var j = 0; j <= e.target.id; j++)
                    set_anim(img[j])
                change_imgs(imgsrc, tag, img, e.target.id);
            });
        img[i].ondragstart = () => { return false; };
        img[i].addEventListener("mouseenter", (e) => change_imgs(imgsrc, tag, img, e.target.id));
        img[i].addEventListener("mouseleave", (e) => change_imgs(imgsrc, tag, img, current));

    }
}());
