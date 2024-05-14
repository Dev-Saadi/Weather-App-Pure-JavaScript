
const temperatureField = document.querySelector(".temp");
const locationField = document.querySelector(".time_location p");
const dateAndtimeField = document.querySelector(".time_location span");
const icon = document.querySelector(".iconImg")
const conditionField = document.querySelector(".condition p");
const searchField = document.querySelector(".search_bar");
const form = document.querySelector("form");


form.addEventListener('submit', searchForLocation)


let targetCity = 'Dhaka'

const fetchweather = async (targetlocation) => {

    const url = `http://api.weatherapi.com/v1/current.json?key=f7a7328c61774716981152055241305&q=${targetlocation}&aqi=no`

    const res = await fetch(url);

    const data = await res.json()

    console.log(data);


    let locationTemp = data.current.temp_c
    let locationName = data.location.name
    let locationTime = data.location.localtime
    let localcondition = data.current.condition.text
    let localImg = data.current.condition.icon

    updateDetails(locationTemp, locationName, locationTime, localImg, localcondition)



}

function updateDetails(locationTemp, locationName, locationTime, localImg, localcondition) {

    let splitDate = locationTime.split(" ")[0];
    let splitTime = locationTime.split(" ")[1];
    let currentDay = getDayName(new Date(splitDate).getDay())


    temperatureField.innerHTML = locationTemp
    locationField.innerHTML = locationName
    icon.src = "https:" + localImg
    dateAndtimeField.innerHTML = `${splitDate} ${currentDay} ${splitTime} `
    conditionField.innerHTML = localcondition


}






function searchForLocation(e) {

    e.preventDefault()

    targetCity = searchField.value

    fetchweather(targetCity)
}





fetchweather(targetCity)



function getDayName(number) {
    switch (number) {
        case 0:
            return 'Sunday'
        case 1:
            return 'Monday'
        case 2:
            return 'Tueday'
        case 3:
            return 'Wednesday'
        case 4:
            return 'Thursday'
        case 5:
            return 'Friday'
        case 6:
            return 'Saturday'


    }
}