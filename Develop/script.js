// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  
  $(".saveBtn").on("click",function(){
    // console.log("click")
    const timeBlock = $(this).parent().attr("id")
    const thingToDo = $(this).siblings(".description").val()
    // console.log(timeBlock,thingToDo)
    localStorage.setItem(timeBlock,thingToDo)
  })
  for(var i=9; i<=17; i++){
    $(`#hour-${i} .description`).val(localStorage.getItem(`hour-${i}`))
  }
  function changeColor(){
    const currentHour = dayjs().hour()
    console.log(currentHour)
    $(".time-block").each(function(){
      console.log($(this).attr("id"))
      console.log($(this).attr("id").split("-")[1])
      const domHour = $(this).attr("id").split("-")[1]
      //can add parseInt if you want to match data types with ===
      if(domHour < currentHour){
        $(this).addClass("past")
      } else if(domHour == currentHour){
        $(this).addClass("present")
      }else {
        $(this).addClass("future")
      }
        })
      }
      changeColor()
      // Adds current date to top of page
      $("#currentDay").text(dayjs().format('DD/MM/YYYY'))
      // TODO: Add code to apply the past, present, or future class to each time
      // block by comparing the id to the current hour. HINTS: How can the id
      // attribute of each time-block be used to conditionally add or remove the
      // past, present, and future classes? How can Day.js be used to get the
      // current hour in 24-hour time?
      
      //
      // TODO: Add code to get any user input that was saved in localStorage and set
      // the values of the corresponding textarea elements. HINT: How can the id
      // attribute of each time-block be used to do this?
      //
      // TODO: Add code to display the current date in the header of the page.
    });
    
    //const container = document.getElementById("container")
    // container.addEventListener('click', e => {
      //   //localStorage.setItem()
      //    console.log(e.target,"target")
      // })