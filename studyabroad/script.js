function result() {
    let yes_counter = 0; 
    let elements = document.getElementsByClassName("yes");
    for (let i=0; i<elements.length; i++) {
        if (elements[i].checked) {
            yes_counter++;
        }
    }
    
    elements = document.getElementsByClassName("maybe");
    for (let i=0; i<elements.length; i++) {
        if (elements[i].checked) {
            yes_counter++;
        }
    }

    let no_counter = 0;
    elements = document.getElementsByClassName("no");
    for (let i=0; i<elements.length; i++) {
        if (elements[i].checked) {
            no_counter++;
        }
    }
    console.log(yes_counter);
    console.log(no_counter);
    if (yes_counter + no_counter != 10) {
        alert("선택안한 문제가 있습니다. 모든 문제에 답해주세요.");
        return;
    }

    if (yes_counter == 10)
        location.href="필리핀.html";
    else if (yes_counter == 9)
        location.href="영국.html";
    else if (yes_counter == 8)
        location.href="영국.html";
    else if (yes_counter == 7)
        location.href="미국.html";
    else if (yes_counter == 6)
        location.href="미국.html";    
    else if (yes_counter == 5)
        location.href="캐나다.html";
    else if (yes_counter == 4)
        location.href="캐나다.html";
    else if (yes_counter == 3)
        location.href="호주.html";
    else if (yes_counter == 2)
        location.href="호주.html";
    else 
        location.href="아일랜드.html";     
    
}
