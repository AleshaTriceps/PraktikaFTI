        var front = document.getElementById('flipthis'),
      back_content =
      `
      <form class="form-reset">
        <p class="text-center">Enter your email address, we'll send you an email when your pin number has been reset.</p>
        <div class="form-label-group">
          <input type="email" id="resetEmail" class="form-control" placeholder="Email address" required="" autofocus="">
          <label for="resetEmail">Email Address</label>
        </div>

        <div class="text-center">
          <button id="closeCard" class="btn btn-danger btn-block btn-lg" type="submit">Request Pin Reset</button>
        </div>

      </form>`,
      back
    document.getElementById("flipCard").addEventListener('click', function (e) {
      back = flippant.flip(front, back_content, 'card', 'flippant-modal-light')
      document.getElementById("flipCard").classList.add('hidden');
      // document.getElementById("greeting").classList.add('hidden');
      document.getElementById("logo").classList.add('hidden');

      document.getElementById("closeCard").addEventListener('click', function (e) {
        back = back.close();
        document.getElementById("flipCard").classList.remove('hidden');
        document.getElementById("logo").classList.remove('hidden');
        // document.getElementById("greeting").classList.remove('hidden');
        // document.getElementById("greeting").innerHTML = 'got your reset email yet ? ';
      })
    })

var today = new Date();
    var hourNow = today.getHours();
    var greeting;

    
    greeting = 'Добро пожаловать';
    
    document.getElementById('greeting').innerHTML = greeting;