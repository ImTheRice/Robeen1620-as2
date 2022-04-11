const notes = []

const newNote = `
<div class="creation">
  <textarea placeholder="Type Something" rows='7' cols='85'></textarea> 
</div>
<div class="buttons">
  <button class = saveBTN>save</button>
  <button class = cancelBTN>cancel</button>
</div>
`
const sideNoteArea = document.querySelector(".notes-list")
const writingArea = document.querySelector(".write-note-area")
const readingArea = document.querySelector(".read-note-area")

const plusButton = document.querySelector(".fa-solid.fa-circle-plus")
plusButton.addEventListener('click', createNote)

function canCreate() {
    return !(document.querySelector(".creation"))
}

function createNote() {
    if (canCreate()) {
        writingArea.insertAdjacentHTML("beforeend", newNote)
    }
    const buttonClear = document.querySelector(".cancelBTN")
    buttonClear.addEventListener('click', clearNotes)
    const buttonSave = document.querySelector(".saveBTN")
    buttonSave.addEventListener('click', saveNotes)
}

function clearNotes() {
    document.querySelector(".creation").remove()
    document.querySelector(".buttons").remove()
}

function saveNotes() {
    const fullNote = document.querySelector(".creation textarea").value

    if (fullNote == '') {
        return
    }

    const words = fullNote.split('\n')
    const titleName = (words[0])
    const content = words.splice(1).join('\n')
    const notePackage = {
        title: titleName,
        noteBody: content,
        id: notes.length + 1
    }
    notes.push(notePackage)

    sendToSide(notePackage)

    clearNotes()

    const readingItemList = document.querySelectorAll(".notes-list li")
    readingItemList.forEach(item => item.addEventListener('click', openExistingNote))
}

function sendToSide(notePackage) {
    console.log(notePackage)
    sideNoteArea.insertAdjacentHTML("beforeend", (`<li id ="${notePackage.id}">${notePackage.title}</li>`))
}

function canRead() {
    return !(document.querySelector(".read-note"))
}

function openExistingNote(event) {
    if (canRead()) {
        const id = event.target.id
        const toRead = (notes[id - 1])
        readingArea.insertAdjacentHTML("beforeend",
            `<div class=read-note><div class=readable><h1>${toRead.title}</h1><h2>${toRead.noteBody}</h2></div>
            <div><button class=closeBTN>CLOSE</button></div></div>`)

        const closeButton = document.querySelector(".closeBTN")
        closeButton.addEventListener('click', closeExistingNote)
    }
}

function closeExistingNote() {
    document.querySelector(".read-note").remove()
}