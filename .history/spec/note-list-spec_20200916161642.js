(function() {

  pushingNoteToArray()

  function pushingNoteToArray() {
    var note = new Note('i am note')
    var notelist = new Notelist
    notelist.addNote(note)
    assert.isTrue(notelist.notes.length === 1)
  }
  

})();