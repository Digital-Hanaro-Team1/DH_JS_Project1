const footerSNSList = document.querySelectorAll('footer .footer_sns_list ul li a');

for (const i in footerSNSList) {
    const a = footerSNSList[parseInt(i)];
    const img = a.querySelector('img');
    const imgIdx = parseInt(i) + 1;
    a.addEventListener('mouseover', () => {
        img.src = `./assets/images/footer/ico_sns${imgIdx}_1.png`;
    });
    a.addEventListener('mouseout', () => {
        img.src = `./assets/images/footer/ico_sns${imgIdx}.png`;
    });
}