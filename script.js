  "use strict";
  /*document.body.onload = function(){
            let div = document.querySelector("div");
            div.innerHTML = users;
        };*/

        document.getElementById("btn").addEventListener("click", loadUser);

        function loadUser(e){
            e.preventDefault();
            let input = document.querySelector("#inp").value;
        
            let xhl = new XMLHttpRequest();
            xhl.open("GET", "https://api.github.com/users/" + input);

            xhl.onload = function(){
               let users = JSON.parse(this.responseText);
               let profile = document.querySelector("#user-profile");
               let notUser = document.querySelector("#not-user");

                    if(input === users.login){
                    console.log(users.login);
                    profile.style.display = "block";
                    let image = document.querySelector("#avatar");
                    let username = document.querySelector("#username");
                    let followings = document.querySelector("#followings");
                    let followers = document.querySelector("#followers");
                    let link = document.querySelector("a");

                    image.src = users.avatar_url;
                    username.innerHTML = users.name;
                    link.href = `${users.html_url}`;
                    followers.innerHTML = users.followers;
                    followings.innerHTML = users.following;
                    notUser.innerHTML = ``;
                    } else{
                        notUser.innerHTML = `User not Found!!!`;
                        profile.style.display = "none";
                    };
            };

            xhl.send();
        }
    