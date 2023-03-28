function calculateAverage() {
    // Get all the radio buttons with the name "shotshape"
    const buttons = document.getElementsByName("shotshape");

    // Calculate the total of the selected values
    let total = 0;
    let count = 0;
    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].checked) {
            total += parseInt(buttons[i].value);
            count++;
        }
    }

    // Calculate the average and display it
    const average = total / count;
    document.getElementById("average").value = average;
}
