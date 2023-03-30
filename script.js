const golfCourse = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '54ef2a37a8msh7fb788601a760ccp117419jsn30a11b1f92eb',
        'X-RapidAPI-Host': 'golf-course-finder.p.rapidapi.com'
    }
};

fetch('https://golf-course-finder.p.rapidapi.com/courses?radius=10&lat=36.56910381018662&lng=-121.95035631683683', golfCourse)
    .then(response => response.json())
    .then(response =>{ console.log(response)
    const golfCourses = response.courses.slice(0, 3);
	const tbody = $('#golf-courses');
	golfCourses.forEach(golfCourse => {
		const row = `
			<tr>
				<td>${golfCourse.name}</td>
				<td>${golfCourse.zip_code}</td>
			</tr>
		`;
		tbody.append(row);
	});
})
.catch(err => console.error(err));



// function printArrayAverage(arr) {
//     if (arr.length == 0) {
//         console.log("Empty arr, no average val");
//         return;
//     }
//     var sum = arr[0];
//     for (var idx = 1; idx < arr.length; idx++) {
//         sum += arr[idx];
//     }
//     return sum / arr.length;
// }

// document.getElementById("driver-return").innerText = printArrayAverage();


// let numArray = [];

// const input = document.getElementById('num-input-driver');
// const btn = document.getElementById('submit-btn-driver');


// btn.addEventListener('click', function () {
//     let num = parseInt(input.value);
//     numArray.push(num);

// printArrayAverage(numArray);
// });
