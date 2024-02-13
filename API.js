async function getData(){
    let response = await fetch('https://ghibliapi.vercel.app/films/');
    let data = await response.json();
    let userInfo = document.querySelector(".tbody");

    data.forEach(element => {
        const { image, title, description, release_date } = element;
        let newRow = `
            <tr>
                <td><img src="${image}" ></td>
                <td>${title}</td>
                <td>${description}</td>
                <td>${release_date}</td>
            </tr>
        `; 
        userInfo.innerHTML += newRow;
    });
}

window.onload = getData;