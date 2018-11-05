
class Driver {
  constructor(name, startDate) {

    this.name = name
    this.startDate = new Date(startDate)
  }


  yearsExperienceFromBeginningOf(year) {

    return (year - this.startDate.getFullYear())
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation

  }


blocksTravelled()
{
let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

let begvertical = Number(this.beginningLocation.vertical)
let endvertical = Number(this.endingLocation.vertical)

let verticalBlocks = Math.abs(endvertical - begvertical)



let beghoriz = eastWest.indexOf(this.beginningLocation.horizontal)
let endhoriz = eastWest.indexOf(this.endingLocation.horizontal)

let horizBlocks = Math.abs(endhoriz - beghoriz)

return (verticalBlocks + horizBlocks)



}

estimatedTime(peak) {

if (peak) {
  return this.blocksTravelled() / 2
} else {
  return this.blocksTravelled() / 3
}


}

}
