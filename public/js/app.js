const talents = ["a Filmmaker", "a Screenwriter", "a Son", "a Designer", "a Novelist", "a Baker", "an Illustrator", "a Problem Solver", "a Big-Brother", "a Bibliophile", "a Jokester", "a Full Stack JavaScript Developer"];

function changeTalent () {
    const $talent = $('#talent');
    const $talentString = $talent.text();
    const $index = talents.indexOf($talentString);
    let $nextTalent = talents[$index + 1];
    if (!$nextTalent) {
        $nextTalent = talents[0];
    }
    $talent.text($nextTalent);
};

setInterval(changeTalent, 3500);