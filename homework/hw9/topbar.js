function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function (e) {
    if (!e.target.matches('.dropbtn')) {
      var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
  }
  let main = document.querySelector('#main')
  let pages={
    '#login':`
    <h1>登入</h1>
    <input type="text" placeholder="帳號"/><br/>
    <input type="text" placeholder="密碼"/><br/>
    <input type="submit" value="登入">
    `,
    '#home':`
    <h1>首頁</h1>
    <p>本網頁可以按功能表去切換畫面</p> `, 
    '#logout':`
    <input type="submit" onclick="alert('確認登出?')" value="登出">
    `,
    '#signup':`
    <label for="fname"></label>
    <input style="background-color:rgb(255, 255, 255);" type="text" id="fname" name="fname" placeholder="姓氏">
    <label for="lname"></label>
    <input style="background-color:rgb(255, 255, 255);" type="text" id="lname" name="lname" placeholder="名字"><br><br>

    <label for="username"></label>
    <input style="background-color:rgb(255, 255, 255);" type="text" id="username" name="username" placeholder="帳號" ><br><br>
    <label for="pwd"></label>
    <input style="background-color:rgb(255, 255, 255);" type="password" id="pwd" name="pwd" placeholder="密碼"><br><br>

    <label for="email"></label>
    <input style="background-color:rgb(255, 255, 255);"  type="email" id="email" name="email" placeholder="電子郵件"><br><br>

    <label for="phonenumber"></label>
    <input style="background-color:rgb(255, 255, 255)"  type="text" id="phonenumber" name="phonenumber" placeholder="手機號碼"><br><br>

    <p>生日:</p>
    <label for="birthday"></label><br>
    <input type="date" id="birthday" name="birthday" ><br><br>

    <p>性別:</p>
    <input type="radio" id="man" name="gender" value="男性">
    <label for="man">男性</label><br>
    <input type="radio" id="woman" name="gender" value="女性">
    <label for="woman">女性</label><br><br>

    <label for="bloodtype"></label>
    <input type="text" id="bloodtype" name="bloodtype" placeholder="血型"><br><br>

    <label for="fcolor">最喜歡的顏色</label>
    <input type="color" id="fcolor" name="fcolor"><br><br>


    <input type="submit" onclick="alert('確認註冊?')" value="註冊">
    <input type="reset" onclick="alert('確認重設?')">
    `,
  }
  
window.onhashchange = function () {
  let hash = window.location.hash
  main.innerHTML = pages[hash]
}

