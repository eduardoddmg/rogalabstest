let container = document.querySelector('.container');
let cards = document.querySelector('.cards');
let btnVez = 1;
let buttons = [];

fetch('./data.json').then(response => response.json()).then(json => {
    let count = 1, index = 0;
    for(let i of json) 
    {
        index++;
        if (index < 5)
        {
            container.innerHTML+=`
            <article class="card">
                <h4>${i.name}</h4>
                <section class="email">
                    <i class="fa-solid fa-envelope"></i>
                    <p>${i.email}/p>
                </section>
                <section class="telefone">
                <i class="fa-solid fa-phone"></i>
                    <p>${i.tel}</p>
                </section>
                </article>
                `
        }
        i.page = count;
        if (index % 4 === 0) count++;
    }
    for(let i = 1; i <= Math.floor(json.length /3); i++)
    {
        let btn = document.createElement('button');
        btn.classList.add('cardBtn');
        btn.innerHTML = i;
        cards.appendChild(btn);
        buttons.push({button: btn, id: i, clicked: false})
        buttons[0].button.style.backgroundColor = "green";
        btn.addEventListener('click', () => {
            btnVez = i;
            console.log(btnVez, buttons);
            container.innerHTML='';
            for (let x of buttons) 
            {
                x.clicked = false;
            }
            buttons[i-1].clicked = true;
            for (let x of buttons) 
            {
                if (x.clicked === true) x.button.style.backgroundColor =  "green";
                else x.button.style.backgroundColor = "black";
            }
            for (let j of json)
            {
                if (btnVez === j.page)
                {
                    container.innerHTML+=`
                    <article class="card">
                        <h4>${j.name}</h4>
                        <section class="email">
                            <i class="fa-solid fa-envelope"></i>
                            <p>${j.email}/p>
                        </section>
                        <section class="telefone">
                        <i class="fa-solid fa-phone"></i>
                            <p>${j.tel}</p>
                        </section>
                        </article>
                    `
                }
            }
        });
    }
    console.log(json);
});


