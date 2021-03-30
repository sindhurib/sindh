
$("input").keyup(function (){
    m1Mark = parseFloat($("#m1Mark").val());
    m2Mark = parseFloat($("#m2Mark").val());
    scienceMark = parseFloat($("#scienceMark").val());
    englishMark = parseFloat($("#englishMark").val());
    sanskritMark = parseFloat($("#sanskritMark").val());
    socialMark = parseFloat($("#socialMark").val());

    if(isNaN(m1Mark)) m1Mark = 0;
    if(isNaN(m2Mark)) m2Mark = 0;
    if(isNaN(scienceMark)) scienceMark = 0;
    if(isNaN(englishMark)) englishMark = 0;
    if(isNaN(sanskritMark)) sanskritMark = 0;
    if(isNaN(socialMark)) socialMark = 0;
    sum = Number((m1Mark + m2Mark + scienceMark + englishMark + sanskritMark + socialMark).toFixed(2));
    $("#sumValue").text(sum);
});