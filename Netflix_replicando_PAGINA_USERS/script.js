document.addEventListener('DOMContentLoaded', () => {
    // Dados dos perfis
    const users = [
        { name: "VANESSA", image: 'png/user1.png' },
        { name: "Vania", image: 'png/user2.png' },
        { name: "Amanda", image: 'png/user3.png' },
        { name: "vandressa", image: 'png/user4.png' },
        { name: "I'm Batman", image: 'png/user5.png', link: 'browse.html' } // Rota para a página Browse
    ];

    // Seleciona o container de perfis
    const userContainer = document.querySelector('.home-user');

    // Adiciona os perfis ao container
    users.forEach(user => {
        const userProfile = document.createElement('div');
        userProfile.className = 'user-profile';

        const userImage = document.createElement('img');
        userImage.src = user.image;
        userImage.alt = `${user.name} profile`;
        userImage.className = 'user-image';

        if (user.link) {
            const link = document.createElement('a');
            link.href = user.link;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            link.appendChild(userImage);
            userProfile.appendChild(link);
        } else {
            userProfile.appendChild(userImage);
        }

        const userName = document.createElement('p');
        userName.textContent = user.name;

        userProfile.appendChild(userName);
        userContainer.appendChild(userProfile);
    });
});
