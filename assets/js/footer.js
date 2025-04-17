fetch('footer.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('footer-include').innerHTML = data;
 
    const footerSNSList = document.querySelectorAll('footer .footer_sns_list ul li a');

    for (let i = 0; i < footerSNSList.length; i++) {
        const a = footerSNSList[i];
        const img = a.querySelector('img');
        const imgIdx = i + 1;
        a.addEventListener('mouseover', () => {
            img.src = `./assets/images/footer/ico_sns${imgIdx}_1.png`;
        });
        a.addEventListener('mouseout', () => {
            img.src = `./assets/images/footer/ico_sns${imgIdx}.png`;
        });
    }
  });