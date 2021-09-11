function send() {
  fetch('https://api.uatdrive.com:1012/users/signup',
    {
      method: 'POST',
      header: {
        'content-type': application / JSON
      },
      body: JSON.stringify(userData)
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(err => console.log(err))
    })
}

