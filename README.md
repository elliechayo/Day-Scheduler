# Day-Scheduler

## Description 


The objective of the project was to modify a starter code and to create an application that will allow a user to add important events for each hour of the day. The events added will be saved and help the user to manage their time effectively.

The app needs to run in the browser and feature dynamically updated HTML and CSS powered by jQuery and have the following functionalities:

When the user opens the daily planner, the current day is displayed at the top of the calendar along with timeblocks for a standard business hours workday.

The user can scroll down and up to view the timeblocks available for the day.

Each timeblock is color coded to indicate whether the timeblock is in the past, present, or in the future.

The user can enter an event into any timeblock and click a save button.

The event the user entered is saved locally and displayed even if user refreshes the page. 




## Table of Contents
* [Work completed](#work-completed)
* [Installation](#installation)
* [Preview](#preview)
* [Links](#links)
* [License](#license)

## Work completed:
<hr>

*** The following work was completed within the HTML code file:**

* Additional time blocks were added to complete a full standard business hours workday.


*** The following work was completed within the CSS code file:**
* Used root to define repetitive styles
* Aligned header text to the center
* Added bottom border and padding to the "currentDay" id
* Configured top margins to eliminate space for the "container" class

*** The following codes were written within the JavaScript file:**

* To display of the current date at the header of the page.
* To ensure the code isn't run until the browser has finished rendering all the elements in the html.
* A code to add an event listener for click events on the save button.
* A code used the id in the containing time-block as a key to save the user input in local storage.
* Code to apply past, present, or future class to each time block. 

All work done was delineated by adding comments

## Installation
<hr>

Upload the application files to a webserver.
 

## Preview
<hr>

The following video shows the web application appearance and functionality once deployed:


![initial disply](/Assets/day_scheduler_app.gif)




## Links
<hr>

[URL of the deployed application](https://elliechayo.github.io/Day-Scheduler/)

[URL of the GitHub repository](https://github.com/elliechayo/Day-Scheduler)

## License
<hr>

MIT License

Copyright (c) [2023] [Elinor Chayo]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.