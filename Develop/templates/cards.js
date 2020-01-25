const headerCard = function() {
    return `<!DOCTYPE html>
    <head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    <meta charset="UTF-8"></meta>

    </head>
    <body>
        <div class="jumbotron jumbotron-fluid text-center bg-dark">
            <div class="container">
            <h1 class="diplay-4 text-light">Your Team</h1>
            </div>
        </div>
        <div class="container">
            <div class="col-md-12">
                <div class="row">
`
};

const managerCard = function (replies) {
    return `<div class="card border-info mb-3 text-center" style="max-width: 18rem;">
    <div class="card-header">${replies.name}</div>
    <div class="card-body">
      <h5 class="card-title">${replies.id}</h5>
      <p class="card-text">Email: ${replies.email}<a href="#"><span class="glyphicon glyphicon-envelope"></span></a></p>
      <p class="card-text">Office: ${replies.office}</p>
      <p class="card-text">ID: ${replies.id}</p>
    </div>
  </div>`
};

const internCard = function (replies) {
    return `<div class="card border-info mb-3 text-center" style="max-width: 18rem;">
    <div class="card-header">${replies.name}</div>
    <div class="card-body">
      <h5 class="card-title">${replies.id}</h5>
      <p class="card-text">Email: ${replies.email}<a href="#"><span class="glyphicon glyphicon-envelope"></span></a></p>
      <p class="card-text">School: ${replies.school}</p>
      <p class="card-text">ID: ${replies.id}</p>
    
    </div>
  </div>`
};

  const engineerCard = function (replies) {
      return `<div class="card border-info mb-3 text-center" style="max-width: 18rem;">
      <div class="card-header">${replies.name}</div>
      <div class="card-body">
        <h5 class="card-title">${replies.id}</h5>
        <p class="card-text">Email: ${replies.email}<a href="#"><span class="glyphicon glyphicon-envelope"></span></a></p>
        <p class="card-text">Github UN: ${replies.github}</p>
        <p class="card-text">ID: ${replies.id}</p>
      
      </div>
    </div>`
};
const footerCard = function() {
    return `</div>
    </div>
</div>
</body>
</html>`
};

module.exports = {
    manager: managerCard,
    engineer: engineerCard,
    intern: internCard,
    header: headerCard,
    footer: footerCard,
}
