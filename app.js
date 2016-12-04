 angular
  .module('madapp', ['ngAnimate'])
  .component('mainComponent', {
    controller: class {
      constructor() {
        this.male_name = "Male Name";
        this.job_title = "Job Title";
        this.tedious_task = "Tedious Task";
        this.dirty_task = "Dirty Task";
        this.celebrity = "Celebrity";
        this.useless_skill = "Useless Skill";
        this.obnoxious_celebrity = "Obnoxious Celebrity";
        this.huge_number = "Huge Number";
        this.adjective = "Adjective";  
      }
      
      onChange(model) {
        this.male_name = model.maleName;
        this.job_title = model.jobTitle;
        this.tedious_task = model.tediousTask;
        this.dirty_task = model.dirtyTask;
        this.celebrity = model.celebrity;
        this.useless_skill = model.uselessSkill;
        this.obnoxious_celebrity = model.obnoxiousCelebrity;
        this.huge_number = model.hugeNumber;
        this.adjective = model.adjective;
      }
    },
    template: `   
      <inputs></inputs>
      <button ng-click="$ctrl.onChange(model)">Click</button>
      <final-text 
      	male-name="$ctrl.male_name",
      	job-title="$ctrl.job_title",
      	tedious-task="$ctrl.tedious_task",
	    dirty-task="$ctrl.dirty_task",
	    celebrity="$ctrl.celebrity",
	    useless-skill="$ctrl.useless_skill",
	    obnoxious-celebrity="$ctrl.obnoxious_celebrity",
	    huge-number="$ctrl.huge_number",
	    adjective="$ctrl.adjective"

      ></final-text>
    `
  })
  // https://docs.angularjs.org/guide/component
  .component('inputs', {
    bindings: {
      onChange: '&'  
    },
    controller: class {
      constructor() {
        this.model = {
          maleName: '',
          jobTitle: '',
          tediousTask: '',
          dirtyTask: '',
          celebrity: '',
          uselessSkill: '',
          obnoxiousCelebrity: '',
          hugeNumber: '',
          adjective: ''
        }
      } 
    },
    template: `
      <section class="input-container">
        <article>
          <input placeholder="Male Name" ng-model="$ctrl.model.maleName" ng-change="$ctrl.onChange({ model: $ctrl.model })" /> 
          <input placeholder="Job Title" ng-model="$ctrl.model.jobTitle" ng-change="$ctrl.onChange({ model: $ctrl.model })" /> 
          <input placeholder="Tedious Task" ng-model="$ctrl.model.tediousTask" ng-change="$ctrl.onChange({ model: $ctrl.model })" /> 
        </article>
        <article>
          <input placeholder="Dirty Task" ng-model="$ctrl.model.dirtyTask" ng-change="$ctrl.onChange({ model: $ctrl.model })" /> 
          <input placeholder="Celebrity" ng-model="$ctrl.model.celebrity" ng-change="$ctrl.onChange({ model: $ctrl.model })" /> 
          <input placeholder="Useless Skill" ng-model="$ctrl.model.uselessSkill" ng-change="$ctrl.onChange({ model: $ctrl.model })" /> 
        </article>
        <article>
          <input placeholder="Obnoxious Celebrity" ng-model="$ctrl.model.obnoxiousCelebrity" ng-change="$ctrl.onChange({ model: $ctrl.model })" /> 
          <input placeholder="Huge Number" ng-model="$ctrl.model.hugeNumber" ng-change="$ctrl.onChange({ model: $ctrl.model })" /> 
          <input placeholder="Adjective" ng-model="$ctrl.model.adjective" ng-change="$ctrl.onChange({ model: $ctrl.model })" /> 
        </article>  
      </section>
    `
  })
  .component('finalText', {
    bindings: {
      maleName: '<',
      jobTitle: '<',
      tediousTask: '<',
      celebrity: '<',
      uselessSkill: '<',
      obnoxiousCelebrity: '<',
      hugeNumber: '<',
      adjective: '<'
    },
    controller: class {
      constructor() {} 
    },
    template: `
      <section class="main_content" >
        <p>{{ $ctrl.maleName }} was a {{ $ctrl.jobTitle }} who loved technology. Although he loved parts of his job, he absolutely hated  {{ $ctrl.tediousTask }} and {{ $ctrl.dirtyTask }}. So, {{ $ctrl.maleName }} met with his life mentor {{ $ctrl.celebrity }} who told him to learn how to {{ $ctrl.uselessSkill }} with Thinkful. Thinkful did not offer a course on {{ $ctrl.uselessSkill }} so he studied programming instead.</p>
     
        <p>What a great decision! With his new skills, {{ $ctrl.maleName }} built a(n) {{ $ctrl.adjective }} robot named {{ $ctrl.obnoxiousCelebrity }} that not only loved {{ $ctrl.dirtyTask }} but did it {{ $ctrl.hugeNumber }} faster.</p>
      </section>
    `
  })
  

// Angular 2 
// @Component({
//   template: ``
// })
// class {
//   constructor() {
//     this.malePronoun = "he";
//     this.femalePronoun = "she";
//     this.male_name = "Male Name";
//     this.job_title = "Job Title"
//     this.tedious_task = "Tedious Task";
//     this.dirty_task = "Dirty Task";
//     this.celebrity = "Celebrity";
//     this.useless_skill = "Useless Skill";
//     this.obnoxious_celebrity = "Obnoxious Celebrity";
//     this.huge_number = "Huge Number";
//     this.adjective = "Adjective";  
//   }
// }