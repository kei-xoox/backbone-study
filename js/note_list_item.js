App.NoteListItemView = Backbone.View.extend({
    tagName: 'tr',

    initialize: function (){
      // モデルのdestroyイベントを監視して、
      // Backbone.viewのremoveメソッドを呼び出す
      this.listenTo(this.model, 'destroy', this.remove);
    },

    // [Delete]ボタンを監視して、
    // onClickDeleteメソッドを呼び出す
    events: {
      'click .js-delete': 'onClickDelete'
    },

    render: function () {
        var template = $('#noteListItemView-template').html();
        var compiled = _.template(template);
        var html = compiled(this.model.toJSON());

        this.$el.html(html);
        return this;
    },

    onClickDelete: function (){
      this.model.destroy();
    }
});
