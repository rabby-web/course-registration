# Course Registration

## Live-Link: [Course Registration](http://scary-addition.surge.sh/)

- Add at least 3 Project features

1.  sweetalert2 add for warning.
2.  Each student will have 20 hours of credit time.
3.  The price is calculated after selecting the course.

- Discuss how you managed the state in your assignment project.

React applications are built using components and they manage their state internally and it works well for applications with few components, but when the application grows bigger, the complexity of managing states shared across components becomes difficult.

Here is a Course Registration application, in which the status of multiple components will change when purchasing a course.

1. After the data is loaded, it is stored in a state called setLoadData, and the value of each card in loadData is dynamically displayed in the cards.

2. Each student has 20 hours of credit to spend on the course, which is stored in the remaining state.
   And if the course is enrolled, the credit time will decrease, it is stored in setRemaining, if more than one course is enrolled, there will be no more credit remaining, the value of remaining will be 0.
   A warning is given by showing sweet alert with condition on 0 value of this remaining.

3. After students enroll in a course, it is passed to setSelectCourse , which is stored in selectCourse.
   And if a new course is enrolled, it is stored in selectCourse by linking with the previous course.
   and serial number and name of the course
   Dynamically displaying on the display.

4. How many hours will be spent to learn each course is shown in credit on the cards.
   That is after enrolling in the course
   Total credit hours are displayed.
   And if you enroll in multiple courses, the credit hours spent in the courses are added together and displayed as total credit hours.

5. Enrollment in our courses requires a certain amount of payment which is shown on the price cards.
   After enrolling in the course it is passed to setSelectCourse, and it is stored in course price and displayed as total price.
   If more than one course is enrolled, the price of all the courses is added and shown in the update price total price

If a course is already enrolled, it will not be enrolled again, after checking the condition, a sweet alert will be displayed and warned.
