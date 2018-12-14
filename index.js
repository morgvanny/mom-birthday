document.addEventListener('DOMContentLoaded', () => {
  $('img:first')
    .transition('set looping')
    .transition('tada', '1500ms');
  $('img:first').click(e => {
    $('h3').remove();
    e.target.remove();
    initiateUltimateBirthdayExperience();
  });
});

function initiateUltimateBirthdayExperience() {
  new Audio('./song.mp3').play();
  $('h2').transition({
    animation: 'scale',
    duration: '3s',
    onComplete: () => {
      $('h2').transition({
        animation: 'scale',
        duration: '2s',
        onComplete: () => {
          $('h2')[0].innerText = 'I hope you have a good birthday!';
          $('h2').transition({
            animation: 'scale',
            duration: '3s',
            onComplete: () => {
              $('h2').transition({
                animation: 'scale',
                duration: '2s',
                onComplete: () => {
                  showCard();
                }
              });
            }
          });
        }
      });
    }
  });
}

function showCard() {
  $('img:last').transition({ animation: 'scale', duration: '8s' });
}
