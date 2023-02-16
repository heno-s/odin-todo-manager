(()=>{"use strict";function e(e){const d=function(e){const{title:d,description:i,priority:c,dueDate:s,id:n,checked:r}=e,a=document.createElement("div");a.classList.add("todo");const l=document.createElement("input");l.type="checkbox",l.classList.add("priority"),o(l,c),l.checked=r;const u=t(d,i,s),m=document.createElement("div");return m.classList.add("mdi"),m.classList.add("mdi-trash-can-outline"),console.log(u),a.appendChild(l),a.appendChild(u),a.appendChild(m),a.id=n,a}(e);document.querySelector(".todos").appendChild(d)}function t(e,t,o){const d=document.createElement("div");d.classList.add("todo-body");const i=document.createElement("div");if(i.classList.add("todo-title"),i.textContent=e,d.appendChild(i),t){const e=document.createElement("div");e.classList.add("todo-description"),e.textContent=t.substr(0,50)+(t.length>50?"...":""),d.appendChild(e)}if(o){const e=document.createElement("div");e.classList.add("todo-due-date");const t=document.createElement("div");t.classList.add("mdi"),t.classList.add("mdi-calendar-clock-outline");const i=document.createElement("div");i.classList.add("todo-date"),i.textContent=o,e.appendChild(t),e.appendChild(i),d.appendChild(e)}return d}function o(e,t){switch(+t){case 0:default:e.classList.add("priority-low");break;case 1:e.classList.add("priority-medium");break;case 2:e.classList.add("priority-high")}}const d={toggleTodoAddForm:function(){document.querySelector(".add-task").classList.toggle("hide");const e=document.querySelector("#todo-form");e.reset(),e.classList.toggle("hide")},toggleProjectForm:function(){document.querySelector(".add-project").classList.toggle("hide");const e=document.querySelector(".project-form");e.reset(),e.classList.toggle("hide")},appendProject:function(e){const t=function(e){const{title:t,id:o}=e,d=document.createElement("li");d.classList.add("project"),d.id=o;const i=document.createElement("span");i.classList.add("project-name"),i.textContent=t;const c=document.createElement("div");return c.classList.add("mdi"),c.classList.add("mdi-trash-can-outline"),d.appendChild(i),d.appendChild(c),d}(e);document.querySelector(".projects").appendChild(t)},setActiveProject:function(t){!function(){const e=document.querySelector(".project.active");e&&(e.classList.remove("active"),document.querySelector(".todos").innerHTML="")}(),document.getElementById(t.id).classList.add("active"),function(t){t.todos.forEach(e)}(t)},appendTodo:e,createEditForm:function(e){if(document.querySelector("#edit-form"))return null;const{title:t,description:o,priority:d,dueDate:i,id:c}=e,s=document.getElementById(e.id),n=function(){const e=document.querySelector("#todo-form").cloneNode(!0);return e.id="edit-form",e.reset(),e.classList.remove("hide"),e}();return n.dataset.id=c,n.title.value=t,n.description.value=o,n.priority.value=d,i&&(n.dueDate.valueAsDate=i),n.addEventListener("submit",(t=>{t.preventDefault();const[o,d,i,c]=[n.title.value,n.description.value,n.priority.value,n.dueDate.valueAsDate];e.edit(o,d,i,c)}),{once:!0}),n.querySelector(".close-form").addEventListener("click",(e=>{n.remove(),s.classList.remove("hide")}),{once:!0}),s.insertAdjacentElement("afterend",n),s.classList.add("hide"),n},editTodo:function(e){const{title:d,description:i,priority:c,id:s,dueDate:n}=e,r=document.getElementById(s);o(r.querySelector(".priority"),c);const a=t(d,i,n);r.querySelector(".todo-body").replaceWith(a),r.classList.remove("hide");const l=document.querySelector("#edit-form");return l&&l.remove(),!0},removeTodo:function(e){document.getElementById(e).remove()}};class i{#e=[];#t=0;constructor(e){this.title=e,this.#t="id"+Math.random().toString(16).slice(2)}addTodo(e){this.#e.push(e),d.appendTodo(e)}removeTodo(e){this.#e.splice(this.#e.findIndex((t=>t.id===e)),1),d.removeTodo(e)}getTodo(e){return this.#e.find((t=>t.id===e))}get id(){return this.#t}static setActive(e){i.#o=e,d.setActiveProject(e)}get todos(){return[...this.#e]}static#o;static get active(){return i.#o}}class c{checked=!1;#t=null;#d=null;constructor(e,t,o,d){this.title=e,this.description=t,this.priority=o,this.dueDate=d,this.#t="id"+Math.random().toString(16).slice(2),this.#d=i.active}edit(e,t,o,i){this.title=e,this.description=t,this.priority=o,this.dueDate=i,d.editTodo(this)}delete(){this.#d.removeTodo(this.#t)}get id(){return this.#t}}!function(){window.projects=[];const e=new i("Today");d.appendProject(e),i.setActive(e);const t=new c("Go out with trash","this is some randome not so short description",1,new Date),o=new c("Go shopping","this is some randome longer description about how awesome is this todo",0,new Date);e.addTodo(t),e.addTodo(o),window.projects.push(e)}();const s=document.querySelector(".add-task"),n=document.querySelector(".todo-form"),r=document.querySelector(".todos"),a=document.querySelector(".projects"),l=document.querySelector(".add-project"),u=document.querySelector(".project-form");a.addEventListener("click",(e=>{const t=e.target;if(!t.closest(".project"))return null;const o=t.closest(".project"),d=window.projects.find((e=>e.id===o.id));i.setActive(d)})),l.addEventListener("click",d.toggleProjectForm),u.addEventListener("submit",(e=>{if(e.preventDefault(),u.projectTitle.value){const e=new i(u.projectTitle.value);window.projects.push(e),d.appendProject(e),i.setActive(e)}d.toggleProjectForm()})),s.addEventListener("click",d.toggleTodoAddForm),n.querySelector(".close-form").addEventListener("click",d.toggleTodoAddForm),n.addEventListener("submit",(e=>{e.preventDefault();const[t,o,s,r]=[n.title.value,n.description.value,n.priority.value,n.dueDate.valueAsDate],a=new c(t,o,s,r);i.active.addTodo(a),n.reset(),d.toggleTodoAddForm()})),r.addEventListener("click",(e=>{const t=e.target,o=t.closest(".todo"),c=i.active.getTodo(o.id);if(!o)return null;"checkbox"===t.type&&(c.checked=t.checked),t.closest(".todo-body")&&d.createEditForm(c),t.classList.contains("mdi-trash-can-outline")&&c.delete()}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBa0IxQyxtQkFBbUIsSUFHekMyRCxFQUFRcEMsaUJBQ0osUUFDQW1CLEVBQWtCOUMsbUJBR3RCRSxFQUNLWCxjQUFjLGVBQ2RvQyxpQkFBaUIsUUFBU21CLEVBQWtCOUMsbUJBRWpERSxFQUFTeUIsaUJBQWlCLFVBQVdDLElBQ2pDQSxFQUFJQyxpQkFDSixNQUFPMUQsRUFBT0MsRUFBYUMsRUFBVUMsR0FBVyxDQUM1QzRCLEVBQVMvQixNQUFNc0QsTUFDZnZCLEVBQVM5QixZQUFZcUQsTUFDckJ2QixFQUFTN0IsU0FBU29ELE1BQ2xCdkIsRUFBUzVCLFFBQVFvRCxhQUdmekQsRUFBTyxJQUFJb0YsRUFBS2xGLEVBQU9DLEVBQWFDLEVBQVVDLEdBQ3BEK0QsRUFBUWUsT0FBT1IsUUFBUTNFLEdBQ3ZCaUMsRUFBU0MsUUFDVDJDLEVBQWtCOUMsbUJBQW1CLElBR3pDZ0UsRUFBZXJDLGlCQUFpQixTQUFVQyxJQUN0QyxNQUFNc0MsRUFBSXRDLEVBQUl1QyxPQUNSakcsRUFBVWdHLEVBQUVFLFFBQVEsU0FDcEJuRyxFQUFPb0UsRUFBUWUsT0FBT0gsUUFBUS9FLEVBQVFLLElBQzVDLElBQUtMLEVBQ0QsT0FBTyxLQUdJLGFBQVhnRyxFQUFFcEYsT0FDRmIsRUFBS08sUUFBVTBGLEVBQUUxRixTQUVqQjBGLEVBQUVFLFFBQVEsZUFDVnRCLEVBQWtCMUIsZUFBZW5ELEdBRWpDaUcsRUFBRXZGLFVBQVUyRixTQUFTLDBCQUNyQnJHLEVBQUtxRixRQUNULEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG8tbWFuYWdlci8uL3NyYy9kaXNwbGF5Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbWFuYWdlci8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL29kaW4tdG9kby1tYW5hZ2VyLy4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLW1hbmFnZXIvLi9zcmMvbG9hZEluaXQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLW1hbmFnZXIvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gYXBwZW5kUHJvamVjdChwcm9qZWN0KSB7XG4gICAgY29uc3QgcHJvamVjdERPTSA9IF9jcmVhdGVQcm9qZWN0KHByb2plY3QpO1xuICAgIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0c1wiKTtcbiAgICBwcm9qZWN0cy5hcHBlbmRDaGlsZChwcm9qZWN0RE9NKTtcbn1cblxuZnVuY3Rpb24gX2NyZWF0ZVByb2plY3QocHJvamVjdCkge1xuICAgIGNvbnN0IHsgdGl0bGUsIGlkIH0gPSBwcm9qZWN0O1xuICAgIGNvbnN0IHByb2plY3RET00gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgcHJvamVjdERPTS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFwiKTtcbiAgICBwcm9qZWN0RE9NLmlkID0gaWQ7XG5cbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHByb2plY3ROYW1lLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LW5hbWVcIik7XG4gICAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSB0aXRsZTtcblxuICAgIGNvbnN0IGRlbGV0ZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRlbGV0ZUljb24uY2xhc3NMaXN0LmFkZChcIm1kaVwiKTtcbiAgICBkZWxldGVJY29uLmNsYXNzTGlzdC5hZGQoXCJtZGktdHJhc2gtY2FuLW91dGxpbmVcIik7XG5cbiAgICBwcm9qZWN0RE9NLmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcbiAgICBwcm9qZWN0RE9NLmFwcGVuZENoaWxkKGRlbGV0ZUljb24pO1xuXG4gICAgcmV0dXJuIHByb2plY3RET007XG59XG5cbmZ1bmN0aW9uIHNldEFjdGl2ZVByb2plY3QocHJvamVjdCkge1xuICAgIF9yZW1vdmVBY3RpdmVQcm9qZWN0KCk7XG4gICAgY29uc3QgcHJvamVjdERPTSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHByb2plY3QuaWQpO1xuICAgIHByb2plY3RET00uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICBfc2hvd1Byb2plY3RUb2Rvcyhwcm9qZWN0KTtcbn1cblxuZnVuY3Rpb24gX3JlbW92ZUFjdGl2ZVByb2plY3QoKSB7XG4gICAgY29uc3QgYWN0aXZlUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC5hY3RpdmVcIik7XG4gICAgaWYgKCFhY3RpdmVQcm9qZWN0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYWN0aXZlUHJvamVjdC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIF9yZW1vdmVDdXJyZW50VG9kb3MoKTtcbn1cblxuZnVuY3Rpb24gX3JlbW92ZUN1cnJlbnRUb2RvcygpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG9zXCIpO1xuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xufVxuXG5mdW5jdGlvbiBfc2hvd1Byb2plY3RUb2Rvcyhwcm9qZWN0KSB7XG4gICAgY29uc3QgdG9kb3MgPSBwcm9qZWN0LnRvZG9zO1xuICAgIHRvZG9zLmZvckVhY2goYXBwZW5kVG9kbyk7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZFRvZG8odG9kbykge1xuICAgIGNvbnN0IHRvZG9ET00gPSBfY3JlYXRlVG9kbyh0b2RvKTtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG9zXCIpO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9ET00pO1xufVxuXG5mdW5jdGlvbiBfY3JlYXRlVG9kbyh0b2RvKSB7XG4gICAgY29uc3QgeyB0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkdWVEYXRlLCBpZCwgY2hlY2tlZCB9ID1cbiAgICAgICAgdG9kbztcbiAgICBjb25zdCB0b2RvRE9NID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b2RvRE9NLmNsYXNzTGlzdC5hZGQoXCJ0b2RvXCIpO1xuXG4gICAgY29uc3QgcHJpb3JpdHlET00gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgcHJpb3JpdHlET00udHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgICBwcmlvcml0eURPTS5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHlcIik7XG4gICAgX3NldFByaW9yaXR5KHByaW9yaXR5RE9NLCBwcmlvcml0eSk7XG4gICAgcHJpb3JpdHlET00uY2hlY2tlZCA9IGNoZWNrZWQ7XG5cbiAgICBjb25zdCB0b2RvQm9keSA9IF9jcmVhdGVUb2RvQm9keSh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUpO1xuXG4gICAgY29uc3QgZGVsZXRlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGVsZXRlSWNvbi5jbGFzc0xpc3QuYWRkKFwibWRpXCIpO1xuICAgIGRlbGV0ZUljb24uY2xhc3NMaXN0LmFkZChcIm1kaS10cmFzaC1jYW4tb3V0bGluZVwiKTtcbiAgICBjb25zb2xlLmxvZyh0b2RvQm9keSk7XG4gICAgdG9kb0RPTS5hcHBlbmRDaGlsZChwcmlvcml0eURPTSk7XG4gICAgdG9kb0RPTS5hcHBlbmRDaGlsZCh0b2RvQm9keSk7XG4gICAgdG9kb0RPTS5hcHBlbmRDaGlsZChkZWxldGVJY29uKTtcblxuICAgIHRvZG9ET00uaWQgPSBpZDtcblxuICAgIHJldHVybiB0b2RvRE9NO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVUb2RvQWRkRm9ybSgpIHtcbiAgICBjb25zdCBhZGRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFza1wiKTtcbiAgICBhZGRUYXNrLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIpO1xuXG4gICAgY29uc3QgdG9kb0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG8tZm9ybVwiKTtcbiAgICB0b2RvRm9ybS5yZXNldCgpO1xuICAgIHRvZG9Gb3JtLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIpO1xufVxuXG5mdW5jdGlvbiBfY2xvbmVUb2RvRm9ybSgpIHtcbiAgICBjb25zdCB0b2RvRm9ybSA9IGRvY3VtZW50XG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI3RvZG8tZm9ybVwiKVxuICAgICAgICAuY2xvbmVOb2RlKHRydWUpO1xuICAgIHRvZG9Gb3JtLmlkID0gXCJlZGl0LWZvcm1cIjtcbiAgICB0b2RvRm9ybS5yZXNldCgpO1xuICAgIHRvZG9Gb3JtLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuXG4gICAgcmV0dXJuIHRvZG9Gb3JtO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVFZGl0Rm9ybSh0b2RvKSB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdC1mb3JtXCIpKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGR1ZURhdGUsIGlkIH0gPSB0b2RvO1xuICAgIGNvbnN0IHRvZG9ET00gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0b2RvLmlkKTtcbiAgICBjb25zdCBlZGl0Rm9ybSA9IF9jbG9uZVRvZG9Gb3JtKCk7XG5cbiAgICBlZGl0Rm9ybS5kYXRhc2V0LmlkID0gaWQ7XG4gICAgZWRpdEZvcm0udGl0bGUudmFsdWUgPSB0aXRsZTtcbiAgICBlZGl0Rm9ybS5kZXNjcmlwdGlvbi52YWx1ZSA9IGRlc2NyaXB0aW9uO1xuICAgIGVkaXRGb3JtLnByaW9yaXR5LnZhbHVlID0gcHJpb3JpdHk7XG4gICAgaWYgKGR1ZURhdGUpIHtcbiAgICAgICAgZWRpdEZvcm0uZHVlRGF0ZS52YWx1ZUFzRGF0ZSA9IGR1ZURhdGU7XG4gICAgfVxuXG4gICAgZWRpdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgXCJzdWJtaXRcIixcbiAgICAgICAgKGV2dCkgPT4ge1xuICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCBbdGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZHVlRGF0ZV0gPSBbXG4gICAgICAgICAgICAgICAgZWRpdEZvcm0udGl0bGUudmFsdWUsXG4gICAgICAgICAgICAgICAgZWRpdEZvcm0uZGVzY3JpcHRpb24udmFsdWUsXG4gICAgICAgICAgICAgICAgZWRpdEZvcm0ucHJpb3JpdHkudmFsdWUsXG4gICAgICAgICAgICAgICAgZWRpdEZvcm0uZHVlRGF0ZS52YWx1ZUFzRGF0ZSxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICB0b2RvLmVkaXQodGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZHVlRGF0ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIHsgb25jZTogdHJ1ZSB9XG4gICAgKTtcblxuICAgIGVkaXRGb3JtLnF1ZXJ5U2VsZWN0b3IoXCIuY2xvc2UtZm9ybVwiKS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICBcImNsaWNrXCIsXG4gICAgICAgIChlKSA9PiB7XG4gICAgICAgICAgICBlZGl0Rm9ybS5yZW1vdmUoKTtcbiAgICAgICAgICAgIHRvZG9ET00uY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gICAgICAgIH0sXG4gICAgICAgIHsgb25jZTogdHJ1ZSB9XG4gICAgKTtcblxuICAgIHRvZG9ET00uaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYWZ0ZXJlbmRcIiwgZWRpdEZvcm0pO1xuICAgIHRvZG9ET00uY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG5cbiAgICByZXR1cm4gZWRpdEZvcm07XG59XG5cbmZ1bmN0aW9uIGVkaXRUb2RvKHRvZG8pIHtcbiAgICBjb25zdCB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGlkLCBkdWVEYXRlIH0gPSB0b2RvO1xuXG4gICAgY29uc3QgdG9kb0RPTSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICBfc2V0UHJpb3JpdHkodG9kb0RPTS5xdWVyeVNlbGVjdG9yKFwiLnByaW9yaXR5XCIpLCBwcmlvcml0eSk7XG4gICAgY29uc3QgdG9kb0JvZHkgPSBfY3JlYXRlVG9kb0JvZHkodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlKTtcbiAgICB0b2RvRE9NLnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1ib2R5XCIpLnJlcGxhY2VXaXRoKHRvZG9Cb2R5KTtcblxuICAgIHRvZG9ET00uY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gICAgY29uc3QgZWRpdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VkaXQtZm9ybVwiKTtcbiAgICBlZGl0Rm9ybSAmJiBlZGl0Rm9ybS5yZW1vdmUoKTtcbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlVG9kbyhpZCkge1xuICAgIGNvbnN0IHRvZG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgdG9kby5yZW1vdmUoKTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlUHJvamVjdEZvcm0oKSB7XG4gICAgY29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXByb2plY3RcIik7XG4gICAgYWRkUHJvamVjdC5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiKTtcblxuICAgIGNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWZvcm1cIik7XG4gICAgcHJvamVjdEZvcm0ucmVzZXQoKTtcbiAgICBwcm9qZWN0Rm9ybS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiKTtcbn1cblxuZnVuY3Rpb24gX2NyZWF0ZVRvZG9Cb2R5KHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSkge1xuICAgIGNvbnN0IHRvZG9Cb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b2RvQm9keS5jbGFzc0xpc3QuYWRkKFwidG9kby1ib2R5XCIpO1xuXG4gICAgY29uc3QgdG9kb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b2RvVGl0bGUuY2xhc3NMaXN0LmFkZChcInRvZG8tdGl0bGVcIik7XG4gICAgdG9kb1RpdGxlLnRleHRDb250ZW50ID0gdGl0bGU7XG5cbiAgICB0b2RvQm9keS5hcHBlbmRDaGlsZCh0b2RvVGl0bGUpO1xuXG4gICAgaWYgKGRlc2NyaXB0aW9uKSB7XG4gICAgICAgIGNvbnN0IHRvZG9EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRvZG9EZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwidG9kby1kZXNjcmlwdGlvblwiKTtcbiAgICAgICAgdG9kb0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID1cbiAgICAgICAgICAgIGRlc2NyaXB0aW9uLnN1YnN0cigwLCA1MCkgK1xuICAgICAgICAgICAgKGRlc2NyaXB0aW9uLmxlbmd0aCA+IDUwID8gXCIuLi5cIiA6IFwiXCIpO1xuXG4gICAgICAgIHRvZG9Cb2R5LmFwcGVuZENoaWxkKHRvZG9EZXNjcmlwdGlvbik7XG4gICAgfVxuICAgIGlmIChkdWVEYXRlKSB7XG4gICAgICAgIGNvbnN0IHRvZG9EdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdG9kb0R1ZURhdGUuY2xhc3NMaXN0LmFkZChcInRvZG8tZHVlLWRhdGVcIik7XG5cbiAgICAgICAgY29uc3QgY2FsZW5kYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjYWxlbmRhci5jbGFzc0xpc3QuYWRkKFwibWRpXCIpO1xuICAgICAgICBjYWxlbmRhci5jbGFzc0xpc3QuYWRkKFwibWRpLWNhbGVuZGFyLWNsb2NrLW91dGxpbmVcIik7XG5cbiAgICAgICAgY29uc3QgdG9kb0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0b2RvRGF0ZS5jbGFzc0xpc3QuYWRkKFwidG9kby1kYXRlXCIpO1xuICAgICAgICB0b2RvRGF0ZS50ZXh0Q29udGVudCA9IGR1ZURhdGU7XG5cbiAgICAgICAgdG9kb0R1ZURhdGUuYXBwZW5kQ2hpbGQoY2FsZW5kYXIpO1xuICAgICAgICB0b2RvRHVlRGF0ZS5hcHBlbmRDaGlsZCh0b2RvRGF0ZSk7XG5cbiAgICAgICAgdG9kb0JvZHkuYXBwZW5kQ2hpbGQodG9kb0R1ZURhdGUpO1xuICAgIH1cblxuICAgIHJldHVybiB0b2RvQm9keTtcbn1cblxuZnVuY3Rpb24gX3NldFByaW9yaXR5KHByaW9yaXR5RE9NLCBwcmlvcml0eSkge1xuICAgIHN3aXRjaCAoK3ByaW9yaXR5KSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIHByaW9yaXR5RE9NLmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eS1sb3dcIik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgcHJpb3JpdHlET00uY2xhc3NMaXN0LmFkZChcInByaW9yaXR5LW1lZGl1bVwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBwcmlvcml0eURPTS5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHktaGlnaFwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcHJpb3JpdHlET00uY2xhc3NMaXN0LmFkZChcInByaW9yaXR5LWxvd1wiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHRvZ2dsZVRvZG9BZGRGb3JtLFxuICAgIHRvZ2dsZVByb2plY3RGb3JtLFxuICAgIGFwcGVuZFByb2plY3QsXG4gICAgc2V0QWN0aXZlUHJvamVjdCxcbiAgICBhcHBlbmRUb2RvLFxuICAgIGNyZWF0ZUVkaXRGb3JtLFxuICAgIGVkaXRUb2RvLFxuICAgIHJlbW92ZVRvZG8sXG59O1xuIiwiaW1wb3J0IGRpc3BsYXlDb250cm9sbGVyIGZyb20gXCIuL2Rpc3BsYXlDb250cm9sbGVyLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xuICAgICN0b2RvcyA9IFtdO1xuICAgICNpZCA9IDA7XG4gICAgY29uc3RydWN0b3IodGl0bGUpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLiNpZCA9IFwiaWRcIiArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMTYpLnNsaWNlKDIpO1xuICAgIH1cblxuICAgIGFkZFRvZG8odG9kbykge1xuICAgICAgICB0aGlzLiN0b2Rvcy5wdXNoKHRvZG8pO1xuICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5hcHBlbmRUb2RvKHRvZG8pO1xuICAgIH1cblxuICAgIHJlbW92ZVRvZG8oaWQpIHtcbiAgICAgICAgdGhpcy4jdG9kb3Muc3BsaWNlKFxuICAgICAgICAgICAgdGhpcy4jdG9kb3MuZmluZEluZGV4KCh0b2RvKSA9PiB0b2RvLmlkID09PSBpZCksXG4gICAgICAgICAgICAxXG4gICAgICAgICk7XG4gICAgICAgIGRpc3BsYXlDb250cm9sbGVyLnJlbW92ZVRvZG8oaWQpO1xuICAgIH1cblxuICAgIGdldFRvZG8oaWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3RvZG9zLmZpbmQoKHRvZG8pID0+IHRvZG8uaWQgPT09IGlkKTtcbiAgICB9XG5cbiAgICBnZXQgaWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNpZDtcbiAgICB9XG5cbiAgICBzdGF0aWMgc2V0QWN0aXZlKHByb2plY3QpIHtcbiAgICAgICAgUHJvamVjdC4jYWN0aXZlID0gcHJvamVjdDtcbiAgICAgICAgZGlzcGxheUNvbnRyb2xsZXIuc2V0QWN0aXZlUHJvamVjdChwcm9qZWN0KTtcbiAgICB9XG5cbiAgICBnZXQgdG9kb3MoKSB7XG4gICAgICAgIHJldHVybiBbLi4udGhpcy4jdG9kb3NdO1xuICAgIH1cblxuICAgIHN0YXRpYyAjYWN0aXZlO1xuICAgIHN0YXRpYyBnZXQgYWN0aXZlKCkge1xuICAgICAgICByZXR1cm4gUHJvamVjdC4jYWN0aXZlO1xuICAgIH1cbn1cbiIsImltcG9ydCBkaXNwbGF5Q29udHJvbGxlciBmcm9tIFwiLi9kaXNwbGF5Q29udHJvbGxlclwiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvIHtcbiAgICBjaGVja2VkID0gZmFsc2U7XG4gICAgI2lkID0gbnVsbDtcbiAgICAjcHJvamVjdCA9IG51bGw7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZHVlRGF0ZSkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLiNpZCA9IFwiaWRcIiArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMTYpLnNsaWNlKDIpO1xuICAgICAgICB0aGlzLiNwcm9qZWN0ID0gUHJvamVjdC5hY3RpdmU7XG4gICAgfVxuXG4gICAgZWRpdCh0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkdWVEYXRlKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIGRpc3BsYXlDb250cm9sbGVyLmVkaXRUb2RvKHRoaXMpO1xuICAgIH1cblxuICAgIGRlbGV0ZSgpIHtcbiAgICAgICAgdGhpcy4jcHJvamVjdC5yZW1vdmVUb2RvKHRoaXMuI2lkKTtcbiAgICB9XG5cbiAgICBnZXQgaWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNpZDtcbiAgICB9XG59XG4iLCJpbXBvcnQgZGlzcGxheUNvbnRyb2xsZXIgZnJvbSBcIi4vZGlzcGxheUNvbnRyb2xsZXJcIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCBUb2RvIGZyb20gXCIuL3RvZG9cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdFBhZ2UoKSB7XG4gICAgd2luZG93LnByb2plY3RzID0gW107XG4gICAgY29uc3QgcHJvamVjdDEgPSBuZXcgUHJvamVjdChcIlRvZGF5XCIpO1xuICAgIGRpc3BsYXlDb250cm9sbGVyLmFwcGVuZFByb2plY3QocHJvamVjdDEpO1xuICAgIFByb2plY3Quc2V0QWN0aXZlKHByb2plY3QxKTtcblxuICAgIGNvbnN0IHRvZG8xMSA9IG5ldyBUb2RvKFxuICAgICAgICBcIkdvIG91dCB3aXRoIHRyYXNoXCIsXG4gICAgICAgIFwidGhpcyBpcyBzb21lIHJhbmRvbWUgbm90IHNvIHNob3J0IGRlc2NyaXB0aW9uXCIsXG4gICAgICAgIDEsXG4gICAgICAgIG5ldyBEYXRlKClcbiAgICApO1xuICAgIGNvbnN0IHRvZG8xMiA9IG5ldyBUb2RvKFxuICAgICAgICBcIkdvIHNob3BwaW5nXCIsXG4gICAgICAgIFwidGhpcyBpcyBzb21lIHJhbmRvbWUgbG9uZ2VyIGRlc2NyaXB0aW9uIGFib3V0IGhvdyBhd2Vzb21lIGlzIHRoaXMgdG9kb1wiLFxuICAgICAgICAwLFxuICAgICAgICBuZXcgRGF0ZSgpXG4gICAgKTtcblxuICAgIHByb2plY3QxLmFkZFRvZG8odG9kbzExKTtcbiAgICBwcm9qZWN0MS5hZGRUb2RvKHRvZG8xMik7XG4gICAgd2luZG93LnByb2plY3RzLnB1c2gocHJvamVjdDEpO1xufVxuIiwiaW1wb3J0IGRpc3BsYXlDb250cm9sbGVyIGZyb20gXCIuL2Rpc3BsYXlDb250cm9sbGVyXCI7XG5pbXBvcnQgaW5pdFBhZ2UgZnJvbSBcIi4vbG9hZEluaXRcIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCBUb2RvIGZyb20gXCIuL3RvZG9cIjtcblxuaW5pdFBhZ2UoKTtcblxuLyogRUxFTUVOVFMgKi9cbmNvbnN0IGFkZFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10YXNrXCIpO1xuY29uc3QgdG9kb0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tZm9ybVwiKTtcbmNvbnN0IHRvZG9zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2Rvc1wiKTtcbmNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0c1wiKTtcbmNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1wcm9qZWN0XCIpO1xuY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtZm9ybVwiKTtcblxuLyogTElTVEVORVJTICovXG5wcm9qZWN0cy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2dCkgPT4ge1xuICAgIGNvbnN0IHQgPSBldnQudGFyZ2V0O1xuICAgIGlmICghdC5jbG9zZXN0KFwiLnByb2plY3RcIikpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgcHJvamVjdERPTSA9IHQuY2xvc2VzdChcIi5wcm9qZWN0XCIpO1xuICAgIGNvbnN0IHByb2plY3QgPSB3aW5kb3cucHJvamVjdHMuZmluZChcbiAgICAgICAgKHByb2plY3QpID0+IHByb2plY3QuaWQgPT09IHByb2plY3RET00uaWRcbiAgICApO1xuICAgIFByb2plY3Quc2V0QWN0aXZlKHByb2plY3QpO1xufSk7XG5hZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgXCJjbGlja1wiLFxuICAgIGRpc3BsYXlDb250cm9sbGVyLnRvZ2dsZVByb2plY3RGb3JtXG4pO1xuXG5wcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldnQpID0+IHtcbiAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAocHJvamVjdEZvcm0ucHJvamVjdFRpdGxlLnZhbHVlKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBuZXcgUHJvamVjdChwcm9qZWN0Rm9ybS5wcm9qZWN0VGl0bGUudmFsdWUpO1xuICAgICAgICB3aW5kb3cucHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgICAgICAgZGlzcGxheUNvbnRyb2xsZXIuYXBwZW5kUHJvamVjdChwcm9qZWN0KTtcbiAgICAgICAgUHJvamVjdC5zZXRBY3RpdmUocHJvamVjdCk7XG4gICAgfVxuICAgIGRpc3BsYXlDb250cm9sbGVyLnRvZ2dsZVByb2plY3RGb3JtKCk7XG59KTtcblxuYWRkVGFzay5hZGRFdmVudExpc3RlbmVyKFxuICAgIFwiY2xpY2tcIixcbiAgICBkaXNwbGF5Q29udHJvbGxlci50b2dnbGVUb2RvQWRkRm9ybVxuKTtcblxudG9kb0Zvcm1cbiAgICAucXVlcnlTZWxlY3RvcihcIi5jbG9zZS1mb3JtXCIpXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkaXNwbGF5Q29udHJvbGxlci50b2dnbGVUb2RvQWRkRm9ybSk7XG5cbnRvZG9Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2dCkgPT4ge1xuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IFt0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkdWVEYXRlXSA9IFtcbiAgICAgICAgdG9kb0Zvcm0udGl0bGUudmFsdWUsXG4gICAgICAgIHRvZG9Gb3JtLmRlc2NyaXB0aW9uLnZhbHVlLFxuICAgICAgICB0b2RvRm9ybS5wcmlvcml0eS52YWx1ZSxcbiAgICAgICAgdG9kb0Zvcm0uZHVlRGF0ZS52YWx1ZUFzRGF0ZSxcbiAgICBdO1xuXG4gICAgY29uc3QgdG9kbyA9IG5ldyBUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGR1ZURhdGUpO1xuICAgIFByb2plY3QuYWN0aXZlLmFkZFRvZG8odG9kbyk7XG4gICAgdG9kb0Zvcm0ucmVzZXQoKTtcbiAgICBkaXNwbGF5Q29udHJvbGxlci50b2dnbGVUb2RvQWRkRm9ybSgpO1xufSk7XG5cbnRvZG9zQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZ0KSA9PiB7XG4gICAgY29uc3QgdCA9IGV2dC50YXJnZXQ7XG4gICAgY29uc3QgdG9kb0RPTSA9IHQuY2xvc2VzdChcIi50b2RvXCIpO1xuICAgIGNvbnN0IHRvZG8gPSBQcm9qZWN0LmFjdGl2ZS5nZXRUb2RvKHRvZG9ET00uaWQpO1xuICAgIGlmICghdG9kb0RPTSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAodC50eXBlID09PSBcImNoZWNrYm94XCIpIHtcbiAgICAgICAgdG9kby5jaGVja2VkID0gdC5jaGVja2VkO1xuICAgIH1cbiAgICBpZiAodC5jbG9zZXN0KFwiLnRvZG8tYm9keVwiKSkge1xuICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5jcmVhdGVFZGl0Rm9ybSh0b2RvKTtcbiAgICB9XG4gICAgaWYgKHQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibWRpLXRyYXNoLWNhbi1vdXRsaW5lXCIpKSB7XG4gICAgICAgIHRvZG8uZGVsZXRlKCk7XG4gICAgfVxufSk7XG4iXSwibmFtZXMiOlsiYXBwZW5kVG9kbyIsInRvZG8iLCJ0b2RvRE9NIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInByaW9yaXR5IiwiZHVlRGF0ZSIsImlkIiwiY2hlY2tlZCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsInByaW9yaXR5RE9NIiwidHlwZSIsIl9zZXRQcmlvcml0eSIsInRvZG9Cb2R5IiwiX2NyZWF0ZVRvZG9Cb2R5IiwiZGVsZXRlSWNvbiIsImNvbnNvbGUiLCJsb2ciLCJhcHBlbmRDaGlsZCIsIl9jcmVhdGVUb2RvIiwicXVlcnlTZWxlY3RvciIsInRvZG9UaXRsZSIsInRleHRDb250ZW50IiwidG9kb0Rlc2NyaXB0aW9uIiwic3Vic3RyIiwibGVuZ3RoIiwidG9kb0R1ZURhdGUiLCJjYWxlbmRhciIsInRvZG9EYXRlIiwidG9nZ2xlVG9kb0FkZEZvcm0iLCJ0b2dnbGUiLCJ0b2RvRm9ybSIsInJlc2V0IiwidG9nZ2xlUHJvamVjdEZvcm0iLCJwcm9qZWN0Rm9ybSIsImFwcGVuZFByb2plY3QiLCJwcm9qZWN0IiwicHJvamVjdERPTSIsInByb2plY3ROYW1lIiwiX2NyZWF0ZVByb2plY3QiLCJzZXRBY3RpdmVQcm9qZWN0IiwiYWN0aXZlUHJvamVjdCIsInJlbW92ZSIsImlubmVySFRNTCIsIl9yZW1vdmVBY3RpdmVQcm9qZWN0IiwiZ2V0RWxlbWVudEJ5SWQiLCJ0b2RvcyIsImZvckVhY2giLCJfc2hvd1Byb2plY3RUb2RvcyIsImNyZWF0ZUVkaXRGb3JtIiwiZWRpdEZvcm0iLCJjbG9uZU5vZGUiLCJfY2xvbmVUb2RvRm9ybSIsImRhdGFzZXQiLCJ2YWx1ZSIsInZhbHVlQXNEYXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2dCIsInByZXZlbnREZWZhdWx0IiwiZWRpdCIsIm9uY2UiLCJlIiwiaW5zZXJ0QWRqYWNlbnRFbGVtZW50IiwiZWRpdFRvZG8iLCJyZXBsYWNlV2l0aCIsInJlbW92ZVRvZG8iLCJQcm9qZWN0IiwiY29uc3RydWN0b3IiLCJ0aGlzIiwiTWF0aCIsInJhbmRvbSIsInRvU3RyaW5nIiwic2xpY2UiLCJhZGRUb2RvIiwicHVzaCIsImRpc3BsYXlDb250cm9sbGVyIiwic3BsaWNlIiwiZmluZEluZGV4IiwiZ2V0VG9kbyIsImZpbmQiLCJzdGF0aWMiLCJhY3RpdmUiLCJUb2RvIiwiZGVsZXRlIiwid2luZG93IiwicHJvamVjdHMiLCJwcm9qZWN0MSIsInNldEFjdGl2ZSIsInRvZG8xMSIsIkRhdGUiLCJ0b2RvMTIiLCJpbml0UGFnZSIsImFkZFRhc2siLCJ0b2Rvc0NvbnRhaW5lciIsImFkZFByb2plY3QiLCJ0IiwidGFyZ2V0IiwiY2xvc2VzdCIsInByb2plY3RUaXRsZSIsImNvbnRhaW5zIl0sInNvdXJjZVJvb3QiOiIifQ==