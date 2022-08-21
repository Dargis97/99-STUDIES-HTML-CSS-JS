const profileBody = document.getElementById('profileBody');

export function setProfile(profile) {
    profileBody.innerHTML = `
    <div class="card">
        <img src="${profile.picture.large}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${profile.name.first} ${profile.name.last}</h5>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">${profile.dob.age}</li>
            <li class="list-group-item">${profile.location.country}</li>
            <li class="list-group-item">${profile.location.city}</li>
        </ul>
    </div>
    `
}
