(()=>{"use strict";function t(t){const e=function(t){const{title:e,description:d,priority:o,dueDate:i,id:s}=t,c=document.createElement("div");c.classList.add("todo");const n=document.createElement("input");switch(n.type="checkbox",n.classList.add("priority"),+o){case 0:default:n.classList.add("priority-low");break;case 1:n.classList.add("priority-medium");break;case 2:n.classList.add("priority-high")}const r=document.createElement("div");r.classList.add("todo-body");const a=document.createElement("div");if(a.classList.add("todo-title"),a.textContent=e,r.appendChild(a),d){const t=document.createElement("div");t.classList.add("todo-description"),t.textContent=d.substr(0,50)+(d.length>50?"...":""),r.appendChild(t)}if(i){const t=document.createElement("div");t.classList.add("todo-due-date");const e=document.createElement("div");e.classList.add("mdi"),e.classList.add("mdi-calendar-clock-outline");const d=document.createElement("div");d.classList.add("todo-date"),d.textContent=i,t.appendChild(e),t.appendChild(d),r.appendChild(t)}const l=document.createElement("div");return l.classList.add("mdi"),l.classList.add("mdi-trash-can-outline"),c.appendChild(n),c.appendChild(r),c.appendChild(l),c.id=s,c}(t);document.querySelector(".todos").appendChild(e)}const e={toggleTodoAddForm:function(){document.querySelector(".add-task").classList.toggle("hide");const t=document.querySelector("#todo-form");t.reset(),t.classList.toggle("hide")},appendProject:function(t){const e=function(t){const{title:e,id:d}=t,o=document.createElement("li");o.classList.add("project"),o.id=d;const i=document.createElement("span");i.classList.add("project-name"),i.textContent=e;const s=document.createElement("div");return s.classList.add("mdi"),s.classList.add("mdi-trash-can-outline"),o.appendChild(i),o.appendChild(s),o}(t);document.querySelector(".projects").appendChild(e)},setActiveProject:function(e){!function(){const t=document.querySelector(".project.active");t&&(t.classList.remove(".ative"),document.querySelector(".todos").innerHTML="")}(),document.getElementById(e.id).classList.add("active"),function(e){e.todos.forEach(t)}(e)},appendTodo:t,createEditForm:function(t){if(document.querySelector(".todo-form").dataset.id)return null;const{title:e,description:d,priority:o,dueDate:i,id:s}=t,c=document.getElementById(t.id),n=function(){const t=document.querySelector("#todo-form").cloneNode(!0);return t.id="edit-form",t.reset(),t.classList.remove("hide"),t}();return n.dataset.id=s,n.title.value=e,n.description.value=d,n.priority.value=o,i&&(n.dueDate.valueAsDate=i),n.addEventListener("submit",(e=>{e.preventDefault();const[d,o,i,s]=[n.title.value,n.description.value,n.priority.value,n.dueDate.valueAsDate];t.edit(d,o,i,s)}),{once:!0}),n.querySelector(".close-form").addEventListener("click",(t=>{n.remove()}),{once:!0}),c.insertAdjacentElement("afterend",n),c.classList.add("hide"),n},editTodo:function(t){const{title:e,description:d,priority:o,id:i,dueDate:s}=t,c=document.getElementById(i),n=c.querySelector(".todo-body"),r=document.querySelector("#edit-form");c.querySelector(".todo-title").textContent=e,c.querySelector(".priority").value=o;let a=c.querySelector(".todo-description"),l=c.querySelector(".todo-due-date");if(d?(a||(a=document.createElement("div"),a.classList.add("todo-description"),n.appendChild(d)),a.textContent=d.substr(0,50)+(d.length>50?"...":"")):a&&a.remove(),s){if(!l){l=document.createElement("div"),l.classList.add("todo-due-date");const t=document.createElement("div");t.classList.add("mdi"),t.classList.add("mdi-calendar-clock-outline");const e=document.createElement("div");e.classList.add("todo-date"),e.textContent=s,l.appendChild(t),l.appendChild(e)}l.querySelector(".todo-date").textContent=s}else l&&l.remove();return c.classList.remove("hide"),r&&r.remove(),!0},removeTodo:function(t){document.getElementById(t).remove()}};class d{#t=[];#e=0;constructor(t){this.title=t,this.#e="id"+Math.random().toString(16).slice(2),e.appendProject(this),d.setActive(this)}addTodo(t){this.#t.push(t),e.appendTodo(t)}removeTodo(t){this.#t.splice(this.#t.findIndex((e=>e.id===t)),1),e.removeTodo(t)}getTodo(t){return this.#t.find((e=>e.id===t))}get id(){return this.#e}static setActive(t){d.#d=t,e.setActiveProject(t)}get todos(){return[...this.#t]}static#d;static get active(){return d.#d}}class o{checked=!1;#e=null;#o=null;constructor(t,e,o,i){this.title=t,this.description=e,this.priority=o,this.dueDate=i,this.#e="id"+Math.random().toString(16).slice(2),this.#o=d.active}edit(t,d,o,i){this.title=t,this.description=d,this.priority=o,this.dueDate=i,e.editTodo(this)}delete(){this.#o.removeTodo(this.#e)}get id(){return this.#e}}!function(){const t=new d("Today"),e=new o("Go out with trash","this is some randome not so short description",1,new Date),i=new o("Go shopping","this is some randome longer description about how awesome is this todo",0,new Date);t.addTodo(e),t.addTodo(i),[].push(t)}();const i=document.querySelector(".add-task"),s=document.querySelector(".todo-form"),c=document.querySelector(".todos");i.addEventListener("click",e.toggleTodoAddForm),s.addEventListener("submit",(t=>{t.preventDefault();const[i,c,n,r]=[s.title.value,s.description.value,s.priority.value,s.dueDate.value],a=new o(i,c,n,r);d.active.addTodo(a),s.reset(),e.toggleTodoAddForm()})),c.addEventListener("click",(t=>{const o=t.target,i=o.closest(".todo"),s=d.active.getTodo(i.id);if(!i)return null;"checkbox"===o.type&&(s.checked=o.checked),o.closest(".todo-body")&&e.createEditForm(s),o.classList.contains("mdi-trash-can-outline")&&s.delete()}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aUJBQWlCLFNBQVVDLElBQ3RDLE1BQU1xQyxFQUFJckMsRUFBSXNDLE9BQ1J6RixFQUFVd0YsRUFBRUUsUUFBUSxTQUNwQjNGLEVBQU84RCxFQUFRZ0IsT0FBT0gsUUFBUTFFLEVBQVFLLElBQzVDLElBQUtMLEVBQ0QsT0FBTyxLQUdJLGFBQVh3RixFQUFFN0UsT0FDRlosRUFBS2dGLFFBQVVTLEVBQUVULFNBRWpCUyxFQUFFRSxRQUFRLGVBQ1Z0QixFQUFrQnpCLGVBQWU1QyxHQUVqQ3lGLEVBQUVoRixVQUFVbUYsU0FBUywwQkFDckI1RixFQUFLaUYsUUFDVCxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvLW1hbmFnZXIvLi9zcmMvZGlzcGxheUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLW1hbmFnZXIvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbWFuYWdlci8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL29kaW4tdG9kby1tYW5hZ2VyLy4vc3JjL2xvYWRJbml0LmpzIiwid2VicGFjazovL29kaW4tdG9kby1tYW5hZ2VyLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGFwcGVuZFByb2plY3QocHJvamVjdCkge1xuICAgIGNvbnN0IHByb2plY3RET00gPSBfY3JlYXRlUHJvamVjdChwcm9qZWN0KTtcbiAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHNcIik7XG4gICAgcHJvamVjdHMuYXBwZW5kQ2hpbGQocHJvamVjdERPTSk7XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVQcm9qZWN0KHByb2plY3QpIHtcbiAgICBjb25zdCB7IHRpdGxlLCBpZCB9ID0gcHJvamVjdDtcbiAgICBjb25zdCBwcm9qZWN0RE9NID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIHByb2plY3RET00uY2xhc3NMaXN0LmFkZChcInByb2plY3RcIik7XG4gICAgcHJvamVjdERPTS5pZCA9IGlkO1xuXG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBwcm9qZWN0TmFtZS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1uYW1lXCIpO1xuICAgIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gdGl0bGU7XG5cbiAgICBjb25zdCBkZWxldGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkZWxldGVJY29uLmNsYXNzTGlzdC5hZGQoXCJtZGlcIik7XG4gICAgZGVsZXRlSWNvbi5jbGFzc0xpc3QuYWRkKFwibWRpLXRyYXNoLWNhbi1vdXRsaW5lXCIpO1xuXG4gICAgcHJvamVjdERPTS5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSk7XG4gICAgcHJvamVjdERPTS5hcHBlbmRDaGlsZChkZWxldGVJY29uKTtcblxuICAgIHJldHVybiBwcm9qZWN0RE9NO1xufVxuXG5mdW5jdGlvbiBzZXRBY3RpdmVQcm9qZWN0KHByb2plY3QpIHtcbiAgICBfcmVtb3ZlQWN0aXZlUHJvamVjdCgpO1xuICAgIGNvbnN0IHByb2plY3RET00gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwcm9qZWN0LmlkKTtcbiAgICBwcm9qZWN0RE9NLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgX3Nob3dQcm9qZWN0VG9kb3MocHJvamVjdCk7XG59XG5cbmZ1bmN0aW9uIF9yZW1vdmVBY3RpdmVQcm9qZWN0KCkge1xuICAgIGNvbnN0IGFjdGl2ZVByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QuYWN0aXZlXCIpO1xuICAgIGlmICghYWN0aXZlUHJvamVjdCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGFjdGl2ZVByb2plY3QuY2xhc3NMaXN0LnJlbW92ZShcIi5hdGl2ZVwiKTtcbiAgICBfcmVtb3ZlQ3VycmVudFRvZG9zKCk7XG59XG5cbmZ1bmN0aW9uIF9yZW1vdmVDdXJyZW50VG9kb3MoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2Rvc1wiKTtcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbn1cblxuZnVuY3Rpb24gX3Nob3dQcm9qZWN0VG9kb3MocHJvamVjdCkge1xuICAgIGNvbnN0IHRvZG9zID0gcHJvamVjdC50b2RvcztcbiAgICB0b2Rvcy5mb3JFYWNoKGFwcGVuZFRvZG8pO1xufVxuXG5mdW5jdGlvbiBhcHBlbmRUb2RvKHRvZG8pIHtcbiAgICBjb25zdCB0b2RvRE9NID0gX2NyZWF0ZVRvZG8odG9kbyk7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2Rvc1wiKTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvRE9NKTtcbn1cblxuZnVuY3Rpb24gX2NyZWF0ZVRvZG8odG9kbykge1xuICAgIGNvbnN0IHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZHVlRGF0ZSwgaWQgfSA9IHRvZG87XG4gICAgY29uc3QgdG9kb0RPTSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdG9kb0RPTS5jbGFzc0xpc3QuYWRkKFwidG9kb1wiKTtcblxuICAgIGNvbnN0IHByaW9yaXR5RE9NID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHByaW9yaXR5RE9NLnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgcHJpb3JpdHlET00uY2xhc3NMaXN0LmFkZChcInByaW9yaXR5XCIpO1xuXG4gICAgc3dpdGNoICgrcHJpb3JpdHkpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgcHJpb3JpdHlET00uY2xhc3NMaXN0LmFkZChcInByaW9yaXR5LWxvd1wiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBwcmlvcml0eURPTS5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHktbWVkaXVtXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgcHJpb3JpdHlET00uY2xhc3NMaXN0LmFkZChcInByaW9yaXR5LWhpZ2hcIik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHByaW9yaXR5RE9NLmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eS1sb3dcIik7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjb25zdCB0b2RvQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdG9kb0JvZHkuY2xhc3NMaXN0LmFkZChcInRvZG8tYm9keVwiKTtcblxuICAgIGNvbnN0IHRvZG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdG9kb1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLXRpdGxlXCIpO1xuICAgIHRvZG9UaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xuXG4gICAgdG9kb0JvZHkuYXBwZW5kQ2hpbGQodG9kb1RpdGxlKTtcblxuICAgIGlmIChkZXNjcmlwdGlvbikge1xuICAgICAgICBjb25zdCB0b2RvRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0b2RvRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcInRvZG8tZGVzY3JpcHRpb25cIik7XG4gICAgICAgIHRvZG9EZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9XG4gICAgICAgICAgICBkZXNjcmlwdGlvbi5zdWJzdHIoMCwgNTApICtcbiAgICAgICAgICAgIChkZXNjcmlwdGlvbi5sZW5ndGggPiA1MCA/IFwiLi4uXCIgOiBcIlwiKTtcblxuICAgICAgICB0b2RvQm9keS5hcHBlbmRDaGlsZCh0b2RvRGVzY3JpcHRpb24pO1xuICAgIH1cbiAgICBpZiAoZHVlRGF0ZSkge1xuICAgICAgICBjb25zdCB0b2RvRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRvZG9EdWVEYXRlLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWR1ZS1kYXRlXCIpO1xuXG4gICAgICAgIGNvbnN0IGNhbGVuZGFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY2FsZW5kYXIuY2xhc3NMaXN0LmFkZChcIm1kaVwiKTtcbiAgICAgICAgY2FsZW5kYXIuY2xhc3NMaXN0LmFkZChcIm1kaS1jYWxlbmRhci1jbG9jay1vdXRsaW5lXCIpO1xuXG4gICAgICAgIGNvbnN0IHRvZG9EYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdG9kb0RhdGUuY2xhc3NMaXN0LmFkZChcInRvZG8tZGF0ZVwiKTtcbiAgICAgICAgdG9kb0RhdGUudGV4dENvbnRlbnQgPSBkdWVEYXRlO1xuXG4gICAgICAgIHRvZG9EdWVEYXRlLmFwcGVuZENoaWxkKGNhbGVuZGFyKTtcbiAgICAgICAgdG9kb0R1ZURhdGUuYXBwZW5kQ2hpbGQodG9kb0RhdGUpO1xuXG4gICAgICAgIHRvZG9Cb2R5LmFwcGVuZENoaWxkKHRvZG9EdWVEYXRlKTtcbiAgICB9XG5cbiAgICBjb25zdCBkZWxldGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkZWxldGVJY29uLmNsYXNzTGlzdC5hZGQoXCJtZGlcIik7XG4gICAgZGVsZXRlSWNvbi5jbGFzc0xpc3QuYWRkKFwibWRpLXRyYXNoLWNhbi1vdXRsaW5lXCIpO1xuXG4gICAgdG9kb0RPTS5hcHBlbmRDaGlsZChwcmlvcml0eURPTSk7XG4gICAgdG9kb0RPTS5hcHBlbmRDaGlsZCh0b2RvQm9keSk7XG4gICAgdG9kb0RPTS5hcHBlbmRDaGlsZChkZWxldGVJY29uKTtcblxuICAgIHRvZG9ET00uaWQgPSBpZDtcblxuICAgIHJldHVybiB0b2RvRE9NO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVUb2RvQWRkRm9ybSgpIHtcbiAgICBjb25zdCBhZGRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFza1wiKTtcbiAgICBhZGRUYXNrLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIpO1xuXG4gICAgY29uc3QgdG9kb0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG8tZm9ybVwiKTtcbiAgICB0b2RvRm9ybS5yZXNldCgpO1xuICAgIHRvZG9Gb3JtLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIpO1xufVxuXG5mdW5jdGlvbiBfY2xvbmVUb2RvRm9ybSgpIHtcbiAgICBjb25zdCB0b2RvRm9ybSA9IGRvY3VtZW50XG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI3RvZG8tZm9ybVwiKVxuICAgICAgICAuY2xvbmVOb2RlKHRydWUpO1xuICAgIHRvZG9Gb3JtLmlkID0gXCJlZGl0LWZvcm1cIjtcbiAgICB0b2RvRm9ybS5yZXNldCgpO1xuICAgIHRvZG9Gb3JtLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuXG4gICAgcmV0dXJuIHRvZG9Gb3JtO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVFZGl0Rm9ybSh0b2RvKSB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1mb3JtXCIpLmRhdGFzZXQuaWQpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZHVlRGF0ZSwgaWQgfSA9IHRvZG87XG4gICAgY29uc3QgdG9kb0RPTSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRvZG8uaWQpO1xuICAgIGNvbnN0IGVkaXRGb3JtID0gX2Nsb25lVG9kb0Zvcm0oKTtcblxuICAgIGVkaXRGb3JtLmRhdGFzZXQuaWQgPSBpZDtcbiAgICBlZGl0Rm9ybS50aXRsZS52YWx1ZSA9IHRpdGxlO1xuICAgIGVkaXRGb3JtLmRlc2NyaXB0aW9uLnZhbHVlID0gZGVzY3JpcHRpb247XG4gICAgZWRpdEZvcm0ucHJpb3JpdHkudmFsdWUgPSBwcmlvcml0eTtcbiAgICBpZiAoZHVlRGF0ZSkge1xuICAgICAgICBlZGl0Rm9ybS5kdWVEYXRlLnZhbHVlQXNEYXRlID0gZHVlRGF0ZTtcbiAgICB9XG5cbiAgICBlZGl0Rm9ybS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICBcInN1Ym1pdFwiLFxuICAgICAgICAoZXZ0KSA9PiB7XG4gICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0IFt0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkdWVEYXRlXSA9IFtcbiAgICAgICAgICAgICAgICBlZGl0Rm9ybS50aXRsZS52YWx1ZSxcbiAgICAgICAgICAgICAgICBlZGl0Rm9ybS5kZXNjcmlwdGlvbi52YWx1ZSxcbiAgICAgICAgICAgICAgICBlZGl0Rm9ybS5wcmlvcml0eS52YWx1ZSxcbiAgICAgICAgICAgICAgICBlZGl0Rm9ybS5kdWVEYXRlLnZhbHVlQXNEYXRlLFxuICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIHRvZG8uZWRpdCh0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkdWVEYXRlKTtcbiAgICAgICAgfSxcbiAgICAgICAgeyBvbmNlOiB0cnVlIH1cbiAgICApO1xuXG4gICAgZWRpdEZvcm0ucXVlcnlTZWxlY3RvcihcIi5jbG9zZS1mb3JtXCIpLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgIFwiY2xpY2tcIixcbiAgICAgICAgKGUpID0+IHtcbiAgICAgICAgICAgIGVkaXRGb3JtLnJlbW92ZSgpO1xuICAgICAgICB9LFxuICAgICAgICB7IG9uY2U6IHRydWUgfVxuICAgICk7XG5cbiAgICB0b2RvRE9NLmluc2VydEFkamFjZW50RWxlbWVudChcImFmdGVyZW5kXCIsIGVkaXRGb3JtKTtcbiAgICB0b2RvRE9NLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuXG4gICAgcmV0dXJuIGVkaXRGb3JtO1xufVxuXG5mdW5jdGlvbiBlZGl0VG9kbyh0b2RvKSB7XG4gICAgY29uc3QgeyB0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBpZCwgZHVlRGF0ZSB9ID0gdG9kbztcblxuICAgIGNvbnN0IHRvZG9ET00gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgY29uc3QgdG9kb0JvZHkgPSB0b2RvRE9NLnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1ib2R5XCIpO1xuICAgIGNvbnN0IGVkaXRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlZGl0LWZvcm1cIik7XG5cbiAgICB0b2RvRE9NLnF1ZXJ5U2VsZWN0b3IoXCIudG9kby10aXRsZVwiKS50ZXh0Q29udGVudCA9IHRpdGxlO1xuICAgIHRvZG9ET00ucXVlcnlTZWxlY3RvcihcIi5wcmlvcml0eVwiKS52YWx1ZSA9IHByaW9yaXR5O1xuICAgIGxldCBkZXNjcmlwdGlvbkRPTSA9IHRvZG9ET00ucXVlcnlTZWxlY3RvcihcIi50b2RvLWRlc2NyaXB0aW9uXCIpO1xuICAgIGxldCBkYXRlRE9NID0gdG9kb0RPTS5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tZHVlLWRhdGVcIik7XG5cbiAgICBpZiAoIWRlc2NyaXB0aW9uKSB7XG4gICAgICAgIGRlc2NyaXB0aW9uRE9NICYmIGRlc2NyaXB0aW9uRE9NLnJlbW92ZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghZGVzY3JpcHRpb25ET00pIHtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uRE9NID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uRE9NLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWRlc2NyaXB0aW9uXCIpO1xuICAgICAgICAgICAgdG9kb0JvZHkuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVzY3JpcHRpb25ET00udGV4dENvbnRlbnQgPVxuICAgICAgICAgICAgZGVzY3JpcHRpb24uc3Vic3RyKDAsIDUwKSArXG4gICAgICAgICAgICAoZGVzY3JpcHRpb24ubGVuZ3RoID4gNTAgPyBcIi4uLlwiIDogXCJcIik7XG4gICAgfVxuXG4gICAgaWYgKCFkdWVEYXRlKSB7XG4gICAgICAgIGRhdGVET00gJiYgZGF0ZURPTS5yZW1vdmUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIWRhdGVET00pIHtcbiAgICAgICAgICAgIGRhdGVET00gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgZGF0ZURPTS5jbGFzc0xpc3QuYWRkKFwidG9kby1kdWUtZGF0ZVwiKTtcbiAgICAgICAgICAgIGNvbnN0IGNhbGVuZGFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGNhbGVuZGFyLmNsYXNzTGlzdC5hZGQoXCJtZGlcIik7XG4gICAgICAgICAgICBjYWxlbmRhci5jbGFzc0xpc3QuYWRkKFwibWRpLWNhbGVuZGFyLWNsb2NrLW91dGxpbmVcIik7XG5cbiAgICAgICAgICAgIGNvbnN0IHRvZG9EYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHRvZG9EYXRlLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWRhdGVcIik7XG4gICAgICAgICAgICB0b2RvRGF0ZS50ZXh0Q29udGVudCA9IGR1ZURhdGU7XG5cbiAgICAgICAgICAgIGRhdGVET00uYXBwZW5kQ2hpbGQoY2FsZW5kYXIpO1xuICAgICAgICAgICAgZGF0ZURPTS5hcHBlbmRDaGlsZCh0b2RvRGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZGF0ZURPTS5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tZGF0ZVwiKS50ZXh0Q29udGVudCA9IGR1ZURhdGU7XG4gICAgfVxuXG4gICAgdG9kb0RPTS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgICBlZGl0Rm9ybSAmJiBlZGl0Rm9ybS5yZW1vdmUoKTtcbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlVG9kbyhpZCkge1xuICAgIGNvbnN0IHRvZG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgdG9kby5yZW1vdmUoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHRvZ2dsZVRvZG9BZGRGb3JtLFxuICAgIGFwcGVuZFByb2plY3QsXG4gICAgc2V0QWN0aXZlUHJvamVjdCxcbiAgICBhcHBlbmRUb2RvLFxuICAgIGNyZWF0ZUVkaXRGb3JtLFxuICAgIGVkaXRUb2RvLFxuICAgIHJlbW92ZVRvZG8sXG59O1xuIiwiaW1wb3J0IGRpc3BsYXlDb250cm9sbGVyIGZyb20gXCIuL2Rpc3BsYXlDb250cm9sbGVyLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xuICAgICN0b2RvcyA9IFtdO1xuICAgICNpZCA9IDA7XG4gICAgY29uc3RydWN0b3IodGl0bGUpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLiNpZCA9IFwiaWRcIiArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMTYpLnNsaWNlKDIpO1xuICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5hcHBlbmRQcm9qZWN0KHRoaXMpO1xuICAgICAgICBQcm9qZWN0LnNldEFjdGl2ZSh0aGlzKTtcbiAgICB9XG5cbiAgICBhZGRUb2RvKHRvZG8pIHtcbiAgICAgICAgdGhpcy4jdG9kb3MucHVzaCh0b2RvKTtcbiAgICAgICAgZGlzcGxheUNvbnRyb2xsZXIuYXBwZW5kVG9kbyh0b2RvKTtcbiAgICB9XG5cbiAgICByZW1vdmVUb2RvKGlkKSB7XG4gICAgICAgIHRoaXMuI3RvZG9zLnNwbGljZShcbiAgICAgICAgICAgIHRoaXMuI3RvZG9zLmZpbmRJbmRleCgodG9kbykgPT4gdG9kby5pZCA9PT0gaWQpLFxuICAgICAgICAgICAgMVxuICAgICAgICApO1xuICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5yZW1vdmVUb2RvKGlkKTtcbiAgICB9XG5cbiAgICBnZXRUb2RvKGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiN0b2Rvcy5maW5kKCh0b2RvKSA9PiB0b2RvLmlkID09PSBpZCk7XG4gICAgfVxuXG4gICAgZ2V0IGlkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jaWQ7XG4gICAgfVxuXG4gICAgc3RhdGljIHNldEFjdGl2ZShwcm9qZWN0KSB7XG4gICAgICAgIFByb2plY3QuI2FjdGl2ZSA9IHByb2plY3Q7XG4gICAgICAgIGRpc3BsYXlDb250cm9sbGVyLnNldEFjdGl2ZVByb2plY3QocHJvamVjdCk7XG4gICAgfVxuXG4gICAgZ2V0IHRvZG9zKCkge1xuICAgICAgICByZXR1cm4gWy4uLnRoaXMuI3RvZG9zXTtcbiAgICB9XG5cbiAgICBzdGF0aWMgI2FjdGl2ZTtcbiAgICBzdGF0aWMgZ2V0IGFjdGl2ZSgpIHtcbiAgICAgICAgcmV0dXJuIFByb2plY3QuI2FjdGl2ZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgZGlzcGxheUNvbnRyb2xsZXIgZnJvbSBcIi4vZGlzcGxheUNvbnRyb2xsZXJcIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kbyB7XG4gICAgY2hlY2tlZCA9IGZhbHNlO1xuICAgICNpZCA9IG51bGw7XG4gICAgI3Byb2plY3QgPSBudWxsO1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGR1ZURhdGUpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy4jaWQgPSBcImlkXCIgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDE2KS5zbGljZSgyKTtcbiAgICAgICAgdGhpcy4jcHJvamVjdCA9IFByb2plY3QuYWN0aXZlO1xuICAgIH1cblxuICAgIGVkaXQodGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZHVlRGF0ZSkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5lZGl0VG9kbyh0aGlzKTtcbiAgICB9XG5cbiAgICBkZWxldGUoKSB7XG4gICAgICAgIHRoaXMuI3Byb2plY3QucmVtb3ZlVG9kbyh0aGlzLiNpZCk7XG4gICAgfVxuXG4gICAgZ2V0IGlkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jaWQ7XG4gICAgfVxufVxuIiwiaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IFRvZG8gZnJvbSBcIi4vdG9kb1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0UGFnZSgpIHtcbiAgICBjb25zdCBwcm9qZWN0cyA9IFtdO1xuXG4gICAgY29uc3QgcHJvamVjdDEgPSBuZXcgUHJvamVjdChcIlRvZGF5XCIpO1xuXG4gICAgY29uc3QgdG9kbzExID0gbmV3IFRvZG8oXG4gICAgICAgIFwiR28gb3V0IHdpdGggdHJhc2hcIixcbiAgICAgICAgXCJ0aGlzIGlzIHNvbWUgcmFuZG9tZSBub3Qgc28gc2hvcnQgZGVzY3JpcHRpb25cIixcbiAgICAgICAgMSxcbiAgICAgICAgbmV3IERhdGUoKVxuICAgICk7XG4gICAgY29uc3QgdG9kbzEyID0gbmV3IFRvZG8oXG4gICAgICAgIFwiR28gc2hvcHBpbmdcIixcbiAgICAgICAgXCJ0aGlzIGlzIHNvbWUgcmFuZG9tZSBsb25nZXIgZGVzY3JpcHRpb24gYWJvdXQgaG93IGF3ZXNvbWUgaXMgdGhpcyB0b2RvXCIsXG4gICAgICAgIDAsXG4gICAgICAgIG5ldyBEYXRlKClcbiAgICApO1xuXG4gICAgcHJvamVjdDEuYWRkVG9kbyh0b2RvMTEpO1xuICAgIHByb2plY3QxLmFkZFRvZG8odG9kbzEyKTtcblxuICAgIHByb2plY3RzLnB1c2gocHJvamVjdDEpO1xufVxuIiwiaW1wb3J0IGRpc3BsYXlDb250cm9sbGVyIGZyb20gXCIuL2Rpc3BsYXlDb250cm9sbGVyXCI7XG5pbXBvcnQgaW5pdFBhZ2UgZnJvbSBcIi4vbG9hZEluaXRcIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCBUb2RvIGZyb20gXCIuL3RvZG9cIjtcblxuaW5pdFBhZ2UoKTtcblxuLyogRUxFTUVOVFMgKi9cbmNvbnN0IGFkZFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10YXNrXCIpO1xuY29uc3QgdG9kb0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tZm9ybVwiKTtcbmNvbnN0IHRvZG9zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2Rvc1wiKTtcblxuLyogTElTVEVORVJTICovXG5hZGRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgXCJjbGlja1wiLFxuICAgIGRpc3BsYXlDb250cm9sbGVyLnRvZ2dsZVRvZG9BZGRGb3JtXG4pO1xuXG50b2RvRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldnQpID0+IHtcbiAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBbdGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZHVlRGF0ZV0gPSBbXG4gICAgICAgIHRvZG9Gb3JtLnRpdGxlLnZhbHVlLFxuICAgICAgICB0b2RvRm9ybS5kZXNjcmlwdGlvbi52YWx1ZSxcbiAgICAgICAgdG9kb0Zvcm0ucHJpb3JpdHkudmFsdWUsXG4gICAgICAgIHRvZG9Gb3JtLmR1ZURhdGUudmFsdWUsXG4gICAgXTtcblxuICAgIGNvbnN0IHRvZG8gPSBuZXcgVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkdWVEYXRlKTtcbiAgICBQcm9qZWN0LmFjdGl2ZS5hZGRUb2RvKHRvZG8pO1xuICAgIHRvZG9Gb3JtLnJlc2V0KCk7XG4gICAgZGlzcGxheUNvbnRyb2xsZXIudG9nZ2xlVG9kb0FkZEZvcm0oKTtcbn0pO1xuXG50b2Rvc0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2dCkgPT4ge1xuICAgIGNvbnN0IHQgPSBldnQudGFyZ2V0O1xuICAgIGNvbnN0IHRvZG9ET00gPSB0LmNsb3Nlc3QoXCIudG9kb1wiKTtcbiAgICBjb25zdCB0b2RvID0gUHJvamVjdC5hY3RpdmUuZ2V0VG9kbyh0b2RvRE9NLmlkKTtcbiAgICBpZiAoIXRvZG9ET00pIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHQudHlwZSA9PT0gXCJjaGVja2JveFwiKSB7XG4gICAgICAgIHRvZG8uY2hlY2tlZCA9IHQuY2hlY2tlZDtcbiAgICB9XG4gICAgaWYgKHQuY2xvc2VzdChcIi50b2RvLWJvZHlcIikpIHtcbiAgICAgICAgZGlzcGxheUNvbnRyb2xsZXIuY3JlYXRlRWRpdEZvcm0odG9kbyk7XG4gICAgfVxuICAgIGlmICh0LmNsYXNzTGlzdC5jb250YWlucyhcIm1kaS10cmFzaC1jYW4tb3V0bGluZVwiKSkge1xuICAgICAgICB0b2RvLmRlbGV0ZSgpO1xuICAgIH1cbn0pO1xuIl0sIm5hbWVzIjpbImFwcGVuZFRvZG8iLCJ0b2RvIiwidG9kb0RPTSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJwcmlvcml0eSIsImR1ZURhdGUiLCJpZCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsInByaW9yaXR5RE9NIiwidHlwZSIsInRvZG9Cb2R5IiwidG9kb1RpdGxlIiwidGV4dENvbnRlbnQiLCJhcHBlbmRDaGlsZCIsInRvZG9EZXNjcmlwdGlvbiIsInN1YnN0ciIsImxlbmd0aCIsInRvZG9EdWVEYXRlIiwiY2FsZW5kYXIiLCJ0b2RvRGF0ZSIsImRlbGV0ZUljb24iLCJfY3JlYXRlVG9kbyIsInF1ZXJ5U2VsZWN0b3IiLCJ0b2dnbGVUb2RvQWRkRm9ybSIsInRvZ2dsZSIsInRvZG9Gb3JtIiwicmVzZXQiLCJhcHBlbmRQcm9qZWN0IiwicHJvamVjdCIsInByb2plY3RET00iLCJwcm9qZWN0TmFtZSIsIl9jcmVhdGVQcm9qZWN0Iiwic2V0QWN0aXZlUHJvamVjdCIsImFjdGl2ZVByb2plY3QiLCJyZW1vdmUiLCJpbm5lckhUTUwiLCJfcmVtb3ZlQWN0aXZlUHJvamVjdCIsImdldEVsZW1lbnRCeUlkIiwidG9kb3MiLCJmb3JFYWNoIiwiX3Nob3dQcm9qZWN0VG9kb3MiLCJjcmVhdGVFZGl0Rm9ybSIsImRhdGFzZXQiLCJlZGl0Rm9ybSIsImNsb25lTm9kZSIsIl9jbG9uZVRvZG9Gb3JtIiwidmFsdWUiLCJ2YWx1ZUFzRGF0ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJldnQiLCJwcmV2ZW50RGVmYXVsdCIsImVkaXQiLCJvbmNlIiwiZSIsImluc2VydEFkamFjZW50RWxlbWVudCIsImVkaXRUb2RvIiwiZGVzY3JpcHRpb25ET00iLCJkYXRlRE9NIiwicmVtb3ZlVG9kbyIsIlByb2plY3QiLCJjb25zdHJ1Y3RvciIsInRoaXMiLCJNYXRoIiwicmFuZG9tIiwidG9TdHJpbmciLCJzbGljZSIsImRpc3BsYXlDb250cm9sbGVyIiwic2V0QWN0aXZlIiwiYWRkVG9kbyIsInB1c2giLCJzcGxpY2UiLCJmaW5kSW5kZXgiLCJnZXRUb2RvIiwiZmluZCIsInN0YXRpYyIsImFjdGl2ZSIsIlRvZG8iLCJjaGVja2VkIiwiZGVsZXRlIiwicHJvamVjdDEiLCJ0b2RvMTEiLCJEYXRlIiwidG9kbzEyIiwiaW5pdFBhZ2UiLCJhZGRUYXNrIiwidG9kb3NDb250YWluZXIiLCJ0IiwidGFyZ2V0IiwiY2xvc2VzdCIsImNvbnRhaW5zIl0sInNvdXJjZVJvb3QiOiIifQ==