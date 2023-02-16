(()=>{"use strict";function t(t){const e=function(t){const{title:e,description:d,priority:o,dueDate:i,id:s}=t,n=document.createElement("div");n.classList.add("todo");const c=document.createElement("input");switch(c.type="checkbox",c.classList.add("priority"),+o){case 0:default:c.classList.add("priority-low");break;case 1:c.classList.add("priority-medium");break;case 2:c.classList.add("priority-high")}const a=document.createElement("div");a.classList.add("todo-body");const r=document.createElement("div");if(r.classList.add("todo-title"),r.textContent=e,a.appendChild(r),d){const t=document.createElement("div");t.classList.add("todo-description"),t.textContent=d.substr(0,50)+(d.length>50?"...":""),a.appendChild(t)}if(i){const t=document.createElement("div");t.classList.add("todo-due-date");const e=document.createElement("div");e.classList.add("mdi"),e.classList.add("mdi-calendar-clock-outline");const d=document.createElement("div");d.classList.add("todo-date"),d.textContent=i,t.appendChild(e),t.appendChild(d),a.appendChild(t)}const l=document.createElement("div");return l.classList.add("mdi"),l.classList.add("mdi-trash-can-outline"),n.appendChild(c),n.appendChild(a),n.appendChild(l),n.id=s,n}(t);document.querySelector(".todos").appendChild(e)}const e={toggleTodoAddForm:function(){document.querySelector(".add-task").classList.toggle("hide"),document.querySelector("#todo-form").classList.toggle("hide")},appendProject:function(t){const e=function(t){const{title:e,id:d}=t,o=document.createElement("li");o.classList.add("project"),o.id=d;const i=document.createElement("span");i.classList.add("project-name"),i.textContent=e;const s=document.createElement("div");return s.classList.add("mdi"),s.classList.add("mdi-trash-can-outline"),o.appendChild(i),o.appendChild(s),o}(t);document.querySelector(".projects").appendChild(e)},setActiveProject:function(e){!function(){const t=document.querySelector(".project.active");t&&(t.classList.remove(".ative"),document.querySelector(".todos").innerHTML="")}(),document.getElementById(e.id).classList.add("active"),function(e){e.todos.forEach(t)}(e)},appendTodo:t,showEditForm:function(t){if(document.querySelector(".todo-form").dataset.id)return null;const{title:e,description:d,priority:o,dueDate:i,id:s}=t,n=document.getElementById(t.id),c=function(){const t=document.querySelector("#todo-form").cloneNode(!0);return t.id="",t.reset(),t.classList.remove("hide"),t}();return c.dataset.id=s,c.title.value=e,c.description.value=d,c.priority.value=o,i&&(c.dueDate.valueAsDate=i),n.insertAdjacentElement("afterend",c),n.classList.add("hide"),c},editTodo:function(t){const{title:e,description:d,priority:o,id:i,dueDate:s}=t,n=document.getElementById(i),c=n.querySelector(".todo-body"),a=document.querySelector(".todos .todo-form");n.querySelector(".todo-title").textContent=e,n.querySelector(".priority").value=o;let r=n.querySelector(".todo-description"),l=n.querySelector(".todo-due-date");if(d?(r||(r=document.createElement("div"),r.classList.add("todo-description"),c.appendChild(d)),r.textContent=d.substr(0,50)+(d.length>50?"...":"")):r&&r.remove(),s){if(!l){l=document.createElement("div"),l.classList.add("todo-due-date");const t=document.createElement("div");t.classList.add("mdi"),t.classList.add("mdi-calendar-clock-outline");const e=document.createElement("div");e.classList.add("todo-date"),e.textContent=s,l.appendChild(t),l.appendChild(e)}l.querySelector(".todo-date").textContent=s}else l&&l.remove();return a.remove(),n.classList.remove("hide"),!0},removeTodo:function(t){document.getElementById(t).remove()}};class d{#t=[];#e=0;constructor(t){this.title=t,this.#e="id"+Math.random().toString(16).slice(2),e.appendProject(this),d.setActive(this)}addTodo(t){this.#t.push(t),e.appendTodo(t)}removeTodo(t){this.#t.splice(this.#t.findIndex((e=>e.id===t)),1),e.removeTodo(t)}getTodo(t){return this.#t.find((e=>e.id===t))}get id(){return this.#e}static setActive(t){d.#d=t,e.setActiveProject(t)}get todos(){return[...this.#t]}static#d;static get active(){return d.#d}}class o{checked=!1;#e=null;#o=null;constructor(t,e,o,i){this.title=t,this.description=e,this.priority=o,this.dueDate=i,this.#e="id"+Math.random().toString(16).slice(2),this.#o=d.active}edit(t,d,o,i){this.title=t,this.description=d,this.priority=o,this.dueDate=i,e.editTodo(this)}delete(){this.#o.removeTodo(this.#e)}get id(){return this.#e}}!function(){const t=new d("Today"),e=new o("Go out with trash","this is some randome not so short description",1,new Date),i=new o("Go shopping","this is some randome longer description about how awesome is this todo",0,new Date);t.addTodo(e),t.addTodo(i),[].push(t)}();const i=document.querySelector(".add-task"),s=document.querySelector(".todo-form"),n=document.querySelector(".todos");i.addEventListener("click",(t=>{e.toggleTodoAddForm()})),s.addEventListener("submit",(t=>{t.preventDefault();const[i,n,c,a]=[s.title.value,s.description.value,s.priority.value,s.dueDate.value],r=new o(i,n,c,a);d.active.addTodo(r),s.reset(),e.toggleTodoAddForm()})),n.addEventListener("click",(t=>{const o=t.target,i=o.closest(".todo"),s=d.active.getTodo(i.id);if(!i)return null;if("checkbox"===o.type&&(s.checked=o.checked),o.closest(".todo-body")){const t=e.showEditForm(s);if(null===t)return null;t.addEventListener("submit",(e=>{e.preventDefault();const[d,o,i,n]=[t.title.value,t.description.value,t.priority.value,t.dueDate.valueAsDate];s.edit(d,o,i,n)}),{once:!0})}o.classList.contains("mdi-trash-can-outline")&&s.delete()}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQVcsQ0FDNUN1QyxFQUFTMUMsTUFBTThDLE1BQ2ZKLEVBQVN6QyxZQUFZNkMsTUFDckJKLEVBQVN4QyxTQUFTNEMsTUFDbEJKLEVBQVN2QyxRQUFRNEMsYUFFckJqRCxFQUFLMEUsS0FBS3hFLEVBQU9DLEVBQWFDLEVBQVVDLEVBQVEsR0FFcEQsQ0FBRW9GLE1BQU0sR0FFaEIsQ0FDSUgsRUFBRTdFLFVBQVVpRixTQUFTLDBCQUNyQjFGLEVBQUsyRSxRQUNULEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG8tbWFuYWdlci8uL3NyYy9kaXNwbGF5Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbWFuYWdlci8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL29kaW4tdG9kby1tYW5hZ2VyLy4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLW1hbmFnZXIvLi9zcmMvbG9hZEluaXQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLW1hbmFnZXIvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gYXBwZW5kUHJvamVjdChwcm9qZWN0KSB7XG4gICAgY29uc3QgcHJvamVjdERPTSA9IF9jcmVhdGVQcm9qZWN0KHByb2plY3QpO1xuICAgIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0c1wiKTtcbiAgICBwcm9qZWN0cy5hcHBlbmRDaGlsZChwcm9qZWN0RE9NKTtcbn1cblxuZnVuY3Rpb24gX2NyZWF0ZVByb2plY3QocHJvamVjdCkge1xuICAgIGNvbnN0IHsgdGl0bGUsIGlkIH0gPSBwcm9qZWN0O1xuICAgIGNvbnN0IHByb2plY3RET00gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgcHJvamVjdERPTS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFwiKTtcbiAgICBwcm9qZWN0RE9NLmlkID0gaWQ7XG5cbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHByb2plY3ROYW1lLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LW5hbWVcIik7XG4gICAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSB0aXRsZTtcblxuICAgIGNvbnN0IGRlbGV0ZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRlbGV0ZUljb24uY2xhc3NMaXN0LmFkZChcIm1kaVwiKTtcbiAgICBkZWxldGVJY29uLmNsYXNzTGlzdC5hZGQoXCJtZGktdHJhc2gtY2FuLW91dGxpbmVcIik7XG5cbiAgICBwcm9qZWN0RE9NLmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcbiAgICBwcm9qZWN0RE9NLmFwcGVuZENoaWxkKGRlbGV0ZUljb24pO1xuXG4gICAgcmV0dXJuIHByb2plY3RET007XG59XG5cbmZ1bmN0aW9uIHNldEFjdGl2ZVByb2plY3QocHJvamVjdCkge1xuICAgIF9yZW1vdmVBY3RpdmVQcm9qZWN0KCk7XG4gICAgY29uc3QgcHJvamVjdERPTSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHByb2plY3QuaWQpO1xuICAgIHByb2plY3RET00uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICBfc2hvd1Byb2plY3RUb2Rvcyhwcm9qZWN0KTtcbn1cblxuZnVuY3Rpb24gX3JlbW92ZUFjdGl2ZVByb2plY3QoKSB7XG4gICAgY29uc3QgYWN0aXZlUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC5hY3RpdmVcIik7XG4gICAgaWYgKCFhY3RpdmVQcm9qZWN0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYWN0aXZlUHJvamVjdC5jbGFzc0xpc3QucmVtb3ZlKFwiLmF0aXZlXCIpO1xuICAgIF9yZW1vdmVDdXJyZW50VG9kb3MoKTtcbn1cblxuZnVuY3Rpb24gX3JlbW92ZUN1cnJlbnRUb2RvcygpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG9zXCIpO1xuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xufVxuXG5mdW5jdGlvbiBfc2hvd1Byb2plY3RUb2Rvcyhwcm9qZWN0KSB7XG4gICAgY29uc3QgdG9kb3MgPSBwcm9qZWN0LnRvZG9zO1xuICAgIHRvZG9zLmZvckVhY2goYXBwZW5kVG9kbyk7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZFRvZG8odG9kbykge1xuICAgIGNvbnN0IHRvZG9ET00gPSBfY3JlYXRlVG9kbyh0b2RvKTtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG9zXCIpO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9ET00pO1xufVxuXG5mdW5jdGlvbiBfY3JlYXRlVG9kbyh0b2RvKSB7XG4gICAgY29uc3QgeyB0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkdWVEYXRlLCBpZCB9ID0gdG9kbztcbiAgICBjb25zdCB0b2RvRE9NID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b2RvRE9NLmNsYXNzTGlzdC5hZGQoXCJ0b2RvXCIpO1xuXG4gICAgY29uc3QgcHJpb3JpdHlET00gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgcHJpb3JpdHlET00udHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgICBwcmlvcml0eURPTS5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHlcIik7XG5cbiAgICBzd2l0Y2ggKCtwcmlvcml0eSkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBwcmlvcml0eURPTS5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHktbG93XCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIHByaW9yaXR5RE9NLmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eS1tZWRpdW1cIik7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBwcmlvcml0eURPTS5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHktaGlnaFwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcHJpb3JpdHlET00uY2xhc3NMaXN0LmFkZChcInByaW9yaXR5LWxvd1wiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNvbnN0IHRvZG9Cb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b2RvQm9keS5jbGFzc0xpc3QuYWRkKFwidG9kby1ib2R5XCIpO1xuXG4gICAgY29uc3QgdG9kb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b2RvVGl0bGUuY2xhc3NMaXN0LmFkZChcInRvZG8tdGl0bGVcIik7XG4gICAgdG9kb1RpdGxlLnRleHRDb250ZW50ID0gdGl0bGU7XG5cbiAgICB0b2RvQm9keS5hcHBlbmRDaGlsZCh0b2RvVGl0bGUpO1xuXG4gICAgaWYgKGRlc2NyaXB0aW9uKSB7XG4gICAgICAgIGNvbnN0IHRvZG9EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRvZG9EZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwidG9kby1kZXNjcmlwdGlvblwiKTtcbiAgICAgICAgdG9kb0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID1cbiAgICAgICAgICAgIGRlc2NyaXB0aW9uLnN1YnN0cigwLCA1MCkgK1xuICAgICAgICAgICAgKGRlc2NyaXB0aW9uLmxlbmd0aCA+IDUwID8gXCIuLi5cIiA6IFwiXCIpO1xuXG4gICAgICAgIHRvZG9Cb2R5LmFwcGVuZENoaWxkKHRvZG9EZXNjcmlwdGlvbik7XG4gICAgfVxuICAgIGlmIChkdWVEYXRlKSB7XG4gICAgICAgIGNvbnN0IHRvZG9EdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdG9kb0R1ZURhdGUuY2xhc3NMaXN0LmFkZChcInRvZG8tZHVlLWRhdGVcIik7XG5cbiAgICAgICAgY29uc3QgY2FsZW5kYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjYWxlbmRhci5jbGFzc0xpc3QuYWRkKFwibWRpXCIpO1xuICAgICAgICBjYWxlbmRhci5jbGFzc0xpc3QuYWRkKFwibWRpLWNhbGVuZGFyLWNsb2NrLW91dGxpbmVcIik7XG5cbiAgICAgICAgY29uc3QgdG9kb0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0b2RvRGF0ZS5jbGFzc0xpc3QuYWRkKFwidG9kby1kYXRlXCIpO1xuICAgICAgICB0b2RvRGF0ZS50ZXh0Q29udGVudCA9IGR1ZURhdGU7XG5cbiAgICAgICAgdG9kb0R1ZURhdGUuYXBwZW5kQ2hpbGQoY2FsZW5kYXIpO1xuICAgICAgICB0b2RvRHVlRGF0ZS5hcHBlbmRDaGlsZCh0b2RvRGF0ZSk7XG5cbiAgICAgICAgdG9kb0JvZHkuYXBwZW5kQ2hpbGQodG9kb0R1ZURhdGUpO1xuICAgIH1cblxuICAgIGNvbnN0IGRlbGV0ZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRlbGV0ZUljb24uY2xhc3NMaXN0LmFkZChcIm1kaVwiKTtcbiAgICBkZWxldGVJY29uLmNsYXNzTGlzdC5hZGQoXCJtZGktdHJhc2gtY2FuLW91dGxpbmVcIik7XG5cbiAgICB0b2RvRE9NLmFwcGVuZENoaWxkKHByaW9yaXR5RE9NKTtcbiAgICB0b2RvRE9NLmFwcGVuZENoaWxkKHRvZG9Cb2R5KTtcbiAgICB0b2RvRE9NLmFwcGVuZENoaWxkKGRlbGV0ZUljb24pO1xuXG4gICAgdG9kb0RPTS5pZCA9IGlkO1xuXG4gICAgcmV0dXJuIHRvZG9ET007XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZVRvZG9BZGRGb3JtKCkge1xuICAgIGNvbnN0IGFkZFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10YXNrXCIpO1xuICAgIGFkZFRhc2suY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIik7XG5cbiAgICBjb25zdCB0b2RvRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kby1mb3JtXCIpO1xuICAgIHRvZG9Gb3JtLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIpO1xufVxuXG5mdW5jdGlvbiBfY2xvbmVUb2RvRm9ybSgpIHtcbiAgICBjb25zdCB0b2RvRm9ybSA9IGRvY3VtZW50XG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI3RvZG8tZm9ybVwiKVxuICAgICAgICAuY2xvbmVOb2RlKHRydWUpO1xuICAgIHRvZG9Gb3JtLmlkID0gXCJcIjtcbiAgICB0b2RvRm9ybS5yZXNldCgpO1xuICAgIHRvZG9Gb3JtLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuXG4gICAgcmV0dXJuIHRvZG9Gb3JtO1xufVxuXG5mdW5jdGlvbiBzaG93RWRpdEZvcm0odG9kbykge1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tZm9ybVwiKS5kYXRhc2V0LmlkKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGR1ZURhdGUsIGlkIH0gPSB0b2RvO1xuICAgIGNvbnN0IHRvZG9ET00gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0b2RvLmlkKTtcbiAgICBjb25zdCB0b2RvRm9ybSA9IF9jbG9uZVRvZG9Gb3JtKCk7XG5cbiAgICB0b2RvRm9ybS5kYXRhc2V0LmlkID0gaWQ7XG4gICAgdG9kb0Zvcm0udGl0bGUudmFsdWUgPSB0aXRsZTtcbiAgICB0b2RvRm9ybS5kZXNjcmlwdGlvbi52YWx1ZSA9IGRlc2NyaXB0aW9uO1xuICAgIHRvZG9Gb3JtLnByaW9yaXR5LnZhbHVlID0gcHJpb3JpdHk7XG4gICAgaWYgKGR1ZURhdGUpIHtcbiAgICAgICAgdG9kb0Zvcm0uZHVlRGF0ZS52YWx1ZUFzRGF0ZSA9IGR1ZURhdGU7XG4gICAgfVxuXG4gICAgdG9kb0RPTS5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJhZnRlcmVuZFwiLCB0b2RvRm9ybSk7XG4gICAgdG9kb0RPTS5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcblxuICAgIHJldHVybiB0b2RvRm9ybTtcbn1cblxuZnVuY3Rpb24gZWRpdFRvZG8odG9kbykge1xuICAgIGNvbnN0IHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgaWQsIGR1ZURhdGUgfSA9IHRvZG87XG5cbiAgICBjb25zdCB0b2RvRE9NID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgIGNvbnN0IHRvZG9Cb2R5ID0gdG9kb0RPTS5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tYm9keVwiKTtcbiAgICBjb25zdCB0b2RvRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kb3MgLnRvZG8tZm9ybVwiKTtcblxuICAgIHRvZG9ET00ucXVlcnlTZWxlY3RvcihcIi50b2RvLXRpdGxlXCIpLnRleHRDb250ZW50ID0gdGl0bGU7XG4gICAgdG9kb0RPTS5xdWVyeVNlbGVjdG9yKFwiLnByaW9yaXR5XCIpLnZhbHVlID0gcHJpb3JpdHk7XG4gICAgbGV0IGRlc2NyaXB0aW9uRE9NID0gdG9kb0RPTS5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tZGVzY3JpcHRpb25cIik7XG4gICAgbGV0IGRhdGVET00gPSB0b2RvRE9NLnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1kdWUtZGF0ZVwiKTtcblxuICAgIGlmICghZGVzY3JpcHRpb24pIHtcbiAgICAgICAgZGVzY3JpcHRpb25ET00gJiYgZGVzY3JpcHRpb25ET00ucmVtb3ZlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCFkZXNjcmlwdGlvbkRPTSkge1xuICAgICAgICAgICAgZGVzY3JpcHRpb25ET00gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgZGVzY3JpcHRpb25ET00uY2xhc3NMaXN0LmFkZChcInRvZG8tZGVzY3JpcHRpb25cIik7XG4gICAgICAgICAgICB0b2RvQm9keS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICBkZXNjcmlwdGlvbkRPTS50ZXh0Q29udGVudCA9XG4gICAgICAgICAgICBkZXNjcmlwdGlvbi5zdWJzdHIoMCwgNTApICtcbiAgICAgICAgICAgIChkZXNjcmlwdGlvbi5sZW5ndGggPiA1MCA/IFwiLi4uXCIgOiBcIlwiKTtcbiAgICB9XG5cbiAgICBpZiAoIWR1ZURhdGUpIHtcbiAgICAgICAgZGF0ZURPTSAmJiBkYXRlRE9NLnJlbW92ZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghZGF0ZURPTSkge1xuICAgICAgICAgICAgZGF0ZURPTSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBkYXRlRE9NLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWR1ZS1kYXRlXCIpO1xuICAgICAgICAgICAgY29uc3QgY2FsZW5kYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgY2FsZW5kYXIuY2xhc3NMaXN0LmFkZChcIm1kaVwiKTtcbiAgICAgICAgICAgIGNhbGVuZGFyLmNsYXNzTGlzdC5hZGQoXCJtZGktY2FsZW5kYXItY2xvY2stb3V0bGluZVwiKTtcblxuICAgICAgICAgICAgY29uc3QgdG9kb0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgdG9kb0RhdGUuY2xhc3NMaXN0LmFkZChcInRvZG8tZGF0ZVwiKTtcbiAgICAgICAgICAgIHRvZG9EYXRlLnRleHRDb250ZW50ID0gZHVlRGF0ZTtcblxuICAgICAgICAgICAgZGF0ZURPTS5hcHBlbmRDaGlsZChjYWxlbmRhcik7XG4gICAgICAgICAgICBkYXRlRE9NLmFwcGVuZENoaWxkKHRvZG9EYXRlKTtcbiAgICAgICAgfVxuICAgICAgICBkYXRlRE9NLnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1kYXRlXCIpLnRleHRDb250ZW50ID0gZHVlRGF0ZTtcbiAgICB9XG5cbiAgICB0b2RvRm9ybS5yZW1vdmUoKTtcbiAgICB0b2RvRE9NLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVUb2RvKGlkKSB7XG4gICAgY29uc3QgdG9kbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICB0b2RvLnJlbW92ZSgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgdG9nZ2xlVG9kb0FkZEZvcm0sXG4gICAgYXBwZW5kUHJvamVjdCxcbiAgICBzZXRBY3RpdmVQcm9qZWN0LFxuICAgIGFwcGVuZFRvZG8sXG4gICAgc2hvd0VkaXRGb3JtLFxuICAgIGVkaXRUb2RvLFxuICAgIHJlbW92ZVRvZG8sXG59O1xuIiwiaW1wb3J0IGRpc3BsYXlDb250cm9sbGVyIGZyb20gXCIuL2Rpc3BsYXlDb250cm9sbGVyLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xuICAgICN0b2RvcyA9IFtdO1xuICAgICNpZCA9IDA7XG4gICAgY29uc3RydWN0b3IodGl0bGUpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLiNpZCA9IFwiaWRcIiArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMTYpLnNsaWNlKDIpO1xuICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5hcHBlbmRQcm9qZWN0KHRoaXMpO1xuICAgICAgICBQcm9qZWN0LnNldEFjdGl2ZSh0aGlzKTtcbiAgICB9XG5cbiAgICBhZGRUb2RvKHRvZG8pIHtcbiAgICAgICAgdGhpcy4jdG9kb3MucHVzaCh0b2RvKTtcbiAgICAgICAgZGlzcGxheUNvbnRyb2xsZXIuYXBwZW5kVG9kbyh0b2RvKTtcbiAgICB9XG5cbiAgICByZW1vdmVUb2RvKGlkKSB7XG4gICAgICAgIHRoaXMuI3RvZG9zLnNwbGljZShcbiAgICAgICAgICAgIHRoaXMuI3RvZG9zLmZpbmRJbmRleCgodG9kbykgPT4gdG9kby5pZCA9PT0gaWQpLFxuICAgICAgICAgICAgMVxuICAgICAgICApO1xuICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5yZW1vdmVUb2RvKGlkKTtcbiAgICB9XG5cbiAgICBnZXRUb2RvKGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiN0b2Rvcy5maW5kKCh0b2RvKSA9PiB0b2RvLmlkID09PSBpZCk7XG4gICAgfVxuXG4gICAgZ2V0IGlkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jaWQ7XG4gICAgfVxuXG4gICAgc3RhdGljIHNldEFjdGl2ZShwcm9qZWN0KSB7XG4gICAgICAgIFByb2plY3QuI2FjdGl2ZSA9IHByb2plY3Q7XG4gICAgICAgIGRpc3BsYXlDb250cm9sbGVyLnNldEFjdGl2ZVByb2plY3QocHJvamVjdCk7XG4gICAgfVxuXG4gICAgZ2V0IHRvZG9zKCkge1xuICAgICAgICByZXR1cm4gWy4uLnRoaXMuI3RvZG9zXTtcbiAgICB9XG5cbiAgICBzdGF0aWMgI2FjdGl2ZTtcbiAgICBzdGF0aWMgZ2V0IGFjdGl2ZSgpIHtcbiAgICAgICAgcmV0dXJuIFByb2plY3QuI2FjdGl2ZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgZGlzcGxheUNvbnRyb2xsZXIgZnJvbSBcIi4vZGlzcGxheUNvbnRyb2xsZXJcIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kbyB7XG4gICAgY2hlY2tlZCA9IGZhbHNlO1xuICAgICNpZCA9IG51bGw7XG4gICAgI3Byb2plY3QgPSBudWxsO1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGR1ZURhdGUpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy4jaWQgPSBcImlkXCIgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDE2KS5zbGljZSgyKTtcbiAgICAgICAgdGhpcy4jcHJvamVjdCA9IFByb2plY3QuYWN0aXZlO1xuICAgIH1cblxuICAgIGVkaXQodGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZHVlRGF0ZSkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5lZGl0VG9kbyh0aGlzKTtcbiAgICB9XG5cbiAgICBkZWxldGUoKSB7XG4gICAgICAgIHRoaXMuI3Byb2plY3QucmVtb3ZlVG9kbyh0aGlzLiNpZCk7XG4gICAgfVxuXG4gICAgZ2V0IGlkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jaWQ7XG4gICAgfVxufVxuIiwiaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IFRvZG8gZnJvbSBcIi4vdG9kb1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0UGFnZSgpIHtcbiAgICBjb25zdCBwcm9qZWN0cyA9IFtdO1xuXG4gICAgY29uc3QgcHJvamVjdDEgPSBuZXcgUHJvamVjdChcIlRvZGF5XCIpO1xuXG4gICAgY29uc3QgdG9kbzExID0gbmV3IFRvZG8oXG4gICAgICAgIFwiR28gb3V0IHdpdGggdHJhc2hcIixcbiAgICAgICAgXCJ0aGlzIGlzIHNvbWUgcmFuZG9tZSBub3Qgc28gc2hvcnQgZGVzY3JpcHRpb25cIixcbiAgICAgICAgMSxcbiAgICAgICAgbmV3IERhdGUoKVxuICAgICk7XG4gICAgY29uc3QgdG9kbzEyID0gbmV3IFRvZG8oXG4gICAgICAgIFwiR28gc2hvcHBpbmdcIixcbiAgICAgICAgXCJ0aGlzIGlzIHNvbWUgcmFuZG9tZSBsb25nZXIgZGVzY3JpcHRpb24gYWJvdXQgaG93IGF3ZXNvbWUgaXMgdGhpcyB0b2RvXCIsXG4gICAgICAgIDAsXG4gICAgICAgIG5ldyBEYXRlKClcbiAgICApO1xuXG4gICAgcHJvamVjdDEuYWRkVG9kbyh0b2RvMTEpO1xuICAgIHByb2plY3QxLmFkZFRvZG8odG9kbzEyKTtcblxuICAgIHByb2plY3RzLnB1c2gocHJvamVjdDEpO1xufVxuIiwiaW1wb3J0IGRpc3BsYXlDb250cm9sbGVyIGZyb20gXCIuL2Rpc3BsYXlDb250cm9sbGVyXCI7XG5pbXBvcnQgaW5pdFBhZ2UgZnJvbSBcIi4vbG9hZEluaXRcIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCBUb2RvIGZyb20gXCIuL3RvZG9cIjtcblxuaW5pdFBhZ2UoKTtcblxuLyogRUxFTUVOVFMgKi9cbmNvbnN0IGFkZFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10YXNrXCIpO1xuY29uc3QgdG9kb0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tZm9ybVwiKTtcbmNvbnN0IHRvZG9zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2Rvc1wiKTtcblxuLyogTElTVEVORVJTICovXG5hZGRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZ0KSA9PiB7XG4gICAgZGlzcGxheUNvbnRyb2xsZXIudG9nZ2xlVG9kb0FkZEZvcm0oKTtcbn0pO1xuXG50b2RvRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldnQpID0+IHtcbiAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBbdGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZHVlRGF0ZV0gPSBbXG4gICAgICAgIHRvZG9Gb3JtLnRpdGxlLnZhbHVlLFxuICAgICAgICB0b2RvRm9ybS5kZXNjcmlwdGlvbi52YWx1ZSxcbiAgICAgICAgdG9kb0Zvcm0ucHJpb3JpdHkudmFsdWUsXG4gICAgICAgIHRvZG9Gb3JtLmR1ZURhdGUudmFsdWUsXG4gICAgXTtcblxuICAgIGNvbnN0IHRvZG8gPSBuZXcgVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkdWVEYXRlKTtcbiAgICBQcm9qZWN0LmFjdGl2ZS5hZGRUb2RvKHRvZG8pO1xuICAgIHRvZG9Gb3JtLnJlc2V0KCk7XG4gICAgZGlzcGxheUNvbnRyb2xsZXIudG9nZ2xlVG9kb0FkZEZvcm0oKTtcbn0pO1xuXG50b2Rvc0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2dCkgPT4ge1xuICAgIGNvbnN0IHQgPSBldnQudGFyZ2V0O1xuICAgIGNvbnN0IHRvZG9ET00gPSB0LmNsb3Nlc3QoXCIudG9kb1wiKTtcbiAgICBjb25zdCB0b2RvID0gUHJvamVjdC5hY3RpdmUuZ2V0VG9kbyh0b2RvRE9NLmlkKTtcbiAgICBpZiAoIXRvZG9ET00pIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHQudHlwZSA9PT0gXCJjaGVja2JveFwiKSB7XG4gICAgICAgIHRvZG8uY2hlY2tlZCA9IHQuY2hlY2tlZDtcbiAgICB9XG4gICAgaWYgKHQuY2xvc2VzdChcIi50b2RvLWJvZHlcIikpIHtcbiAgICAgICAgY29uc3QgdG9kb0Zvcm0gPSBkaXNwbGF5Q29udHJvbGxlci5zaG93RWRpdEZvcm0odG9kbyk7XG4gICAgICAgIGlmICh0b2RvRm9ybSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICB0b2RvRm9ybS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgXCJzdWJtaXRcIixcbiAgICAgICAgICAgIChldnQpID0+IHtcbiAgICAgICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBbdGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZHVlRGF0ZV0gPSBbXG4gICAgICAgICAgICAgICAgICAgIHRvZG9Gb3JtLnRpdGxlLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICB0b2RvRm9ybS5kZXNjcmlwdGlvbi52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgdG9kb0Zvcm0ucHJpb3JpdHkudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIHRvZG9Gb3JtLmR1ZURhdGUudmFsdWVBc0RhdGUsXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICB0b2RvLmVkaXQodGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZHVlRGF0ZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeyBvbmNlOiB0cnVlIH1cbiAgICAgICAgKTtcbiAgICB9XG4gICAgaWYgKHQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibWRpLXRyYXNoLWNhbi1vdXRsaW5lXCIpKSB7XG4gICAgICAgIHRvZG8uZGVsZXRlKCk7XG4gICAgfVxufSk7XG4iXSwibmFtZXMiOlsiYXBwZW5kVG9kbyIsInRvZG8iLCJ0b2RvRE9NIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInByaW9yaXR5IiwiZHVlRGF0ZSIsImlkIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwicHJpb3JpdHlET00iLCJ0eXBlIiwidG9kb0JvZHkiLCJ0b2RvVGl0bGUiLCJ0ZXh0Q29udGVudCIsImFwcGVuZENoaWxkIiwidG9kb0Rlc2NyaXB0aW9uIiwic3Vic3RyIiwibGVuZ3RoIiwidG9kb0R1ZURhdGUiLCJjYWxlbmRhciIsInRvZG9EYXRlIiwiZGVsZXRlSWNvbiIsIl9jcmVhdGVUb2RvIiwicXVlcnlTZWxlY3RvciIsInRvZ2dsZVRvZG9BZGRGb3JtIiwidG9nZ2xlIiwiYXBwZW5kUHJvamVjdCIsInByb2plY3QiLCJwcm9qZWN0RE9NIiwicHJvamVjdE5hbWUiLCJfY3JlYXRlUHJvamVjdCIsInNldEFjdGl2ZVByb2plY3QiLCJhY3RpdmVQcm9qZWN0IiwicmVtb3ZlIiwiaW5uZXJIVE1MIiwiX3JlbW92ZUFjdGl2ZVByb2plY3QiLCJnZXRFbGVtZW50QnlJZCIsInRvZG9zIiwiZm9yRWFjaCIsIl9zaG93UHJvamVjdFRvZG9zIiwic2hvd0VkaXRGb3JtIiwiZGF0YXNldCIsInRvZG9Gb3JtIiwiY2xvbmVOb2RlIiwicmVzZXQiLCJfY2xvbmVUb2RvRm9ybSIsInZhbHVlIiwidmFsdWVBc0RhdGUiLCJpbnNlcnRBZGphY2VudEVsZW1lbnQiLCJlZGl0VG9kbyIsImRlc2NyaXB0aW9uRE9NIiwiZGF0ZURPTSIsInJlbW92ZVRvZG8iLCJQcm9qZWN0IiwiY29uc3RydWN0b3IiLCJ0aGlzIiwiTWF0aCIsInJhbmRvbSIsInRvU3RyaW5nIiwic2xpY2UiLCJkaXNwbGF5Q29udHJvbGxlciIsInNldEFjdGl2ZSIsImFkZFRvZG8iLCJwdXNoIiwic3BsaWNlIiwiZmluZEluZGV4IiwiZ2V0VG9kbyIsImZpbmQiLCJzdGF0aWMiLCJhY3RpdmUiLCJUb2RvIiwiY2hlY2tlZCIsImVkaXQiLCJkZWxldGUiLCJwcm9qZWN0MSIsInRvZG8xMSIsIkRhdGUiLCJ0b2RvMTIiLCJpbml0UGFnZSIsImFkZFRhc2siLCJ0b2Rvc0NvbnRhaW5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJldnQiLCJwcmV2ZW50RGVmYXVsdCIsInQiLCJ0YXJnZXQiLCJjbG9zZXN0Iiwib25jZSIsImNvbnRhaW5zIl0sInNvdXJjZVJvb3QiOiIifQ==