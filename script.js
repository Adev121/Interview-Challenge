const input =  document.getElementById("input")
const form = document.getElementById("form")
const Name = document.getElementById("Name")
const Bio = document.getElementById("Bio")
const Followers = document.getElementById("Followers")
const Following = document.getElementById("Following")
const Repos = document.getElementById("Repos")
const Avatar = document.getElementById("Avatar")
const Twitter = document.getElementById("Twitter")
const locat = document.getElementById("locat")
const info = document.getElementsByClassName("info")


form.addEventListener("submit",(event)=>{
    event.preventDefault();
    const value=input.value;
    if(value)
    {   
        const getData =async ()=>{
            try {
                const api =await fetch(`https://api.github.com/users/${value}`)
        .then((res)=> res.json())
        .then((data)=> {
            console.log(data)
            console.log({Name:data.name,Avatar:data.avatar_url,Bio:data.bio, Followers:data.followers,Following:data.following,Repos :data.public_repos,Twitter:data.twitter_username,Location:data.location})
            Name.innerHTML=`${data.name!=null?data.name:data.login}`;
            Bio.innerHTML=` ${data.bio!=null?data.bio:"No Bio"}`;
            Followers.innerHTML=`<strong>Followers:</strong> ${data.followers}`;
            Following.innerHTML=`<strong>Following:</strong> ${data.following}`;
            Repos.innerHTML=`<strong>Repos:</strong> ${data.public_repos}`;
            Twitter.innerHTML=`<strong>Twitter:</strong> ${data.twitter_username}`;
            locat.innerHTML=`<strong>Location:</strong> ${data.location}`;
            Avatar.src=
            (`${data.avatar_url}`);
          
        })
            } catch (error) {
                console.log(error)
            }
        }
        getData();
        
    }
})