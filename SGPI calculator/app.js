function grade_calc(a, i) {
    var grade;
    // for maths tut
    if (i == 9) {
        var t = a / 25 * 100;
        if (85 <= t && t <= 100) {
            grade = 10;
        }
        else if (75 <= t && t < 85) {
            grade = 9;
        }
        else if (70 <= t && t < 75) {
            grade = 8;
        }
        else if (60 <= t && t < 70) {
            grade = 7;
        }
        else if (50 <= t && t < 60) {
            grade = 6;
        }
        else if (45 <= t && t < 50) {
            grade = 5;
        }
        else if (40 <= t && t < 45) {
            grade = 4;
        }
        else {
            grade = 0
        }
    }
    else if (i == 5 || i == 6 || i == 7 || i == 8 || i == 10) {
        const t = a / 50 * 100;
        if (85 <= t && t <= 100) {
            grade = 10;
        }
        else if (75 <= t && t < 85) {
            grade = 9;
        }
        else if (70 <= t && t < 75) {
            grade = 8;
        }
        else if (60 <= t && t < 70) {
            grade = 7;
        }
        else if (50 <= t && t < 60) {
            grade = 6;
        }
        else if (45 <= t && t < 50) {
            grade = 5;
        }
        else if (40 <= t && t < 45) {
            grade = 4;
        }
        else {
            grade = 0
        }
    }
    else {
        const t = a;
        if (85 <= t && t <= 100) {
            grade = 10;
        }
        else if (75 <= t && t < 85) {
            grade = 9;
        }
        else if (70 <= t && t < 75) {
            grade = 8;
        }
        else if (60 <= t && t < 70) {
            grade = 7;
        }
        else if (50 <= t && t < 60) {
            grade = 6;
        }
        else if (45 <= t && t < 50) {
            grade = 5;
        }
        else if (40 <= t && t < 45) {
            grade = 4;
        }
        else {
            grade = 0
        }
    }
    return grade;
}

function lets_submit() {
    var x;
    var sem2 = [];
    var sem1 = [];
    var grade = [];
    var err = [];
    for (var i = 0; i <= 10; ++i) {
        x = document.getElementById("form").elements[i].value;

        if ((i == 0 || i == 1 || i == 2 || i == 3 || i == 5 || i == 6 || i == 7 || i == 8 || i == 9 || i == 10) && x > 50) {
            err.unshift(x)
        }
        else if (i == 4 && x > 100) {
            alert("EVS/CS marks should be less than 100.Please Check your entries")
        }
        else if (i == 9 && x > 25) {
            alert("Maths tut marks should be less than 25")
        }
        else {
            sem2.push(Number(x))
        }
    }

    var c = 0;
    for (var i = 0; i <= err.length; ++i) {
        c++;
    }
    if (c > 0) {
        alert("All marks except EVS/CS msut be less than 50. Please Check your Entries !")
    }

    for (var i = 11; i <= 12; ++i) {
        x = document.getElementById("form").elements[i].value;
        if (i == 11 && x > 725) {
            alert("sem-1 total marks should be less than 725")
        }
        else if (i == 12 && x > 10) {
            alert("sem-1 SGPI should be less than 10")
        }
        else {
            sem1.push(Number(x))
        }
    }

    for (var i = 0; i <= 10; ++i) {
        // for evs and maths tut
        if (i == 4 || i == 9) {
            var g = grade_calc(sem2[i], i);
            grade.push(g)
        }
        //for CA marks
        else if (i == 0 || i == 1 || i == 2 || i == 3) {
            var ese = ((sem1[0] / 725) * 100) / 2
            ese = Math.round(ese)
            var final = Math.round(sem2[i] + ese)
            var g = grade_calc(final, i)
            grade.push(g);
        }
        // remaining 
        else {
            var g = grade_calc(sem2[i], i);
            grade.push(g)
        }
    }

    var sgpi = 4 * grade[0] + 1 * grade[9] + 4 * grade[1] + 3 * grade[2] + 3 * grade[3] + 2 * grade[4] + 2 * grade[5] + 1 * grade[6] + 1 * grade[7] + 1 * grade[8] + 2 * grade[10];
    var result = document.getElementById("result");
    result.innerHTML = "<p> Your SGPI of sem-2 is " + (sgpi / 24).toPrecision(3) + " and CGPA is " + ((sgpi / 24 + sem1[1]) / 2).toPrecision(3) + "</p>";

}