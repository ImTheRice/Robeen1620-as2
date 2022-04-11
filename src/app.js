const notes = [{
    title: "first note",
    noteBody: "this is an example note",
    id: 1
}]

const writingArea = document.querySelector(".write-note-area")


const newNote = `
<div class="creation">
  <textarea placeholder="Type Something" rows='7' cols='85'> </textarea> 
</div>
<div class="buttons">
  <button class = saveBTN>save</button>
  <button class = cancelBTN>cancel</button>
</div>
`

const plusButton = document.querySelector(".fa-solid.fa-circle-plus")
plusButton.addEventListener('click', createNote)

function createNote() {
    if (canCreate()) {
        writingArea.insertAdjacentHTML("beforeend", newNote)
    }
    const buttonClear = document.querySelector(".cancelBTN")
    buttonClear.addEventListener('click', clearNotes)
}

function clearNotes() {
    document.querySelector(".creation").remove()
    document.querySelector(".buttons").remove()

}

function canCreate() {
    return !(document.querySelector(".creation"))
}