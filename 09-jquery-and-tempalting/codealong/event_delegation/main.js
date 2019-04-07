function addToList ($list, thing) {
  let $thingLi = $('<li>').html(thing)
  addCompleteLink($thingLi)
  $list.append($thingLi)
}

function addCompleteLink ($li) {
  let $completedLink = $('<span>').html(' complete task').addClass('complete-task')
  $li.append($completedLink)

  $completedLink.on('click', function (event) {
    $li.addClass('completed')
    $completedLink.html('')
  })
}

$(document).ready(function () {
  let $thingList = $('#fav-list')
  let $things = $('.fav-thing')
  let $button = $('#new-thing-button')
  let $newThingInput = $('#new-thing')

  $things.each(function() {
    addCompleteLink($(this))
  })

  $button.on('click', function (event) {
    event.preventDefault()
    let newThing = $newThingInput.val()
    if (newThing === '') {
      alert('You must type in a value!')
    } else {
      addToList($thingList, newThing)
      $newThingInput.val('')
    }
  })
})
