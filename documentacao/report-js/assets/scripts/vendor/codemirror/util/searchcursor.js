!function(){function t(t,e,i,a){if(this.atOccurrence=!1,this.cm=t,null==a&&"string"==typeof e&&(a=!1),i=i?t.clipPos(i):{line:0,ch:0},this.pos={from:i,to:i},"string"!=typeof e)e.global||(e=new RegExp(e.source,e.ignoreCase?"ig":"g")),this.matches=function(i,a){if(i){e.lastIndex=0;for(var s=t.getLine(a.line).slice(0,a.ch),o=e.exec(s),n=0;o;){n+=o.index+1,s=s.slice(n),e.lastIndex=0;var r=e.exec(s);if(!r)break;o=r}n--}else{e.lastIndex=a.ch;var s=t.getLine(a.line),o=e.exec(s),n=o&&o.index}return o?{from:{line:a.line,ch:n},to:{line:a.line,ch:n+o[0].length},match:o}:void 0};else{a&&(e=e.toLowerCase());var s=a?function(t){return t.toLowerCase()}:function(t){return t},o=e.split("\n");this.matches=1==o.length?function(i,a){var o,n=s(t.getLine(a.line)),r=e.length;return(i?a.ch>=r&&-1!=(o=n.lastIndexOf(e,a.ch-r)):-1!=(o=n.indexOf(e,a.ch)))?{from:{line:a.line,ch:o},to:{line:a.line,ch:o+r}}:void 0}:function(e,i){var a=i.line,n=e?o.length-1:0,r=o[n],l=s(t.getLine(a)),c=e?l.indexOf(r)+r.length:l.lastIndexOf(r);if(!(e?c>=i.ch||c!=r.length:c<=i.ch||c!=l.length-r.length))for(;;){if(e?!a:a==t.lineCount()-1)return;if(l=s(t.getLine(a+=e?-1:1)),r=o[e?--n:++n],!(n>0&&n<o.length-1)){var d=e?l.lastIndexOf(r):l.indexOf(r)+r.length;if(e?d!=l.length-r.length:d!=r.length)return;var p={line:i.line,ch:c},f={line:a,ch:d};return{from:e?f:p,to:e?p:f}}if(l!=r)return}}}}t.prototype={findNext:function(){return this.find(!1)},findPrevious:function(){return this.find(!0)},find:function(t){function e(t){var e={line:t,ch:0};return i.pos={from:e,to:e},i.atOccurrence=!1,!1}for(var i=this,a=this.cm.clipPos(t?this.pos.from:this.pos.to);;){if(this.pos=this.matches(t,a))return this.atOccurrence=!0,this.pos.match||!0;if(t){if(!a.line)return e(0);a={line:a.line-1,ch:this.cm.getLine(a.line-1).length}}else{var s=this.cm.lineCount();if(a.line==s-1)return e(s);a={line:a.line+1,ch:0}}}},from:function(){return this.atOccurrence?this.pos.from:void 0},to:function(){return this.atOccurrence?this.pos.to:void 0},replace:function(t){var e=this;this.atOccurrence&&(e.pos.to=this.cm.replaceRange(t,e.pos.from,e.pos.to))}},CodeMirror.defineExtension("getSearchCursor",function(e,i,a){return new t(this,e,i,a)})}();