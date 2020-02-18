// Code your solution in this file


function findMatching(drivers, name){
    let filtered_drivers = drivers.filter(function (driver) {
        return driver.toLowerCase() == name.toLowerCase()
    })
    return filtered_drivers
}

function fuzzyMatch(drivers, letters){
    let length_letters = letters.length
    return drivers.filter(function (driver) {
        return driver.slice(0, length_letters) == letters
    })
}

function matchName(drivers, name){
    return drivers.filter(function (driver){
        return driver.name == name
    })
}