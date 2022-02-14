KT.tasks.groupUpdateFilters.push({
  name: 'AutoAssignSwimlaneByPriority',
  action: function(tasks, attrs) {
    var sl; var slName;
    console.log("tasks:", tasks);
    console.log("attrs:", attrs);
    if (attrs && attrs['swimlane_id'] && _.filter(tasks, function(t) {
      return t.get('swimlane_id') === attrs['swimlane_id'];
    }).length === 0) {
      if (sl = KT.Swimlane.get(attrs['swimlane_id'])) {
        slName = (sl.get('priority') || '').toLowerCase();
        console.log(s1Name);
        var priorities = ['low', 'medium', 'high'];
        if (slName.indexOf('low') >= 0) {
          return attrs.swimlane_id = 'Low Priority';
        }
        else if (slName.indexOf('medium') >= 0) {
          return attrs.swimlane_id = 'Medium Priority';
        }
        else if (slName.indexOf('high') >= 0) {
          console.log("High prior");
          return attrs.swimlane_id = 'High Priority';
        }
      }
    }
  }
});
