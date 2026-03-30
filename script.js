function redirectAffiliate() {
    const type = document.getElementById('insurance-type').value;
    
    // ATENȚIE: Înlocuiește adresele de mai jos cu link-urile tale REALE de afiliat
    const links = {
        'rca': 'https://google.com?q=asigurare-rca-afiliat', 
        'pad': 'https://google.com?q=asigurare-locuinta-afiliat',
        'travel': 'https://google.com?q=asigurare-calatorie-afiliat'
    };

    // Mesaj de feedback pentru utilizator
    const btn = document.getElementById('cta-button');
    btn.innerText = "Se încarcă ofertele...";
    btn.style.opacity = "0.7";

    setTimeout(() => {
        window.location.href = links[type];
    }, 800);
}
