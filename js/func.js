let replaceQRcode = `<img src="./img/rczx.jpg" height="auto" width="100%">`;
let relpaceEnvPic = `<div id="carousel" class="carousel slide" data-ride="carousel">
<ol class="carousel-indicators">
  <li data-target="#carousel" data-slide-to="0" class="active"></li>
  <li data-target="#carousel" data-slide-to="1"></li>
  <li data-target="#carousel" data-slide-to="2"></li>
  <li data-target="#carousel" data-slide-to="3"></li>
</ol>
<div class="carousel-inner">
  <div class="carousel-item active">
    <img src="./img/personal.jpg" class="d-block w-100" alt="...">
  </div>
  <div class="carousel-item">
    <img src="./img/bookshelf.jpg" class="d-block w-100" alt="...">
  </div>
  <div class="carousel-item">
    <img src="./img/line.jpg" class="d-block w-100" alt="...">
  </div>
  <div class="carousel-item">
    <img src="./img/kt.jpg" class="d-block w-100" alt="...">
  </div>
</div>
<a class="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  <span class="sr-only">Previous</span>
</a>
<a class="carousel-control-next" href="#carousel" role="button" data-slide="next">
  <span class="carousel-control-next-icon" aria-hidden="true"></span>
  <span class="sr-only">Next</span>
</a>
</div>`;
function replaceQR() {
  $("#replace-Content").replaceWith(replaceQRcode);
}

function envclick() {
  $("#replace-Content").replaceWith(relpaceEnvPic);
  document.getElementById('hidbtn').click();

}