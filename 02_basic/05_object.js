const course = {
    courseName:"js in hindi",
    price: "999",
    courseInstructor:"pradip"

}
// console.log(course.price); // repetative and old methode for finding a value from object.

// const {courseInstructor} = course;
// console.log(courseInstructor); // latest and most useful mehtode to take any value from any object.

const {courseInstructor: instructor} = course;
console.log(instructor); // in this methode we are able to extract the value and name them accourding our man and them we can call it for that name.


