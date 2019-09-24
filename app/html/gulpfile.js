// --------------------------------
// Central qulp file to include all tasks found in folder './gulp/tasks'
// --------------------------------

var requireDir = require('require-dir');

// Require all tasks in gulp/tasks, including subfolders
requireDir('./gulp/tasks', { recurse: true });