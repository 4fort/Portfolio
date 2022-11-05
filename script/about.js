const techContainer = document.getElementById('techContainer');
const progContainer = document.getElementById('progContainer');

const techs = [
    {
        title: `HTML`,
        value: `95`
    },
    {
        title: `CSS`,
        value: `85`
    },
    {
        title: `Bootstrap`,
        value: `80`
    },
    {
        title: `Javascript`,
        value: `25`
    },
    {
        title: `PHP`,
        value: `10`
    },
    {
        title: `REACTjs`,
        value: `5`
    }
];

const progs= [
    {
        title: `Photoshop`,
        value: `85`
    },
    {
        title: `Figma`,
        value: `25`
    },
    {
        title: `Premiere Pro`,
        value: `45`
    },
    {
        title: `After Effects`,
        value: `55`
    }
];

const aboutDisplay = () => {
    techs.map(e => {
        return techContainer.innerHTML += `
            <li class="list-group-item d-flex justify-content-between align-items-start">
                <p>${e.title}</p>
                <div class="progress">
                <div class="progress-bar" role="progressbar" style="width: ${e.value}%;" aria-valuenow="${e.value}" aria-valuemin="0" aria-valuemax="100">${e.value}%</div>
                </div>
            </li>`;
    });

    progs.map(e => {
        return progContainer.innerHTML += `
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <p>${e.title}</p>
            <div class="progress">
            <div class="progress-bar" role="progressbar" style="width: ${e.value}%;" aria-valuenow="${e.value}" aria-valuemin="0" aria-valuemax="100">${e.value}%</div>
            </div>
        </li>`;
    });
}
aboutDisplay();

