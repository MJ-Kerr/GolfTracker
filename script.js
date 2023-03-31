const golfCourse = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '54ef2a37a8msh7fb788601a760ccp117419jsn30a11b1f92eb',
        'X-RapidAPI-Host': 'golf-course-finder.p.rapidapi.com'
    }
};

function searchGolfCourses() {
	const searchName = document.getElementById('search-name').value;
	const searchZip = document.getElementById('search-zip').value;
	let endpoint = `https://golf-course-finder.p.rapidapi.com/courses?radius=10&lat=36.56910381018662&lng=-121.95035631683683`;
	if (searchName) {
		endpoint += `&search=${searchName}`;
	}
	if (searchZip) {
		endpoint += `&zip_code=${searchZip}`;
	}
	fetch(endpoint, golfCourse)
		.then(response => response.json())
		.then(response => {
			console.log(response)
			const golfCourses = response.courses.slice(0, 3);
			const tbody = $('#golf-courses');
			tbody.empty();
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
}

document.getElementById('search-button').addEventListener('click', searchGolfCourses);


function printArrayAverage(arr) {
    if (arr.length == 0) {
        console.log("Empty arr, no average val");
        return;
    }
    var sum = arr[0];
    for (var idx = 1; idx < arr.length; idx++) {
        sum += arr[idx];
    }
    return Math.floor(sum / arr.length);
}

let driverArray = [];
let ironArray = [];
let wedgeArray = [];

const driverInput = document.getElementById('driver-input');
const driverBtn = document.getElementById('submit-btn-driver');
driverBtn.addEventListener('click', function () {
    let num = parseInt(driverInput.value);
    driverArray.push(num);
    let average = printArrayAverage(driverArray);
    document.getElementById("driver-return").innerText = average;
});

const ironInput = document.getElementById('iron-input');
const ironBtn = document.getElementById('submit-btn-iron');
ironBtn.addEventListener('click', function () {
    let num = parseInt(ironInput.value);
    ironArray.push(num);
    let average = printArrayAverage(ironArray);
    document.getElementById("iron-return").innerText = average;
});

const wedgeInput = document.getElementById('wedge-input');
const wedgeBtn = document.getElementById('submit-btn-wedge');
wedgeBtn.addEventListener('click', function () {
    let num = parseInt(wedgeInput.value);
    wedgeArray.push(num);
    let average = printArrayAverage(wedgeArray);
    document.getElementById("wedge-return").innerText = average;
});
