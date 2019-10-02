const talents = ["a filmmaker", "a screenwriter", "a critical thinker", "my mother's son", "a designer", "a novelist", "a preparer of baked goods", "an illustrator", "a problem solver", "a big brother", "a lover of books", "a jokester", "a scholar", "a Full Stack JavaScript Developer"];

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