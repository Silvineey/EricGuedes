const videoIds = [
    '4emCT75p9f8', 'SRdjnQ2y5dw',
];

function render() {
    const caixa = document.getElementById('caixa');
    const modal = document.getElementById('video-modal');
    const iframe = document.getElementById('youtube-iframe');

    for (let i = 1; i <= 12; i++) {
        const img = document.createElement('img');
        img.src = `/assets/g${i}.png`;
        img.onclick = () => {
            const videoId = videoIds[i-1];
            iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
            modal.style.display = 'flex';
        };
        
        caixa.appendChild(img);
    }
    modal.onclick = () => {
        modal.style.display = 'none';
        iframe.src = '';
    };
    const caixa2 = document.getElementById('caixa2');
    for (let e = 1; e < 5; e++) {
        const emp = document.createElement('img');
        emp.src = `/assets/logo${e}.png`;
        caixa2.append(emp);
    }
}

document.addEventListener('DOMContentLoaded', render);
