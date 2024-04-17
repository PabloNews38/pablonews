const teamMembers = [
    {
        src: 'Copie de Logo PabloNews officiel 23-24 (1).png',
        name: 'Xavier FINI',
        alias: 'Directeur de Publication',
        email: 'finixavier@gmail.com',
        status: 'Actif',
        tags: ['dev', 'QA']
    },
    {
        src: 'Copie de Logo PabloNews officiel 23-24 (1).png',
        name: 'Lamia GORGULU',
        alias: 'Directrice Générale',
        email: '...',
        status: 'Actif',
        tags: ['design', 'marketing']
    },
    {
        src: 'Copie de Logo PabloNews officiel 23-24 (1).png',
        name: 'Hugo COMBE-DARGENT',
        email: '...',
        alias: 'Directeur Général Délégué chargé des Relations Extérieures',
        status: 'Inactif',
        tags: ['design', 'marketing']
    },
    {
        src: 'Copie de Logo PabloNews officiel 23-24 (1).png',
        name: 'Rémi MERCIER',
        email: '...',
        alias: 'Directeur Général Délégué chargé de la Communication',
        status: 'Inactif',
        tags: ['dev']
    },
    {
        name: 'Aziz BA',
        src: 'Copie de Logo PabloNews officiel 23-24 (1).png',
        email: '...',
        alias: 'Directeur de la Coordination Photographique Evenementielle',
        status: 'Actif',
        tags: ['marketing']
    },
    {
        name: 'Gabriel HOLTZMANN',
        src: 'Copie de Logo PabloNews officiel 23-24 (1).png',
        email: '...',
        alias: 'Directeur de la Rédaction',
        status: 'Actif',
        tags: ['marketing', 'design']
    },
    {
        src: 'Copie de Logo PabloNews officiel 23-24 (1).png',
        name: 'Johan GURUNG',
        email: '...',
        alias: 'Rédacteur en Chef',
        status: 'Actif',
        tags: ['dev', 'marketing']
    },   
    {
        name: 'Alexi DAVID',
        src: 'Copie de Logo PabloNews officiel 23-24 (1).png',
        email: '...',
        status: 'Actif',
        alias: 'Rédacteur',
        tags: ['dev', 'QA']
    },
    {
        src: 'Copie de Logo PabloNews officiel 23-24 (1).png',
        name: 'Khadim THIOUNE',
        email: '...',
        alias: 'Rédacteur',
        status: 'Actif',
        tags: ['dev', 'marketing']
    },
    {
        src: 'Copie de Logo PabloNews officiel 23-24 (1).png',
        name: 'Anaïs SILVA',
        email: '...',
        status: 'Actif', 
        alias: 'Photographe Spéciale',
        tags: ['design', 'QA']
    },
    {
        src: 'Copie de Logo PabloNews officiel 23-24 (1).png',
        name: 'Nicolas INTRALUK',
        email: '...',
        status: 'Inactif', 
        alias: 'Illustrateur',
        tags: ['design', 'QA']
    },
    {
        src: 'Copie de Logo PabloNews officiel 23-24 (1).png',
        name: 'Amine BOULKAILA',
        email: '...',
        status: 'Inactif', 
        alias: 'Monteur Vidéo du JT',
        tags: ['design', 'QA']
    },
];

let tableRowCount = document.getElementsByClassName('table-row-count');
tableRowCount[0].innerHTML = `(${teamMembers.length}) Members`;

let tableBody = document.getElementById('team-member-rows');

const itemsOnPage = 5;

const numberOfPages = Math.ceil(teamMembers.length / itemsOnPage);

const start = (new URLSearchParams(window.location.search)).get('page') || 1;

const mappedRecords = teamMembers
.filter((teamMember, i) => 
    (((start - 1) * itemsOnPage) < i + 1) && 
    (i+1 <= start * itemsOnPage)
)
.map(
  (teamMember) => {
    return `<tr>
        <td class="team-member-profile">
            <img src="${teamMember.src}" alt="${teamMember.name}">
            <span class="profile-info">
                <span class="profile-info__name">
                    ${teamMember.name}
                </span>
                <span class=profile-info__alias>
                    ${teamMember.alias}
                </span>
            </span>
        </td>
        <td>
            <span class="status status--${teamMember.status}">
                ${teamMember.status}
            </span>
        </td>
        <td>${teamMember.email}</td>
        <td>
            <span class="tags">
                ${teamMember.tags.map((tag) => `<span class="tag tag--${tag}">${tag}</span>`).join('')}
            </span>        
        </td>
    </tr>`;
});

tableBody.innerHTML = mappedRecords.join('');

const pagination = document.querySelector('.pagination');

const linkList = [];

for (let i = 0; i < numberOfPages; i++) {
    const pageNumber = i + 1;
    
    linkList.push(`<li><a href="?page=${pageNumber}" ${pageNumber == start ? 'class="active"' : ''} title="page ${pageNumber}">${pageNumber}</a></li>`);
}

pagination.innerHTML = linkList.join('');