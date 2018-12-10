let endorsements = [
    {skill: 'html', name: 'Alex'},
    {skill: 'javascript', name: 'Tom'},
    {skill: 'reading', name: 'John'},
    {skill: 'project management', name: 'Brady'},
    {skill: 'teaching', name: 'Brett'},
    {skill: 'css', name: 'Alex'},
    {skill: 'html', name: 'Linda'},
    {skill: 'javascript', name: 'Kelly'},
    {skill: 'html', name: 'Sebastian'},
    {skill: 'html', name: 'Porsche'},
    {skill: 'project management', name: 'Turk'},
    {skill: 'teaching', name: 'Tony'}
]

// return:
// skills = [{skill: 'javascript', names: ['Alex', 'Tom', 'Kelly'], count: 4}];
//

function buildSkills(arr) {
    // for each unique skill
        // check the map
        // update if it exists, insert and update map if it doesnt
        // update array based on map index
    let skills = [];
    let index = 0;
    let skillsMap = {};
    // Loop TC O(N), SC O(N)
    for(let i = 0; i < arr.length; i++) {
        let skill = arr[i].skill;
        // check the skillMap
        if(!skillsMap[skill] && skillsMap[skill] !== 0) {
            // set skillsMap to 'skill': index
            skillsMap[skill] = index;
            // update the skills array O(N)
            skills.push({skill: skill, name: [arr[i].name], count: 1});
            index++;
        } else {
            // find the index
            let arrIndex = skillsMap[skill];
            // update the object
            skills[arrIndex].name.push(arr[i].name);
            skills[arrIndex].count++;
        }
    }

    return skills;
}

// console.log(buildSkills([{skill: 'html', name: 'Alex'},{skill: 'html', name: 'Tom'}]));
console.log(buildSkills(endorsements));