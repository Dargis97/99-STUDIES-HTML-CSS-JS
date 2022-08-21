import { activityUrl, people } from "./fakebook.js";

export const lineClampStyle = ` 
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;  
    overflow: hidden;
`;

export function populateFeed(people) {
    const feedElement = document.getElementById('feed');

    people.filter((_unused, i) => i < 6).map((profile) => {
        fetch(activityUrl)
            .then((response) => response.json()
                .then((activityData) => {
                    feedElement.innerHTML += `
                        <div class="col-4">
                            <div class="card mb-3">
                                <img src="${profile.picture.large}" 
                                 class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">
                                    ${profile.name.first} ${profile.name.last}
                                    </h5>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item" style="${lineClampStyle}"><b>Activity:</b>
                                     ${activityData.activity}
                                     </li>
                                    <li class="list-group-item"><b>Type:</b>
                                     ${activityData.type}
                                     </li>
                                    <li class="list-group-item"><b>Participants:</b> 
                                    ${activityData.participants}
                                    </li>
                                </ul>
                                <div class="card-foot
                            </div>
                        </div>
                        `
                }))
    })
}
