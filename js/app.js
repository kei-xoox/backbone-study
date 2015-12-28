window.App = {};

var initializeNotes = function(){
  var noteCollection = new App.NoteCollection([{
    title: 'test1',
    body: 'this is test1.'
  }, {
    title: 'test2',
    body: 'this is test2.'
  }, {
    title: 'test3',
    body: 'this is test3.'
  }]);

  noteCollection.each(function(note){
    note.save();
  });

  return noteCollection.models;
};

$(function(){
  App.noteCollection = new App.NoteCollection();
  App.mainContainer = new App.Container({
    el: '#main-container'
  });
  App.noteCollection.fetch().then(function(notes){
    if(notes.length === 0){
      var models = initializeNotes();
      App.noteCollection.reset(models);
    }

    // var noteListView = new App.NoteListView({
    //   collection: App.noteCollection
    // });
    //
    // App.mainContainer.show(noteListView);

    App.router = new App.Router();
    Backbone.history.start();
  });
});


/*$(function (){
    var note = new App.Note({
        title: 'テスト',
        body: 'テストです'
    });

    var noteView = new App.NoteListItemView({
        model: note
    });

    noteView.render().$el.appendTo($(document.body));
});*/

/*
$(function (){
    var noteCollection = new App.NoteCollection([{
        title: 'test 1',
        body: 'this is test 1'
    },{
        title: 'test 2',
        body: 'this is test 2'
    }]);

    var mainContainer = new App.Container({
        el: '#main-container'
    });

    var noteListView = new App.NoteListView({
        collection: noteCollection
    });

    mainContainer.show(noteListView);
});
*/
