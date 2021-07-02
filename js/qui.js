import { milestones } from "./milestones.js";
import { stories } from "./stories.js";
import { methods } from "./methods.js";
import { teammates } from "./team.js";

function addMilestones () {
    for (let milestone of milestones) {
        $('#block_milestones').append(`
            <div class="col-12 d-flex flex-row my-3">
                <div class="d-none d-lg-block col-lg-2 border border-info text-center">
                    <p class="mt-5">IMAGE<br>OU<br>CSS<br>ICI</p>
                </div>
                <div class="col-12 col-lg-9 text-center">
                    <p class="h2 text-danger">${milestone.date}</p>
                    <p class="h3">${milestone.title}</p>
                    <p>${milestone.description}</p>
                </div>
            </div>
        `)
    }
}
                    
function addStories () {
    for (let story of stories) {
        $('#block_stories').append(`
            <div class="col-12 col-lg-10 offset-lg-1 text-center my-3">
                <p class="h2 story_date">${story.date}</p>
                <p class="h3 mt-5">${story.title}</p>
                <p>${story.description}</p>
            </div>
        `)
    }
}

function addMethods () {
    for (let method of methods) {
        $('#block_methods').append(`
            <div class="col-12 col-lg-10 offset-lg-1 text-center my-3">
                <p class="h3">${method.title}</p>
                <p>${method.description}</p>
            </div>
        `)
    }
}

function addTeam () {
    
    for (let i = 0; i < 2; i++) {
        $('#block_team_group').append(`
            <div id="team_row_${i}" class="d-flex flex-row justify-content-center col-12 col-lg-8 mx-auto"></div>
        `);
    }

    for (let i = 0; i < 3; i++) {
        $('#team_row_0').append(`
            <img id="team_mate_${i}" src="${teammates[i].src}" alt="Photo de ${teammates[i].name}" class="w-25 team_mate"></a>
        `)
    }

    for (let i = 3; i < teammates.length; i++) {
        $('#team_row_1').append(`
            <img src="${teammates[i].src}" alt="Photo de ${teammates[i].name}" class="w-25 team_mate">
        `)
    }
    
    let team_mates = document.querySelectorAll('.team_mate');

    for (let i = 0; i < team_mates.length; i++) {

        team_mates[i].addEventListener( 'mouseenter', () => {
            $('.team_mate').addClass('is_less_visible');
            $(team_mates[i]).removeClass('is_less_visible').addClass('is_visible')
        })

        team_mates[i].addEventListener( 'mouseleave', () => {
            $('.team_mate').removeClass('is_less_visible');
            $(team_mates[i]).removeClass('is_visible')
        })

        team_mates[i].addEventListener( 'click', () => {
            window.location.href=`#teammate_${i}`;
        })
            
    }
}

function addTeamMates () {
    for (let i = 0; i < teammates.length; i++) {
        $('#block_team_individual').append(`
            <div class="col-12 col-lg-10 offset-lg-1 d-flex flex-column flex-lg-row my-3">
                <div class="col-6 col-lg-2 mx-auto">
                    <img id="teammate_${i}" src="${teammates[i].src}" alt="Photo de ${teammates[i].name}" class="w-100">
                </div>
                <div class="col-12 col-lg-8 text-center">
                    <p class="h2">${teammates[i].name}</p>
                    <p class="h3">${teammates[i].job}</p>
                    <p>${teammates[i].description}</p>
                </div>
            </div>
        `)
    }

}

addMilestones();
addStories();
addMethods();
addTeam();
addTeamMates();
