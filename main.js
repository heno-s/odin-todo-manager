(()=>{"use strict";function t(t){const e=function(t){const{title:e,description:o,priority:d,dueDate:s,id:i}=t,c=document.createElement("div");c.classList.add("todo");const n=document.createElement("input");switch(n.type="checkbox",n.classList.add("priority"),+d){case 0:default:n.classList.add("priority-low");break;case 1:n.classList.add("priority-medium");break;case 2:n.classList.add("priority-high")}const a=document.createElement("div");a.classList.add("todo-body");const r=document.createElement("div");if(r.classList.add("todo-title"),r.textContent=e,a.appendChild(r),o){const t=document.createElement("div");t.classList.add("todo-description"),t.textContent=o.substr(0,30),a.appendChild(t)}if(s){const t=document.createElement("div");t.classList.add("todo-due-date");const e=document.createElement("div");e.classList.add("mdi"),e.classList.add("mdi-calendar-clock-outline");const o=document.createElement("div");o.classList.add("todo-date"),o.textContent=s,t.appendChild(e),t.appendChild(o),a.appendChild(t)}const l=document.createElement("div");return l.classList.add("mdi"),l.classList.add("mdi-trash-can-outline"),c.appendChild(n),c.appendChild(a),c.appendChild(l),c.id=i,c}(t);document.querySelector(".todos").appendChild(e)}const e={toggleTodoForm:function(){document.querySelector(".add-task").classList.toggle("hide"),document.querySelector(".todo-form").classList.toggle("hide")},appendProject:function(t){const e=function(t){const{title:e,id:o}=t,d=document.createElement("li");d.classList.add("project"),d.id=o;const s=document.createElement("span");s.classList.add("project-name"),s.textContent=e;const i=document.createElement("div");return i.classList.add("mdi"),i.classList.add("mdi-trash-can-outline"),d.appendChild(s),d.appendChild(i),d}(t);document.querySelector(".projects").appendChild(e)},setActiveProject:function(e){document.getElementById(e.id).classList.add("active"),document.querySelector(".project.active").classList.remove(".ative"),document.querySelector(".todos").innerHTML="",e.todos.forEach(t)},appendTodo:t};class o{#t=[];#e=0;constructor(t){this.title=t,this.#e="id"+Math.random().toString(16).slice(2)}addTodo(t){this.#t.push(t),e.appendTodo(t)}removeTodo(t){this.#t.splice(t,1)}getTodo(t){return this.#t.find((e=>e.id===t))}get id(){return this.#e}static setActive(t){o.#o=t,e.setActiveProject(t)}get todos(){return[...this.#t]}static#o;static get active(){return o.#o}}class d{checked=!1;#e=null;constructor(t,e,o,d){this.title=t,this.description=e,this.priority=o,this.dueDate=d,this.#e="id"+Math.random().toString(16).slice(2)}get id(){return this.#e}}!function(){const t=[],s=new o("Today"),i=new d("Go out with trash","this is some randome not so short description",1,new Date),c=new d("Go shopping","this is some randome longer description about how awesome is this todo",0,new Date);s.addTodo(i),s.addTodo(c);const n=new o("Tomorrow"),a=new d("Go out with trash tomorrow","this is some randome not so short description",1,new Date),r=new d("Go shopping tomorrow","this is some randome longer description about how awesome is this todo",0,new Date);n.addTodo(a),n.addTodo(r),t.push(s,n),t.forEach(e.appendProject),o.setActive(s)}();const s=document.querySelector(".add-task"),i=document.querySelector(".todo-form"),c=document.querySelector(".todos");s.addEventListener("click",(t=>{e.toggleTodoForm()})),i.addEventListener("submit",(t=>{t.preventDefault();const[s,c,n,a]=[i.title.value,i.description.value,i.priority.value,i.dueDate.value],r=new d(s,c,n,a);o.active.addTodo(r),i.reset(),e.toggleTodoForm()})),c.addEventListener("click",(t=>{if("checkbox"===t.target.type){const e=t.target.closest(".todo");o.active.getTodo(e.id).checked=t.target.checked}}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bi10b2RvLW1hbmFnZXIvLi9zcmMvZGlzcGxheUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLW1hbmFnZXIvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbWFuYWdlci8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL29kaW4tdG9kby1tYW5hZ2VyLy4vc3JjL2xvYWRJbml0LmpzIiwid2VicGFjazovL29kaW4tdG9kby1tYW5hZ2VyLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGFwcGVuZFByb2plY3QocHJvamVjdCkge1xuICAgIGNvbnN0IHByb2plY3RET00gPSBfY3JlYXRlUHJvamVjdChwcm9qZWN0KTtcbiAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHNcIik7XG4gICAgcHJvamVjdHMuYXBwZW5kQ2hpbGQocHJvamVjdERPTSk7XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVQcm9qZWN0KHByb2plY3QpIHtcbiAgICBjb25zdCB7IHRpdGxlLCBpZCB9ID0gcHJvamVjdDtcbiAgICBjb25zdCBwcm9qZWN0RE9NID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIHByb2plY3RET00uY2xhc3NMaXN0LmFkZChcInByb2plY3RcIik7XG4gICAgcHJvamVjdERPTS5pZCA9IGlkO1xuXG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBwcm9qZWN0TmFtZS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1uYW1lXCIpO1xuICAgIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gdGl0bGU7XG5cbiAgICBjb25zdCBkZWxldGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkZWxldGVJY29uLmNsYXNzTGlzdC5hZGQoXCJtZGlcIik7XG4gICAgZGVsZXRlSWNvbi5jbGFzc0xpc3QuYWRkKFwibWRpLXRyYXNoLWNhbi1vdXRsaW5lXCIpO1xuXG4gICAgcHJvamVjdERPTS5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSk7XG4gICAgcHJvamVjdERPTS5hcHBlbmRDaGlsZChkZWxldGVJY29uKTtcblxuICAgIHJldHVybiBwcm9qZWN0RE9NO1xufVxuXG5mdW5jdGlvbiBzZXRBY3RpdmVQcm9qZWN0KHByb2plY3QpIHtcbiAgICBjb25zdCBwcm9qZWN0RE9NID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocHJvamVjdC5pZCk7XG4gICAgcHJvamVjdERPTS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIF9yZW1vdmVBY3RpdmVQcm9qZWN0KCk7XG4gICAgY29uc3QgdG9kb3MgPSBwcm9qZWN0LnRvZG9zO1xuICAgIHRvZG9zLmZvckVhY2goYXBwZW5kVG9kbyk7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZFRvZG8odG9kbykge1xuICAgIGNvbnN0IHRvZG9ET00gPSBfY3JlYXRlVG9kbyh0b2RvKTtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG9zXCIpO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9ET00pO1xufVxuXG5mdW5jdGlvbiBfY3JlYXRlVG9kbyh0b2RvKSB7XG4gICAgY29uc3QgeyB0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkdWVEYXRlLCBpZCB9ID0gdG9kbztcbiAgICBjb25zdCB0b2RvRE9NID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b2RvRE9NLmNsYXNzTGlzdC5hZGQoXCJ0b2RvXCIpO1xuXG4gICAgY29uc3QgcHJpb3JpdHlET00gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgcHJpb3JpdHlET00udHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgICBwcmlvcml0eURPTS5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHlcIik7XG5cbiAgICBzd2l0Y2ggKCtwcmlvcml0eSkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBwcmlvcml0eURPTS5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHktbG93XCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIHByaW9yaXR5RE9NLmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eS1tZWRpdW1cIik7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBwcmlvcml0eURPTS5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHktaGlnaFwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcHJpb3JpdHlET00uY2xhc3NMaXN0LmFkZChcInByaW9yaXR5LWxvd1wiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNvbnN0IHRvZG9Cb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b2RvQm9keS5jbGFzc0xpc3QuYWRkKFwidG9kby1ib2R5XCIpO1xuXG4gICAgY29uc3QgdG9kb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b2RvVGl0bGUuY2xhc3NMaXN0LmFkZChcInRvZG8tdGl0bGVcIik7XG4gICAgdG9kb1RpdGxlLnRleHRDb250ZW50ID0gdGl0bGU7XG5cbiAgICB0b2RvQm9keS5hcHBlbmRDaGlsZCh0b2RvVGl0bGUpO1xuXG4gICAgaWYgKGRlc2NyaXB0aW9uKSB7XG4gICAgICAgIGNvbnN0IHRvZG9EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRvZG9EZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwidG9kby1kZXNjcmlwdGlvblwiKTtcbiAgICAgICAgdG9kb0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb24uc3Vic3RyKDAsIDMwKTtcbiAgICAgICAgdG9kb0JvZHkuYXBwZW5kQ2hpbGQodG9kb0Rlc2NyaXB0aW9uKTtcbiAgICB9XG4gICAgaWYgKGR1ZURhdGUpIHtcbiAgICAgICAgY29uc3QgdG9kb0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0b2RvRHVlRGF0ZS5jbGFzc0xpc3QuYWRkKFwidG9kby1kdWUtZGF0ZVwiKTtcblxuICAgICAgICBjb25zdCBjYWxlbmRhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNhbGVuZGFyLmNsYXNzTGlzdC5hZGQoXCJtZGlcIik7XG4gICAgICAgIGNhbGVuZGFyLmNsYXNzTGlzdC5hZGQoXCJtZGktY2FsZW5kYXItY2xvY2stb3V0bGluZVwiKTtcblxuICAgICAgICBjb25zdCB0b2RvRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRvZG9EYXRlLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWRhdGVcIik7XG4gICAgICAgIHRvZG9EYXRlLnRleHRDb250ZW50ID0gZHVlRGF0ZTtcblxuICAgICAgICB0b2RvRHVlRGF0ZS5hcHBlbmRDaGlsZChjYWxlbmRhcik7XG4gICAgICAgIHRvZG9EdWVEYXRlLmFwcGVuZENoaWxkKHRvZG9EYXRlKTtcblxuICAgICAgICB0b2RvQm9keS5hcHBlbmRDaGlsZCh0b2RvRHVlRGF0ZSk7XG4gICAgfVxuXG4gICAgY29uc3QgZGVsZXRlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGVsZXRlSWNvbi5jbGFzc0xpc3QuYWRkKFwibWRpXCIpO1xuICAgIGRlbGV0ZUljb24uY2xhc3NMaXN0LmFkZChcIm1kaS10cmFzaC1jYW4tb3V0bGluZVwiKTtcblxuICAgIHRvZG9ET00uYXBwZW5kQ2hpbGQocHJpb3JpdHlET00pO1xuICAgIHRvZG9ET00uYXBwZW5kQ2hpbGQodG9kb0JvZHkpO1xuICAgIHRvZG9ET00uYXBwZW5kQ2hpbGQoZGVsZXRlSWNvbik7XG5cbiAgICB0b2RvRE9NLmlkID0gaWQ7XG5cbiAgICByZXR1cm4gdG9kb0RPTTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlVG9kb0Zvcm0oKSB7XG4gICAgY29uc3QgYWRkVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRhc2tcIik7XG4gICAgYWRkVGFzay5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiKTtcblxuICAgIGNvbnN0IHRvZG9Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLWZvcm1cIik7XG4gICAgdG9kb0Zvcm0uY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIik7XG59XG5cbmZ1bmN0aW9uIF9yZW1vdmVBY3RpdmVQcm9qZWN0KCkge1xuICAgIGNvbnN0IGFjdGl2ZVByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QuYWN0aXZlXCIpO1xuICAgIGFjdGl2ZVByb2plY3QuY2xhc3NMaXN0LnJlbW92ZShcIi5hdGl2ZVwiKTtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG9zXCIpO1xuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgdG9nZ2xlVG9kb0Zvcm0sXG4gICAgYXBwZW5kUHJvamVjdCxcbiAgICBzZXRBY3RpdmVQcm9qZWN0LFxuICAgIGFwcGVuZFRvZG8sXG59O1xuIiwiaW1wb3J0IGRpc3BsYXlDb250cm9sbGVyIGZyb20gXCIuL2Rpc3BsYXlDb250cm9sbGVyLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xuICAgICN0b2RvcyA9IFtdO1xuICAgICNpZCA9IDA7XG4gICAgY29uc3RydWN0b3IodGl0bGUpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLiNpZCA9IFwiaWRcIiArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMTYpLnNsaWNlKDIpO1xuICAgIH1cblxuICAgIGFkZFRvZG8odG9kbykge1xuICAgICAgICB0aGlzLiN0b2Rvcy5wdXNoKHRvZG8pO1xuICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5hcHBlbmRUb2RvKHRvZG8pO1xuICAgIH1cblxuICAgIHJlbW92ZVRvZG8oaW5kZXgpIHtcbiAgICAgICAgdGhpcy4jdG9kb3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG5cbiAgICBnZXRUb2RvKGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiN0b2Rvcy5maW5kKCh0b2RvKSA9PiB0b2RvLmlkID09PSBpZCk7XG4gICAgfVxuXG4gICAgZ2V0IGlkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jaWQ7XG4gICAgfVxuXG4gICAgc3RhdGljIHNldEFjdGl2ZShwcm9qZWN0KSB7XG4gICAgICAgIFByb2plY3QuI2FjdGl2ZSA9IHByb2plY3Q7XG4gICAgICAgIGRpc3BsYXlDb250cm9sbGVyLnNldEFjdGl2ZVByb2plY3QocHJvamVjdCk7XG4gICAgfVxuXG4gICAgZ2V0IHRvZG9zKCkge1xuICAgICAgICByZXR1cm4gWy4uLnRoaXMuI3RvZG9zXTtcbiAgICB9XG5cbiAgICBzdGF0aWMgI2FjdGl2ZTtcbiAgICBzdGF0aWMgZ2V0IGFjdGl2ZSgpIHtcbiAgICAgICAgcmV0dXJuIFByb2plY3QuI2FjdGl2ZTtcbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvIHtcbiAgICBjaGVja2VkID0gZmFsc2U7XG4gICAgI2lkID0gbnVsbDtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkdWVEYXRlKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMuI2lkID0gXCJpZFwiICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygxNikuc2xpY2UoMik7XG4gICAgfVxuXG4gICAgZ2V0IGlkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jaWQ7XG4gICAgfVxufVxuIiwiaW1wb3J0IGRpc3BsYXlDb250cm9sbGVyIGZyb20gXCIuL2Rpc3BsYXlDb250cm9sbGVyXCI7XG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgVG9kbyBmcm9tIFwiLi90b2RvXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRQYWdlKCkge1xuICAgIGNvbnN0IHByb2plY3RzID0gW107XG5cbiAgICBjb25zdCBwcm9qZWN0MSA9IG5ldyBQcm9qZWN0KFwiVG9kYXlcIik7XG5cbiAgICBjb25zdCB0b2RvMTEgPSBuZXcgVG9kbyhcbiAgICAgICAgXCJHbyBvdXQgd2l0aCB0cmFzaFwiLFxuICAgICAgICBcInRoaXMgaXMgc29tZSByYW5kb21lIG5vdCBzbyBzaG9ydCBkZXNjcmlwdGlvblwiLFxuICAgICAgICAxLFxuICAgICAgICBuZXcgRGF0ZSgpXG4gICAgKTtcbiAgICBjb25zdCB0b2RvMTIgPSBuZXcgVG9kbyhcbiAgICAgICAgXCJHbyBzaG9wcGluZ1wiLFxuICAgICAgICBcInRoaXMgaXMgc29tZSByYW5kb21lIGxvbmdlciBkZXNjcmlwdGlvbiBhYm91dCBob3cgYXdlc29tZSBpcyB0aGlzIHRvZG9cIixcbiAgICAgICAgMCxcbiAgICAgICAgbmV3IERhdGUoKVxuICAgICk7XG5cbiAgICBwcm9qZWN0MS5hZGRUb2RvKHRvZG8xMSk7XG4gICAgcHJvamVjdDEuYWRkVG9kbyh0b2RvMTIpO1xuXG4gICAgY29uc3QgcHJvamVjdDIgPSBuZXcgUHJvamVjdChcIlRvbW9ycm93XCIpO1xuXG4gICAgY29uc3QgdG9kbzIxID0gbmV3IFRvZG8oXG4gICAgICAgIFwiR28gb3V0IHdpdGggdHJhc2ggdG9tb3Jyb3dcIixcbiAgICAgICAgXCJ0aGlzIGlzIHNvbWUgcmFuZG9tZSBub3Qgc28gc2hvcnQgZGVzY3JpcHRpb25cIixcbiAgICAgICAgMSxcbiAgICAgICAgbmV3IERhdGUoKVxuICAgICk7XG4gICAgY29uc3QgdG9kbzIyID0gbmV3IFRvZG8oXG4gICAgICAgIFwiR28gc2hvcHBpbmcgdG9tb3Jyb3dcIixcbiAgICAgICAgXCJ0aGlzIGlzIHNvbWUgcmFuZG9tZSBsb25nZXIgZGVzY3JpcHRpb24gYWJvdXQgaG93IGF3ZXNvbWUgaXMgdGhpcyB0b2RvXCIsXG4gICAgICAgIDAsXG4gICAgICAgIG5ldyBEYXRlKClcbiAgICApO1xuXG4gICAgcHJvamVjdDIuYWRkVG9kbyh0b2RvMjEpO1xuICAgIHByb2plY3QyLmFkZFRvZG8odG9kbzIyKTtcblxuICAgIHByb2plY3RzLnB1c2gocHJvamVjdDEsIHByb2plY3QyKTtcblxuICAgIHByb2plY3RzLmZvckVhY2goZGlzcGxheUNvbnRyb2xsZXIuYXBwZW5kUHJvamVjdCk7XG5cbiAgICBQcm9qZWN0LnNldEFjdGl2ZShwcm9qZWN0MSk7XG59XG4iLCJpbXBvcnQgZGlzcGxheUNvbnRyb2xsZXIgZnJvbSBcIi4vZGlzcGxheUNvbnRyb2xsZXJcIjtcbmltcG9ydCBpbml0UGFnZSBmcm9tIFwiLi9sb2FkSW5pdFwiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IFRvZG8gZnJvbSBcIi4vdG9kb1wiO1xuXG5pbml0UGFnZSgpO1xuXG5jb25zdCBhZGRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFza1wiKTtcbmNvbnN0IHRvZG9Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLWZvcm1cIik7XG5jb25zdCB0b2Rvc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kb3NcIik7XG5cbmFkZFRhc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldnQpID0+IHtcbiAgICBkaXNwbGF5Q29udHJvbGxlci50b2dnbGVUb2RvRm9ybSgpO1xufSk7XG5cbnRvZG9Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2dCkgPT4ge1xuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IFt0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkdWVEYXRlXSA9IFtcbiAgICAgICAgdG9kb0Zvcm0udGl0bGUudmFsdWUsXG4gICAgICAgIHRvZG9Gb3JtLmRlc2NyaXB0aW9uLnZhbHVlLFxuICAgICAgICB0b2RvRm9ybS5wcmlvcml0eS52YWx1ZSxcbiAgICAgICAgdG9kb0Zvcm0uZHVlRGF0ZS52YWx1ZSxcbiAgICBdO1xuXG4gICAgY29uc3QgdG9kbyA9IG5ldyBUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGR1ZURhdGUpO1xuICAgIFByb2plY3QuYWN0aXZlLmFkZFRvZG8odG9kbyk7XG4gICAgdG9kb0Zvcm0ucmVzZXQoKTtcbiAgICBkaXNwbGF5Q29udHJvbGxlci50b2dnbGVUb2RvRm9ybSgpO1xufSk7XG5cbnRvZG9zQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZ0KSA9PiB7XG4gICAgaWYgKGV2dC50YXJnZXQudHlwZSA9PT0gXCJjaGVja2JveFwiKSB7XG4gICAgICAgIGNvbnN0IHRvZG9ET00gPSBldnQudGFyZ2V0LmNsb3Nlc3QoXCIudG9kb1wiKTtcbiAgICAgICAgY29uc3QgdG9kbyA9IFByb2plY3QuYWN0aXZlLmdldFRvZG8odG9kb0RPTS5pZCk7XG4gICAgICAgIHRvZG8uY2hlY2tlZCA9IGV2dC50YXJnZXQuY2hlY2tlZDtcbiAgICB9XG59KTtcbiJdLCJuYW1lcyI6WyJhcHBlbmRUb2RvIiwidG9kbyIsInRvZG9ET00iLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwicHJpb3JpdHkiLCJkdWVEYXRlIiwiaWQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJwcmlvcml0eURPTSIsInR5cGUiLCJ0b2RvQm9keSIsInRvZG9UaXRsZSIsInRleHRDb250ZW50IiwiYXBwZW5kQ2hpbGQiLCJ0b2RvRGVzY3JpcHRpb24iLCJzdWJzdHIiLCJ0b2RvRHVlRGF0ZSIsImNhbGVuZGFyIiwidG9kb0RhdGUiLCJkZWxldGVJY29uIiwiX2NyZWF0ZVRvZG8iLCJxdWVyeVNlbGVjdG9yIiwidG9nZ2xlVG9kb0Zvcm0iLCJ0b2dnbGUiLCJhcHBlbmRQcm9qZWN0IiwicHJvamVjdCIsInByb2plY3RET00iLCJwcm9qZWN0TmFtZSIsIl9jcmVhdGVQcm9qZWN0Iiwic2V0QWN0aXZlUHJvamVjdCIsImdldEVsZW1lbnRCeUlkIiwicmVtb3ZlIiwiaW5uZXJIVE1MIiwidG9kb3MiLCJmb3JFYWNoIiwiUHJvamVjdCIsImNvbnN0cnVjdG9yIiwidGhpcyIsIk1hdGgiLCJyYW5kb20iLCJ0b1N0cmluZyIsInNsaWNlIiwiYWRkVG9kbyIsInB1c2giLCJkaXNwbGF5Q29udHJvbGxlciIsInJlbW92ZVRvZG8iLCJpbmRleCIsInNwbGljZSIsImdldFRvZG8iLCJmaW5kIiwic3RhdGljIiwiYWN0aXZlIiwiVG9kbyIsImNoZWNrZWQiLCJwcm9qZWN0cyIsInByb2plY3QxIiwidG9kbzExIiwiRGF0ZSIsInRvZG8xMiIsInByb2plY3QyIiwidG9kbzIxIiwidG9kbzIyIiwic2V0QWN0aXZlIiwiaW5pdFBhZ2UiLCJhZGRUYXNrIiwidG9kb0Zvcm0iLCJ0b2Rvc0NvbnRhaW5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJldnQiLCJwcmV2ZW50RGVmYXVsdCIsInZhbHVlIiwicmVzZXQiLCJ0YXJnZXQiLCJjbG9zZXN0Il0sInNvdXJjZVJvb3QiOiIifQ==