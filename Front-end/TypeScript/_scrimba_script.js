let azim = setInterval(() => {
  if (document.getElementById('Skip')) {
    console.log("BTN IS TRUE");
    document.getElementById('Skip').click()
    document.querySelector('.nm-ah op-button').click()
  } else {
    console.log("TN IS FALSE");
  }
}, 10000);