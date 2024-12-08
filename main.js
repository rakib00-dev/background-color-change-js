const body = document.getElementById('body');
const letColor = document.getElementById('letColor');

function letsChange() {
  body.style.background = `${letColor.value}`;
  console.log(letColor.value);
}

setInterval(() => {
  letsChange();
}, 200);
